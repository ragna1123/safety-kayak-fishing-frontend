import FavoriteCard from "@/components/ui-parts/trip/favorite/FavoriteCard";
import OngoingTripCard from "@/components/ui-parts/trip/ongoingTrip/OngoingTripCard";
import TripScheduleCard from "@/components/ui-parts/trip/schedule/TripScheduleCard";
import React from "react";

export default function HomeLayout() {
  return (
    <div className="md:w-1/2 w-full items-center">
      <OngoingTripCard />
      <FavoriteCard />
      <TripScheduleCard />
    </div>
  );
}
