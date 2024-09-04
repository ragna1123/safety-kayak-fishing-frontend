"use client";
import React from "react";
import Header from "@/components/layouts/header/Header";
import TripHistoryDetailLayout from "@/components/layouts/trip/TripHistoryDetailLayout";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import MapLayout from "@/components/layouts/map/MapLayout";
import CheckUserLoggedIn from "@/components/auth/CheckUserLoggedIn";

export default function TripHistoryDetail() {
  return (
    <>
      <CheckUserLoggedIn />
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <TripHistoryDetailLayout />
      </DisplayFlexWrapper>
    </>
  );
}
