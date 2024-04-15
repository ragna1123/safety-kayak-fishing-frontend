"use client";
import React, { useEffect, useState } from "react";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import CardBodyWrapper from "@/components/layouts/layoutWrapper/card/CardBodyWrapper";
import CardWrapper from "@/components/layouts/layoutWrapper/card/CardWrapper";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import FetchLoading from "@/components/ui-elements/icon/loading/FetchLoading";

export default function TripScheduleCard() {
  const [weatherArrayData, setWeatherArrayData] = useState<any[]>([]);

  async function getWeatherArrayData() {
    try {
      // const activeTripResponse = await fetch(
      //   `${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips`,
      //   {
      //     credentials: "include",
      //   }
      // );

      // const tripData = activeTripResponse.json();

      // ダミーデータ
      const tripsData = [
        {
          trip: {
            id: 53,
            user_id: 105,
            location_id: 1,
            departure_time: "2024-04-13T16:30:00.000Z",
            estimated_return_time: "2024-04-13T17:30:00.000Z",
            details: "Fishing at Tokyo Bay",
            safety_score: null,
            sunrise_time: "2024-04-11T00:00:01.000Z",
            sunset_time: "2024-04-11T00:00:01.000Z",
            return_time: null,
            return_details: null,
            created_at: "2024-04-11T14:10:42.646Z",
            updated_at: "2024-04-11T14:10:42.646Z",
          },
          location_data: {
            id: 1,
            latitude: "80.681236",
            longitude: "139.767125",
            created_at: "2024-04-09T02:26:27.607Z",
            updated_at: "2024-04-09T02:26:27.607Z",
          },
        },
        {
          trip: {
            id: 52,
            user_id: 105,
            location_id: 1,
            departure_time: "2024-04-14T16:30:00.000Z",
            estimated_return_time: "2024-04-14T17:30:00.000Z",
            details: "Fishing at Tokyo Bay",
            safety_score: null,
            sunrise_time: "2024-04-11T00:00:01.000Z",
            sunset_time: "2024-04-11T00:00:01.000Z",
            return_time: null,
            return_details: null,
            created_at: "2024-04-11T13:44:08.848Z",
            updated_at: "2024-04-11T13:44:08.848Z",
          },
          location_data: {
            id: 1,
            latitude: 34.839684,
            longitude: 138.334068,
            created_at: "2024-04-09T02:26:27.607Z",
            updated_at: "2024-04-09T02:26:27.607Z",
          },
        },
      ];

      const weatherDataPromises = tripsData.map(async (trip) => {
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
          <h1 className="card-title  text-2xl font-bold text-center mt-4">出船予定</h1>
        </div>
        {weatherArrayData.length > 0 ? (
          weatherArrayData.map((data, index) => (
            <>
              <div className="flex justify-center">
                <h2 className="text-xl">4/19</h2>
                <h2 className="text-xl">地点名</h2>
              </div>
              <DailyWeatherDetail key={index} weatherData={data} />
            </>
          ))
        ) : (
          <FetchLoading />
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
