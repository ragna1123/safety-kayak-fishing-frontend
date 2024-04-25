"use client";
import React, { useEffect } from "react";
import LocationCard from "@/components/ui-parts/card/LocationCard";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import { useRecoilState } from "recoil";
import { locationState } from "@/common/states/locationState";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";

export default function LocationLayout() {
  const [locationData, setLocationData] = useRecoilState(locationState);

  // 初回のみsessionStorageからlocationを取得するためにuseEffectを使用
  useEffect(() => {
    if (!locationData?.lat && !locationData?.lng) {
      const storedLocation = sessionStorage.getItem("location");
      if (storedLocation) {
        setLocationData(JSON.parse(storedLocation));
      }
    }
  }, [locationData, setLocationData]);

  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <div className="flex justify-center p-4 mt-4 items-center">
          <h1 className="text-2xl font-bold">地点名</h1>
          {/* ここにお気に入りアイコンを切り替えるコンポーネントがあればコメントを解除 */}
        </div>
        <h2 className="text-l font-bold text-center mt-2 mb-1">地点名詳細</h2>
        <CardBodyWrapper>
          <LocationCard />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
