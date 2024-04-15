"use client";
import React, { useEffect, useState } from "react";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import CardBodyWrapper from "@/components/layouts/layoutWrapper/card/CardBodyWrapper";
import CardWrapper from "@/components/layouts/layoutWrapper/card/CardWrapper";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import FetchLoading from "@/components/ui-elements/icon/loading/FetchLoading";

export default function TripScheduleCard() {
  const [weatherArrayData, setWeatherArrayData] = useState<any[]>([]);
  const [tripsArrayData, setTripsArrayData] = useState(null);

  async function getWeatherArrayData() {
    try {
      const activeTripResponse = await fetch(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips`, {
        credentials: "include",
      });

      const tripsData = await activeTripResponse.json();
      console.log("tripsData", tripsData);

      if (tripsData && Object.keys(tripsData).length > 0) {
        setTripsArrayData(tripsData.data);
      }

      const weatherDataPromises = tripsData.data.map(async (trip) => {
        if (trip.trip && trip.trip.departure_time) {
          return await FetchDailyWeatherData(trip);
        }
        return null;
      });

      const results = await Promise.all(weatherDataPromises);

      setWeatherArrayData(results.filter((data) => data !== null)); // nullでない結果だけを設定
      // console.log("results", weatherArrayData);
    } catch (error) {
      console.error("Error", error);
      // 適切なエラーハンドリングをここに追加
    }
  }

  useEffect(() => {
    getWeatherArrayData();
  }, []);

  return (
    <CardWrapper>
      <CardBodyWrapper>
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold text-center mt-4">出船予定</h1>
        </div>
        {tripsArrayData && Object.keys(tripsArrayData).length > 0 ? (
          weatherArrayData.length > 0 ? (
            weatherArrayData.map((data, index) => (
              <div key={index}>
                <div className="flex justify-center">
                  {/* departure_timeから日付を取り出す */}
                  {/* <h2 className="text-xl">{new Date(data.trip.departure_time).toLocaleDateString()}</h2> */}
                  <h2 className="text-xl">地点名</h2>
                </div>
                <DailyWeatherDetail key={index} weatherData={data} />
              </div>
            ))
          ) : (
            <FetchLoading />
          )
        ) : (
          <div className="flex justify-center">
            <h2 className="text-xl">出船予定の情報がありません</h2>
          </div>
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
