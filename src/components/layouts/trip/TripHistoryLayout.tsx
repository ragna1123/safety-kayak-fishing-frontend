"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TripHistoryLayout() {
  const [historyData, setHistoryData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  async function getTripHistory() {
    setIsLoading(true);
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/returned`, { withCredentials: true });
      const historyData = res.data.data;
      if (historyData.length === 0) {
        setHistoryData([]);
        return;
      }
      setHistoryData(historyData);
    } catch (error) {
      console.error("Error fetching trip data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getTripHistory();
  }, []);

  const handleClick = (id: number) => {
    router.push(`/trip/${id}/history`);
  };

  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <CardBodyWrapper>
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-center mt-4">出船履歴</h1>
          </div>
          {historyData.length === 0 && !isLoading && <p className="text-center text-xl">出船履歴はありません。</p>}
          {isLoading ? (
            <FetchLoading />
          ) : (
            historyData.map((data, index) => (
              <div key={index} className="cursor-pointer border-4 border-transparent rounded-md transition-colors hover:border-zinc-700" onClick={() => handleClick(data.id)}>
                <h1 className="text-xl font-bold text-center mt-4">{data.details}</h1>
                <div className="flex justify-center">
                  <h2 className="text-xl">{dayjs(data.departure_time).tz("Asia/tokyo").format("YYYY M/D H:mm")}</h2>
                  <h2 className="text-xl">〜</h2>
                  <h2 className="text-xl">{dayjs(data.estimated_return_time).tz("Asia/tokyo").format("H:mm")}</h2>
                </div>
                {/* ここに天気の履歴を */}
                {/* <DailyWeatherDetail weatherData={data.weatherData} /> */}
              </div>
            ))
          )}
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
