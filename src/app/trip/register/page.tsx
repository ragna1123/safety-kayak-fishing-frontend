import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";
import LocationLayout from "@/components/layouts/location/LocationLayout";
import TripRegisterLayout from "@/components/layouts/trip/register/TripRegisterLayout";
import React from "react";

export default function TripRegister() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <TripRegisterLayout />
        <LocationLayout />
      </DisplayFlexWrapper>
    </>
  );
}
