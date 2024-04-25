"use client";
import React from "react";
import FavoriteCard from "@/components/ui-parts/card/FavoriteCard";
import OngoingTripCard from "@/components/ui-parts/card/OngoingTripCard";
import TripScheduleCard from "@/components/ui-parts/card/TripScheduleCard";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";

export default function HomeLayout() {
  return (
    <DisplaySplitWrapper>
      <OngoingTripCard detailToggle={false} />
      <TripScheduleCard />
      <FavoriteCard />
    </DisplaySplitWrapper>
  );
}
