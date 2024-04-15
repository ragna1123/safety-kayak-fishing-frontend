import React from "react";
import FavoriteLayout from "@/components/layouts/favorite/FavoriteLayout";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";

export default function Favorite() {
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <FavoriteLayout />
      </DisplayFlexWrapper>
    </>
  );
}
