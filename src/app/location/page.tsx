import React from "react";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import LocationLayout from "@/components/layouts/location/LocationLayout";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";

export default function Location() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <LocationLayout />
      </DisplayFlexWrapper>
    </>
  );
}
