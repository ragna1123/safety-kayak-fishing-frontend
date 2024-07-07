"use client";
import { useState, useEffect } from "react";
import axios from "axios";

type Trip = {
  id: number;
  // 他に必要なフィールドがあればここに追加
};

type UseUnreturnedTripCheckerReturn = {
  unreturnedTrips: number[];
  isLoading: boolean;
  error: string | null;
};

export default function useUnreturnedTripChecker(): UseUnreturnedTripCheckerReturn {
  const [unreturnedTrips, setUnreturnedTrips] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUnreturnedTrips = async () => {
      setIsLoading(true);
      setError(null); // 新しいリクエストをする前にエラーをリセット
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/unreturned`, { withCredentials: true });
        if (!response.data.data) {
          setUnreturnedTrips([]);
        } else {
          const tripIds = response.data.data.map((trip: Trip) => trip.id);
          setUnreturnedTrips(tripIds);
        }
      } catch (err: any) {
        setError(`未帰投の予定の取得に失敗しました: ${err.message}`);
      } finally {
        setIsLoading(false); // ローディング完了
      }
    };

    fetchUnreturnedTrips();
  }, []);

  return { unreturnedTrips, isLoading, error };
}
