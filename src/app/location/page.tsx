import React from 'react'
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import LocationLayout from '@/components/layouts/location/LocationLayout';

export default function Location() {
  return (
    <>
    <Header />
    <div className="flex flex-col md:flex-row min-h-screen">
      <MapLayout />
      <LocationLayout />
    </div>
  </>
  )
}