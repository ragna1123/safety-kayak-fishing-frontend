"use client";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import EmergencyLayout from "@/components/layouts/emergency/EmergencyLayout";
import EmergencyRegisterLayout from "@/components/layouts/emergency/EmergencyRegisterLayout";
import Header from "@/components/layouts/header/Header";

export default function EmergencyRegister() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <EmergencyRegisterLayout />
        <EmergencyLayout />
      </DisplayFlexWrapper>
    </>
  );
}
