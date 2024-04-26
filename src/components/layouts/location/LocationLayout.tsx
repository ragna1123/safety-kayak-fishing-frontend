"use client";
import React from "react";
import LocationCard from "@/components/ui-parts/card/LocationCard";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import { useRecoilValue } from "recoil";
import { locationState } from "@/common/states/locationState";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";

interface LocationState {
  locationName: string;
  lat?: number; // 緯度
  lng?: number; // 経度
}

export default function LocationLayout() {
  const location: LocationState = useRecoilValue<LocationState>(locationState);

  if (!location) {
    return <p>地点名が見つかりませんでした</p>;
  }

  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <div className="flex justify-center p-4 mt-4 items-center">
          <h1 className="text-2xl font-bold">{location.locationName}</h1>
        </div>
        <CardBodyWrapper>
          <LocationCard locationData={location} />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
