import HeroSection from "@/components/layouts/hero/HeroSection";
import RegisterLayout from "@/components/layouts/register/RegisterLayout";

export default function Resister() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <HeroSection />
      <RegisterLayout />
    </div>
  );
}
