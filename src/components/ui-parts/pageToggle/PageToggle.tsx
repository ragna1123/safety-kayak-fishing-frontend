import React from "react";
import HomeLayout from "@/components/layouts/home/HomeLayout";
import LocationLayout from "@/components/layouts/location/LocationLayout";
import { locationState } from "@/common/states/locationState";
import { useRecoilValue } from "recoil";

export default function HomeLocationToggle() {
  const locationData = useRecoilValue(locationState);
  return <>{locationData ? <LocationLayout /> : <HomeLayout />}</>;
}
