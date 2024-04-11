import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import TripHistoryLayout from "@/components/layouts/trip/history/TripHistoryLayout";
import React from "react";

export default function TripHistory() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <MapLayout />
        <TripHistoryLayout />
      </div>
    </>
  );
}
