"use client";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import LocationLayout from "@/components/layouts/location/LocationLayout";
import CheckUserLoggedIn from "@/components/auth/CheckUserLoggedIn";

export default function Location() {
  return (
    <>
      <CheckUserLoggedIn />
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <LocationLayout />
      </DisplayFlexWrapper>
    </>
  );
}
