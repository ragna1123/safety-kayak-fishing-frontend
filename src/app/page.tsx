"use client";
import HeroSection from "@/components/layouts/hero/HeroSection";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import LoginLayout from "@/components/layouts/login/LoginLayout";

export default function Login() {
  return (
    <>
      <DisplayFlexWrapper>
        <HeroSection />
        <LoginLayout />
      </DisplayFlexWrapper>
    </>
  );
}
