"use client";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import MapLayout from "@/components/layouts/map/MapLayout";
import TripDetailLayout from "@/components/layouts/trip/TripDetailLayout";
import React from "react";
import CheckUserLoggedIn from "@/components/auth/CheckUserLoggedIn";

export default function TripDetail() {
  return (
    <>
      <CheckUserLoggedIn />
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <TripDetailLayout />
      </DisplayFlexWrapper>
    </>
  );
}
