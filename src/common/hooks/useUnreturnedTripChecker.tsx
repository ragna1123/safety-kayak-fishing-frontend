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
      setError(null); // 新しいリクエストをする前にエラーをリセット
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/unreturned`, { withCredentials: true });
        if (!response.data.data) {
          setUnreturnedTrips([]);
        } else {
          const tripIds = response.data.data.map((trip) => trip.id);
          setUnreturnedTrips(tripIds);
        }
      } catch (err) {
        setError(`未帰投の予定の取得に失敗しました: ${err.message || err.toString()}`);
      } finally {
        setIsLoading(false); // ローディング完了
      }
    };

    fetchUnreturnedTrips();
  }, []);

  return { unreturnedTrips, isLoading, error };
}
