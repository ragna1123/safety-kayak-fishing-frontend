import Header from '@/components/layouts/header/Header'
import MapLayout from '@/components/layouts/map/MapLayout'
import TripReturnLayout from '@/components/layouts/trip/return/TripReturnLayout'
import React from 'react'

export default function TripReturn() {
  return (
    <>
    <Header />
    <div className="flex flex-col md:flex-row min-h-screen">
      <MapLayout />
      <TripReturnLayout />
    </div>
  </>
  )
}