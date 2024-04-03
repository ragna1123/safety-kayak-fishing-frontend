import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import HomeLayout from "@/components/layouts/home/HomeLayout";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";

export default function Home() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <HomeLayout />
      </DisplayFlexWrapper>
    </>
  );
}
