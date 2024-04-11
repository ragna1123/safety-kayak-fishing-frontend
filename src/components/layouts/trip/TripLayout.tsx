import TripScheduleCard from "@/components/ui-parts/trip/schedule/TripScheduleCard";
import React from "react";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";
import ToggleFavoriteIcon from "@/components/ui-parts/button/ToggleFavoriteIcon";

export default function TripLayout() {
  return (
    <DisplaySplitWrapper>
      <div className="text-center p-4">
        <h1 className="text-3xl font-bold mb-2">出船予定</h1>
        <p className="text-lg mb-2">出船時間: 6:00 - 13:00</p>
        <div className="flex justify-center items-center gap-4"></div>
      </div>
      <TripScheduleCard />
    </DisplaySplitWrapper>
  );
}
