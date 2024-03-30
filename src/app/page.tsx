import HeroSection from "@/components/layouts/hero/HeroSection";
import LoginLayout from "@/components/layouts/login/LoginLayout";

export default function Login() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <HeroSection />
      <LoginLayout />
    </div>
  );
}
