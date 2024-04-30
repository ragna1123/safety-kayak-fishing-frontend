"use client";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import MapLayout from "@/components/layouts/map/MapLayout";
import React from "react";
import TripUnreturnedLayout from "@/components/layouts/trip/TripUnreturnedLayout";

export default function TripUnreturned() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <TripUnreturnedLayout />
      </DisplayFlexWrapper>
    </>
  );
}
