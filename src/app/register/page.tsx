"use client";
import HeroSection from "@/components/layouts/hero/HeroSection";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import RegisterLayout from "@/components/layouts/register/RegisterLayout";
import BlockLoginForAuthenticated from "@/components/auth/BlockLoginForAuthenticated";

export default function Register() {
  return (
    <>
      <BlockLoginForAuthenticated />
      <DisplayFlexWrapper>
        <HeroSection />
        <RegisterLayout />
      </DisplayFlexWrapper>
    </>
  );
}
