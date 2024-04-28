"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import TripReportCard from "@/components/ui-parts/card/TripReportCard";

export default function TripReturnReportLayout() {
  const { id } = useParams();
  const [tripData, setTripData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchTripData = async () => {
      setIsLoaded(true);
      try {
        //
        const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/${id}`, { withCredentials: true });
        if (!res.data || !res.data.data) {
          setTripData(null);
        } else {
          setTripData(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch trip details:", error);
        setTripData(null);
      } finally {
        setIsLoaded(false);
      }
    };

    fetchTripData();
  }, [id]); // Dependency on `id` to refetch if it changes

  return (
    <DisplaySplitWrapper leftPosition={true}>
      <CardWrapper>
        <CardBodyWrapper>{isLoaded ? <p>Loading...</p> : tripData ? <TripReportCard tripData={tripData} /> : <p>No trip data found.</p>}</CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
