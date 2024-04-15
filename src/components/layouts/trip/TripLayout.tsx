import TripScheduleCard from "@/components/ui-parts/card/schedule/TripScheduleCard";
import React from "react";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";
import ToggleFavoriteIcon from "@/components/ui-parts/button/ToggleFavoriteIcon";

export default function TripLayout() {
  return (
    <DisplaySplitWrapper>
      <TripScheduleCard />
    </DisplaySplitWrapper>
  );
}
