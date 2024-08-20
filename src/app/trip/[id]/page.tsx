"use client";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import MapLayout from "@/components/layouts/map/MapLayout";
import TripDetailLayout from "@/components/layouts/trip/TripDetailLayout";
import CheckUserLoggedIn from "@/components/auth/CheckUserLoggedIn";
import React from "react";

export default function TripDetail() {
  return (
    <>
      <CheckUserLoggedIn authRequired={true} />
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <TripDetailLayout />
      </DisplayFlexWrapper>
    </>
  );
}
