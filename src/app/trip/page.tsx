import Header from '@/components/layouts/header/Header'
import MapLayout from '@/components/layouts/map/MapLayout'
import TripLayout from '@/components/layouts/trip/TripLayout'
import React from 'react'

export default function Trip() {
  return (
    <>
    <Header />
    <div className="flex flex-col md:flex-row min-h-screen">
      <MapLayout />
      <TripLayout />
    </div>
    </>
  )
}