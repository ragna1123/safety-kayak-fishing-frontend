import React, { useEffect, useState } from "react";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import axios from "axios";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import { useRouter } from "next/navigation";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TripUnreturnedLayout() {
  const [unreturnedTrips, setUnreturnedTrips] = useState([]);
  const router = useRouter();
  // 未報告のトリップ情報を取得
  const fetchUnreturnedTrips = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/unreturned`, { withCredentials: true });
      console.log("Unreturned trip details:", res.data);
      setUnreturnedTrips(res.data.data);
    } catch (error) {
      console.error("Failed to fetch unreturned trip details:", error);
    }
  };

  // 未報告のトリップ詳細ページに遷移
  const navigateToUnreturnedReport = (id: number) => {
    router.push(`/trip/unreturned/${id}`);
  };

  useEffect(() => {
    fetchUnreturnedTrips();
  }, []);

  return (
    <DisplaySplitWrapper>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold text-center mt-4 mb-4">未報告一覧</h1>
      </div>
      <CardWrapper>
        {unreturnedTrips.map((trip) => (
          <div key={trip.id} className="cursor-pointer border-2 border-transparent rounded-md transition-colors hover:border-zinc-700" onClick={() => navigateToUnreturnedReport(trip.id)}>
            <CardBodyWrapper>
              <div className="p-1 flex justify-center items-center flex-col">
                <div className="flex items-center justify-center space-x-1 mt-4 text-2xl">
                  <div className="flex items-center space-x-2 ">
                    <span>{dayjs(trip.departure_time).tz("Asia/tokyo").format("YYYY/M/D H:mm")}</span>
                  </div>
                  <span>~</span>
                  <div className="flex items-center space-x-2">
                    <span>{dayjs(trip.estimated_return_time).tz("Asia/tokyo").format("H:mm")}</span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold">{trip.details}</h2>
              </div>
            </CardBodyWrapper>
          </div>
        ))}
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
