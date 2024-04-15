"use client";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";
import HomeLocationToggle from "@/components/ui-parts/pageToggle/PageToggle";

export default function Home() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <HomeLocationToggle />
      </DisplayFlexWrapper>
    </>
  );
}
