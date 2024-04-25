"use client";
import React from "react";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import OngoingTripCard from "@/components/ui-parts/card/OngoingTripCard";

export default function GoingTripLayout() {
  return (
    <DisplaySplitWrapper>
      <OngoingTripCard detailToggle={true} />
    </DisplaySplitWrapper>
  );
}
