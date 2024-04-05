import HeroSection from "@/components/layouts/hero/HeroSection";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";
import RegisterLayout from "@/components/layouts/register/RegisterLayout";

export default function Resister() {
  return (
    <DisplayFlexWrapper>
      <HeroSection />
      <RegisterLayout />
    </DisplayFlexWrapper>
  );
}
