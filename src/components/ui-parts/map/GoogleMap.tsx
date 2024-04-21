"use client";
// components/GoogleMap.js
import React, { useRef, useEffect } from "react";
import { useGoogleMap } from "@/common/hooks/useGoogleMap";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { locationState } from "@/common/states/locationState";

const GoogleMap = ({ locations }) => {
  const googleMapRef = useRef(null);
  const router = useRouter();
  const { googleMap, marker, setMarker } = useGoogleMap(googleMapRef, locations);
  const [recoilLocation, setRecoilLocation] = useRecoilState(locationState);

  // マップ初期化とマーカーの配置
  useEffect(() => {
    const initializeMap = () => {
      if (window.google && !googleMap) {
        const storedLocation = sessionStorage.getItem("location");
        let initialLocation = storedLocation ? JSON.parse(storedLocation) : null;

        if (!initialLocation && recoilLocation?.lat && recoilLocation?.lng) {
          initialLocation = recoilLocation;
        }

        const initialConfig = {
          center: initialLocation,
          zoom: 12,
        };

        const map = new google.maps.Map(googleMapRef.current, initialConfig);
        setMarker(
          new google.maps.Marker({
            position: initialConfig.center,
            map: map,
            title: "Initial Location",
          })
        );
      }
    };

    initializeMap();
  }, [recoilLocation, setMarker, setRecoilLocation, googleMap]);

  useEffect(() => {
    if (googleMap) {
      const clickListener = google.maps.event.addListener(googleMap, "click", (e) => {
        if (marker) {
          marker.setMap(null);
        }

        const newMarker = new google.maps.Marker({
          position: e.latLng,
          map: googleMap,
        });

        setMarker(newMarker);
        setRecoilLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        sessionStorage.setItem("location", JSON.stringify({ lat: e.latLng.lat(), lng: e.latLng.lng() }));

        router.push("/location");
      });

      return () => {
        google.maps.event.clearListeners(googleMap, "click");
      };
    }
  }, [googleMap, setMarker, marker, setRecoilLocation, router]);

  return <div ref={googleMapRef} style={{ width: "100%", height: "100%" }}></div>;
};

GoogleMap.displayName = "GoogleMap";

export default GoogleMap;
