"use client";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import MapLayout from "@/components/layouts/map/MapLayout";
import TripLayout from "@/components/layouts/trip/TripScheduleLayout";
import React from "react";

export default function Trip() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <TripLayout />
      </DisplayFlexWrapper>
    </>
  );
}
