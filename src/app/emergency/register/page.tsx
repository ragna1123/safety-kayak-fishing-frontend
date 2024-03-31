import EmergencyLayout from "@/components/layouts/emergency/EmergencyLayout";
import EmergencyDetailLayout from "@/components/layouts/emergency/EmergencyDetailLayout";
import Header from "@/components/layouts/header/Header";



export default function EmergencyRegister() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <EmergencyDetailLayout />
        <EmergencyLayout />
      </div>
    </>
  );
}