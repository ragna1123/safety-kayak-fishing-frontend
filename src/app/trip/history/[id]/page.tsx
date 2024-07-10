"use client";
import React from "react";
import Header from "@/components/layouts/header/Header";
import TripHistoryLayout from "@/components/layouts/trip/TripHistoryLayout";
import TripHistoryDetailLayout from "@/components/layouts/trip/TripHistoryDetailLayout";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";

export default function TripHistoryDetail() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <TripHistoryDetailLayout />
        <TripHistoryLayout />
      </DisplayFlexWrapper>
    </>
  );
}
