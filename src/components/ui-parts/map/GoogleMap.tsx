"use client";
import React, { useRef, useEffect } from "react";
import { useGoogleMap } from "@/common/hooks/useGoogleMap";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { locationState } from "@/common/states/locationState";

type Location = {
  lat: number;
  lng: number;
};

type GoogleMapProps = {
  locations: Location[];
};

const GoogleMap: React.FC<GoogleMapProps> = ({ locations }) => {
  const googleMapRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { googleMap, marker, setMarker } = useGoogleMap(googleMapRef, locations);
  const [recoilLocation, setRecoilLocation] = useRecoilState(locationState);

  useEffect(() => {
    if (!googleMap && window.google) {
      const defaultLocation = { lat: 35.6895, lng: 139.6917 }; // 東京の座標をデフォルト位置とする
      const initialLocation = recoilLocation?.latitude && recoilLocation?.longitude
        ? { lat: recoilLocation.latitude, lng: recoilLocation.longitude }
        : defaultLocation;

      const map = new google.maps.Map(googleMapRef.current!, {
        center: initialLocation,
        zoom: 11,
      });
      const newMarker = new google.maps.Marker({
        position: initialLocation,
        map: map,
        title: "Initial Location",
      });
      setMarker(newMarker);
    }
  }, []); // 依存配列を空にしてマウント時のみ実行

  useEffect(() => {
    let clickListener: google.maps.MapsEventListener | undefined;
    if (googleMap) {
      clickListener = google.maps.event.addListener(googleMap, "click", (e) => {
        if (marker) {
          // マーカーがすでにある場合は削除
          marker.setMap(null);
        }
        const newMarker = new google.maps.Marker({
          position: e.latLng,
          map: googleMap,
        });

        router.push("/location");
        setRecoilLocation({ latitude: e.latLng.lat(), longitude: e.latLng.lng() });
        setMarker(newMarker);
      });

      return () => {
        if (clickListener) {
          google.maps.event.removeListener(clickListener);
        }
      };
    }
  }, [googleMap, marker]);

  return <div ref={googleMapRef} style={{ width: "100%", height: "100%" }}></div>;
};

GoogleMap.displayName = "GoogleMap";

export default GoogleMap;
