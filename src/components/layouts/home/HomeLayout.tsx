"use client";
import React from "react";
import FavoriteCard from "@/components/ui-parts/card/favorite/FavoriteCard";
import OngoingTripCard from "@/components/ui-parts/card/ongoingTrip/OngoingTripCard";
import TripScheduleCard from "@/components/ui-parts/card/schedule/TripScheduleCard";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";

export default function HomeLayout() {
  return (
    <DisplaySplitWrapper>
      <OngoingTripCard detailToggle={false} />
      <TripScheduleCard />
      <FavoriteCard />
    </DisplaySplitWrapper>
  );
}
