import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import EmergencyLayout from "@/components/layouts/emergency/EmergencyLayout";

export default function Emergency() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <MapLayout />
        <EmergencyLayout />
      </div>
    </>
  );
}
