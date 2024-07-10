"use client";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import EmergencyLayout from "@/components/layouts/emergency/EmergencyLayout";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";

export default function Emergency() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <EmergencyLayout />
      </DisplayFlexWrapper>
    </>
  );
}
