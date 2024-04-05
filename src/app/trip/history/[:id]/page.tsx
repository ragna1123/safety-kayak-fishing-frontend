import React from "react";
import Header from "@/components/layouts/header/Header";
import TripHistoryLayout from "@/components/layouts/trip/history/TripHistoryLayout";
import TripHistoryDetailLayout from "@/components/layouts/trip/history/TripHistoryDetailLayout";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";

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
