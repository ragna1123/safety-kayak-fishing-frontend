"use client";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";
import HomeLayout from "@/components/layouts/home/HomeLayout";

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
