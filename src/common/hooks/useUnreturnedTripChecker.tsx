"use client";
import { useState, useEffect } from "react";
import axios from "axios";

type Trip = {
  id: number;
  // 他に必要なフィールドがあればここに追加
};

export const useUnreturnedTripChecker = () => {
  const [unreturnedTrips, setUnreturnedTrips] = useState<number[]>([]);

  useEffect(() => {
    const fetchUnreturnedTrips = async () => {
      try {
        const response = await axios.get("/api/unreturned-trips");
        if (response.data.data.length === 0) {
          setUnreturnedTrips([]);
        } else {
          const tripIds = response.data.data.map((trip: Trip) => trip.id);
          setUnreturnedTrips(tripIds);
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUnreturnedTrips();
  }, []);

  return unreturnedTrips;
};
