import React from "react";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import ProfileLayout from "@/components/layouts/profile/ProfileLayout";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";

export default function Profile() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <ProfileLayout />
      </DisplayFlexWrapper>
    </>
  );
}
