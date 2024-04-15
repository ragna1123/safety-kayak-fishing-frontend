// hooks/useGoogleMap.js
"use client";
import { useEffect, useState } from "react";

export const useGoogleMap = (ref, locations) => {
  const [googleMap, setGoogleMap] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const initGoogleMap = () => {
      const map = new google.maps.Map(ref.current, {
        center: locations[0],
        zoom: 12,
      });
      setGoogleMap(map);
    };

    if (window.google && window.google.maps) {
      initGoogleMap();
    } else {
      const googleMapScript = document.createElement("script");
      googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      googleMapScript.async = true;
      googleMapScript.defer = true;
      window.document.body.appendChild(googleMapScript);
      googleMapScript.onload = initGoogleMap;

      return () => {
        window.document.body.removeChild(googleMapScript);
      };
    }
  }, [ref, locations]);

  return { googleMap, marker, setMarker };
};
