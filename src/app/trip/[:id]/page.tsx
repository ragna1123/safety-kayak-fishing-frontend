import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import GoingTripLayout from "@/components/layouts/trip/goingTrip/GoingTripLayout";
import React from "react";

export default function OnGoingTrip() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <MapLayout />
        <GoingTripLayout />
      </div>
    </>
  );
}
