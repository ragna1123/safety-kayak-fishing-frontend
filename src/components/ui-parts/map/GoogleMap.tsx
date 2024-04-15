"use client";
// components/GoogleMap.js
import React, { useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { locationState } from "@/common/states/locationState";
import { useGoogleMap } from "@/common/hooks/useGoogleMap";

const GoogleMap = ({ locations }) => {
  const googleMapRef = useRef(null);
  const { googleMap, marker, setMarker } = useGoogleMap(googleMapRef, locations);
  const [location, setLocation] = useRecoilState(locationState);

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
        setLocation({ lat: e.latLng.lat(), lng: e.latLng.lng() });
        console.log(`緯度: ${e.latLng.lat()}, 経度: ${e.latLng.lng()}`);
      });

      return () => {
        google.maps.event.removeListener(clickListener);
      };
    }
  }, [googleMap, setMarker, setLocation, marker]);

  return <div ref={googleMapRef} style={{ width: "100%", height: "100%" }}></div>;
};

export default GoogleMap;
