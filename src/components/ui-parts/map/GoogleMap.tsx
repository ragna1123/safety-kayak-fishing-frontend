/* eslint-disable */
// @ts-nocheck
// @ts-ignore

"use client";
import React, { useEffect, useRef } from "react";

const GoogleMap = ({ locations }) => {
  const googleMapRef = useRef(null);
  let googleMap: any = null;

  // Google Maps を初期化し、マーカーを配置する関数
  useEffect(() => {
    const initGoogleMap = () => {
      googleMap = new google.maps.Map(googleMapRef.current, {
        center: locations[0],
        zoom: 8,
      });

      // マーカーを配置
      locations.forEach((location) => {
        new google.maps.Marker({
          position: location,
          map: googleMap,
        });
      });
    };

    // Google Maps スクリプトを非同期で読み込み、初期化関数を実行
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
    googleMapScript.async = true;
    googleMapScript.defer = true;
    window.document.body.appendChild(googleMapScript);
    googleMapScript.addEventListener("load", initGoogleMap);
    return () => {
      googleMapScript.removeEventListener("load", initGoogleMap);
    };
  }, []);

  return (
    <div ref={googleMapRef} style={{ width: "auto", height: "auto" }}></div>
  );
};

export default GoogleMap;
