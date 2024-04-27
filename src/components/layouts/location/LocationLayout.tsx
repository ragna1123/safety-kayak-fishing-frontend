"use client";
import React from "react";
import LocationCard from "@/components/ui-parts/card/LocationCard";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import { useRecoilValue } from "recoil";
import { locationState } from "@/common/states/locationState";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import { useRouter } from "next/navigation";

interface LocationState {
  locationName: string;
  latitude?: number; // 緯度
  longitude?: number; // 経度
}

export default function LocationLayout() {
  const locationRecoilData: LocationState = useRecoilValue<LocationState>(locationState);
  const router = useRouter();

  if (!locationRecoilData) {
    router.push("/home");
  }

  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <div className="flex justify-center p-4 mt-4 items-center">
          <h1 className="text-2xl font-bold">{locationRecoilData?.locationName}</h1>
        </div>
        <CardBodyWrapper>
          <LocationCard />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
