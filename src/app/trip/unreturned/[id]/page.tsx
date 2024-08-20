"use client";
import React from "react";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import TripReturnReportLayout from "@/components/layouts/trip/TripReturnReportLayout";
import MapLayout from "@/components/layouts/map/MapLayout";
import CheckUserLoggedIn from "@/components/auth/CheckUserLoggedIn";

export default function TripUnreturnedReport() {
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
