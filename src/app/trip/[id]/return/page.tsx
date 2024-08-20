"use client";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import TripReturnReportLayout from "@/components/layouts/trip/TripReturnReportLayout";
import React from "react";
import MapLayout from "@/components/layouts/map/MapLayout";
import CheckUserLoggedIn from "@/components/auth/CheckUserLoggedIn";

export default function TripReturn() {
  return (
    <>
      <CheckUserLoggedIn authRequired={true} />
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <TripReturnReportLayout />
      </DisplayFlexWrapper>
    </>
  );
}
