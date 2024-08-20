"use client";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import DisplayFlexWrapper from "@/components/layouts/_layoutWrapper/display/DisplayFlexWrapper";
import HomeLayout from "@/components/layouts/home/HomeLayout";
import CheckUserLoggedIn from "@/components/auth/CheckUserLoggedIn";

export default function Home() {
  return (
    <>
      <CheckUserLoggedIn authRequired={true} />
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <HomeLayout />
      </DisplayFlexWrapper>
    </>
  );
}
