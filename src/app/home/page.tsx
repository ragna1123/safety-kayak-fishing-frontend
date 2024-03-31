import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import HomeLayout from "@/components/layouts/home/HomeLayout";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <MapLayout />
        <HomeLayout />
      </div>
    </>
  );
}
