"use client";
import React from "react";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";
import GoogleMap from "@/components/ui-parts/map/GoogleMap";

export default function MapLayout() {
  const locations = [
    { lat: 35.6895, lng: 139.6917 }, // 東京
    { lat: 34.6937, lng: 135.5023 }, // 大阪
    // 他の緯度経度
  ];

  return (
    <DisplaySplitWrapper leftPosition={true}>
      {/* Googleマップを表示 */}
      <GoogleMap locations={locations} />
    </DisplaySplitWrapper>
  );
}
