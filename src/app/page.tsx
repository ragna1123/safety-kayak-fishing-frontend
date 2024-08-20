import HeroSection from "@/components/layouts/hero/HeroSection";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import LoginLayout from "@/components/layouts/login/LoginLayout";
import BlockLoginForAuthenticated from "@/components/auth/BlockLoginForAuthenticated";

export default function Login() {
  return (
    <>
      <BlockLoginForAuthenticated />
      <DisplayFlexWrapper>
        <HeroSection />
        <LoginLayout />
      </DisplayFlexWrapper>
    </>
  );
}
