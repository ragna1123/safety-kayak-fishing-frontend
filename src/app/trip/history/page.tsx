"use client";
import CheckUserLoggedIn from "@/components/auth/CheckUserLoggedIn";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import TripHistoryLayout from "@/components/layouts/trip/TripHistoryLayout";
import React from "react";

export default function TripHistory() {
  return (
    <>
      <CheckUserLoggedIn />
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <TripHistoryLayout />
      </DisplayFlexWrapper>
    </>
  );
}
