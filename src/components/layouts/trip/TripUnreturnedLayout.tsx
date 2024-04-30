import React, { use, useEffect, useState } from "react";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import axios from "axios";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import { useRouter } from "next/navigation";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function TripUnreturnedLayout() {
  const [unreturnedTrips, setUnreturnedTrips] = useState([]);
  const router = useRouter();
  const fetchUnreturnedTrips = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/unreturned`, { withCredentials: true });
      console.log("Unreturned trip details:", res.data);
      setUnreturnedTrips(res.data.data);
    } catch (error) {
      console.error("Failed to fetch unreturned trip details:", error);
    }
  };

  const navigateToUnreturnedReport = (id: number) => {
    router.push(`/trip/unreturned/${id}`);
  };
  useEffect(() => {
    fetchUnreturnedTrips();
  }, []);
  return (
    <DisplaySplitWrapper>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-center mt-4">未報告一覧</h1>
      </div>
      <CardWrapper>
        {unreturnedTrips.map((trip) => (
          <div key={trip.id} className="cursor-pointer border-2 border-transparent rounded-md transition-colors hover:border-zinc-700" onClick={() => navigateToUnreturnedReport(trip.id)}>
            <CardBodyWrapper className="p-4">
              <h2 className="text-xl font-semibold">{trip.details}</h2>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12" />
                  </svg>
                  <span>{trip.departure_time}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21.75 12-8.954 8.955c-.44.439-1.152.439-1.591 0L2.25 12" />
                  </svg>
                  <span>{trip.estimated_return_time}</span>
                </div>
              </div>
            </CardBodyWrapper>
          </div>
        ))}
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
