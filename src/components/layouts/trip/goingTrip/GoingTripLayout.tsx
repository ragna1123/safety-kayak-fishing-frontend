"use client";
import React from "react";
import DisplaySplitWrapper from "../../layoutWrapper/display/DisplaySplitWrapper";
import OngoingTripCard from "@/components/ui-parts/trip/ongoingTrip/OngoingTripCard";

export default function GoingTripLayout() {
  return (
    <DisplaySplitWrapper>
      <OngoingTripCard detailToggle={true}/>
    </DisplaySplitWrapper>
  );
}