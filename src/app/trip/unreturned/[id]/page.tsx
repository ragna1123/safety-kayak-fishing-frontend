"use client";
import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";

import React from "react";
import TripUnreturnedLayout from "@/components/layouts/trip/TripUnreturnedLayout";
import TripReturnReportLayout from "@/components/layouts/trip/TripReturnReportLayout";

export default function TripUnreturnedReport() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <TripReturnReportLayout />
        <TripUnreturnedLayout />
      </DisplayFlexWrapper>
    </>
  );
}
