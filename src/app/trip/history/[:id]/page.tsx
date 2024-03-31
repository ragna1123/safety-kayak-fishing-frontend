import Header from '@/components/layouts/header/Header'

import TripHistoryLayout from '@/components/layouts/trip/history/TripHistoryLayout'
import TripHistoryDetailLayout from '@/components/layouts/trip/history/TripHistoryDetailLayout'
import React from 'react'

export default function TripHistoryDetail() {
  return (
    <>
    <Header />
    <div className="flex flex-col md:flex-row min-h-screen">
      <TripHistoryDetailLayout />
      <TripHistoryLayout />
    </div>
    </>
  )
}