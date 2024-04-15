import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";
import MapLayout from "@/components/layouts/map/MapLayout";
import GoingTripLayout from "@/components/layouts/trip/goingTrip/GoingTripLayout";
import React from "react";

export default function OnGoingTrip() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <GoingTripLayout />
      </DisplayFlexWrapper>
    </>
  );
}
