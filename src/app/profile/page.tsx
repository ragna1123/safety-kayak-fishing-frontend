import React from 'react'
import Header from "@/components/layouts/header/Header";
import MapLayout from "@/components/layouts/map/MapLayout";
import ProfileLayout from '@/components/layouts/profile/ProfileLayout';

export default function Profile() {
  return (
    <>
    <Header />
    <div className="flex flex-col md:flex-row min-h-screen">
      <MapLayout />
      <ProfileLayout />
    </div>
  </>
  )
}