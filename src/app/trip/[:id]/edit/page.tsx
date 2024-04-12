import Header from "@/components/layouts/header/Header";
import TripLayout from "@/components/layouts/trip/TripLayout";
import TripEditLayout from "@/components/layouts/trip/edit/TripEditLayout";
import React from "react";

export default function TripEdit() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <TripEditLayout />
        <TripLayout />
      </div>
    </>
  );
}
