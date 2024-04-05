import React from "react";
import FavoriteCard from "@/components/ui-parts/trip/favorite/FavoriteCard";
import OngoingTripCard from "@/components/ui-parts/trip/ongoingTrip/OngoingTripCard";
import TripScheduleCard from "@/components/ui-parts/trip/schedule/TripScheduleCard";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";


export default function HomeLayout() {
  
  return (
    <DisplaySplitWrapper>
      <OngoingTripCard />
      <FavoriteCard />
      <TripScheduleCard />
    </DisplaySplitWrapper>
  );
}
