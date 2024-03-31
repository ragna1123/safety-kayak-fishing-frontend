import React from "react";
import FavoriteLayout from "@/components/layouts/favorite/FavoriteLayout";
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";

export default function Favorite() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <MapLayout />
        <FavoriteLayout />
      </div>
    </>
  );
}
