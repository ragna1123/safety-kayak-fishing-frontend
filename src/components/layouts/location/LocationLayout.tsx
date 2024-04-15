"use client";
import ToggleFavoriteIcon from "@/components/ui-parts/button/ToggleFavoriteIcon";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../layoutWrapper/card/CardWrapper";
import LocationCard from "@/components/ui-parts/card/location/LocationCard";
import CardBodyWrapper from "../layoutWrapper/card/CardBodyWrapper";
import { useRecoilValue } from "recoil";
import { locationState } from "@/common/states/locationState";

export default function LocationLayout() {
  const locationData = useRecoilValue(locationState);
  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <div className="flex justify-center p-4 mt-4 items-center">
          <h1 className="text-2xl font-bold">地点名</h1>
          {/* <ToggleFavoriteIcon /> */}
        </div>
        <h2 className="text-l font-bold text-center mt-2 mb-1">地点名詳細</h2>
        <CardBodyWrapper>
          <LocationCard locationData={locationData} />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
