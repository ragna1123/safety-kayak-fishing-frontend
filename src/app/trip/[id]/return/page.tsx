"use client";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import TripReturnReportLayout from "@/components/layouts/trip/TripReturnReportLayout";
import React from "react";
import GoingTripLayout from "@/components/layouts/trip/GoingTripLayout";
import MapLayout from "@/components/layouts/map/MapLayout";

export default function TripReturn() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <TripReturnReportLayout />
      </DisplayFlexWrapper>
    </>
  );
}
