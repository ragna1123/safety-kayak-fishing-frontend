import TripScheduleCard from "@/components/ui-parts/card/TripScheduleCard";
import React from "react";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";

export default function TripScheduleLayout() {
  return (
    <DisplaySplitWrapper>
      <TripScheduleCard />
    </DisplaySplitWrapper>
  );
}
