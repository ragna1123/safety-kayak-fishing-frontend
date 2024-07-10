"use client";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import TripDetailLayout from "@/components/layouts/trip/TripDetailLayout";
import TripEditLayout from "@/components/layouts/trip/TripEditLayout";
import React from "react";

export default function TripEdit() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <TripEditLayout />
        <TripDetailLayout />
      </DisplayFlexWrapper>
    </>
  );
}
