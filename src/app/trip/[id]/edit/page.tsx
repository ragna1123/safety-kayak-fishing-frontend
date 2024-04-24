import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";
import TripLayout from "@/components/layouts/trip/TripLayout";
import TripDetailLayout from "@/components/layouts/trip/detail/TripDetailLayout";
import TripEditLayout from "@/components/layouts/trip/edit/TripEditLayout";
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
