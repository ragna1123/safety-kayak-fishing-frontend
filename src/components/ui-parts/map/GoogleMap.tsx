"use client";
import React, { useRef, useEffect } from "react";
import { useGoogleMap } from "@/common/hooks/useGoogleMap";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { locationState } from "@/common/states/locationState";
import FetchLocationName from "@/components/serverComponents/FetchLocationName";

const GoogleMap = ({ locations }) => {
  const googleMapRef = useRef(null);
  const router = useRouter();
  const { googleMap, marker, setMarker } = useGoogleMap(googleMapRef, locations);
  const [recoilLocation, setRecoilLocation] = useRecoilState(locationState);

  // マップ初期化とマーカーの設定
  useEffect(() => {
    if (!googleMap && window.google) {
      const initialLocation = recoilLocation || { lat: 35.681236, lng: 139.767125 };
      const map = new google.maps.Map(googleMapRef.current, {
        center: initialLocation,
        zoom: 12,
      });
      const newMarker = new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: "Initial Location",
      });
      setMarker(newMarker);
    }
  }, [recoilLocation, setMarker, googleMap]);

  // クリックイベントの設定
  useEffect(() => {
    const handleMapClick = async (e) => {
      if (marker) {
        marker.setMap(null);
      }
      const newMarker = new google.maps.Marker({
        position: e.latLng,
        map: googleMap,
      });
      setMarker(newMarker);

      const locationName = await FetchLocationName({ location_data: { latitude: e.latLng.lat(), longitude: e.latLng.lng() } });

      setRecoilLocation({ lat: e.latLng.lat(), lng: e.latLng.lng(), locationName });

      router.push("/location");
    };

    if (googleMap) {
      const clickListener = google.maps.event.addListener(googleMap, "click", handleMapClick);

      // クリーンアップ関数
      return () => {
        google.maps.event.removeListener(clickListener);
      };
    }
  }, [googleMap, setMarker, marker, setRecoilLocation, router]);

  return <div ref={googleMapRef} style={{ width: "100%", height: "100%" }}></div>;
};

GoogleMap.displayName = "GoogleMap";

export default GoogleMap;
