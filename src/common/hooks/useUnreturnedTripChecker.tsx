"use client";
import axios from "axios";
import { useState, useEffect } from "react";

export default function useUnreturnedTripChecker() {
  const [unreturnedTrips, setUnreturnedTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUnreturnedTrips = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/unreturned`, { withCredentials: true });
        const tripIds = res.data.data.map((trip) => trip.id);
        setUnreturnedTrips(tripIds);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };

    fetchUnreturnedTrips();
  }, []); // Empty dependency array means this runs once on mount

  return { unreturnedTrips, isLoading, error };
}
