import Header from '@/components/layouts/header/Header'
import LocationLayout from '@/components/layouts/location/LocationLayout'
import TripRegisterLayout from '@/components/layouts/trip/register/TripRegisterLayout'
import React from 'react'

export default function TripRegister() {
  return (
    <>
    <Header />
    <div className="flex flex-col md:flex-row min-h-screen">
      <TripRegisterLayout />
      <LocationLayout />
    </div>
    </>
  )
}