import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";
import MapLayout from "@/components/layouts/map/MapLayout";
import TripReturnLayout from "@/components/layouts/trip/return/TripReturnLayout";
import React from "react";

export default function TripReturn() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <TripReturnLayout />
      </DisplayFlexWrapper>
    </>
  );
}
