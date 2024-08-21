"use client";
import HeroSection from "@/components/layouts/hero/HeroSection";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import RegisterLayout from "@/components/layouts/register/RegisterLayout";

export default function Register() {
  return (
    <>
      <DisplayFlexWrapper>
        <HeroSection />
        <RegisterLayout />
      </DisplayFlexWrapper>
    </>
  );
}
