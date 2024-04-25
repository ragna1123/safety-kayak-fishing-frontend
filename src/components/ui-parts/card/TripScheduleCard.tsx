"use client";
import React, { useEffect, useState } from "react";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import CardBodyWrapper from "@/components/layouts/_layoutWrapper/card/CardBodyWrapper";
import CardWrapper from "@/components/layouts/_layoutWrapper/card/CardWrapper";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import { useRouter } from "next/navigation";
import BasicButton from "@/components/ui-elements/button/BasicButton";

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

      const weatherDataPromises = tripsData.data.map(async (trip: any) => {
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

  // ページ遷移
  const router = useRouter();
  const handleClick = (id: number) => () => {
    router.push(`/trip/${id}`);
  };
  useEffect(() => {
    getWeatherArrayData();
  }, []);

  return (
    <CardWrapper>
      <CardBodyWrapper>
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold text-center mt-4">出船予定</h1>
        </div>
        {tripsArrayData && weatherArrayData && tripsArrayData.length > 0 && weatherArrayData.length > 0 ? (
          weatherArrayData.map((weatherData, index) => (
            <div key={index} onClick={handleClick(tripsArrayData[index].trip.id)} className="cursor-pointer">
              <div className="flex justify-center">
                <h2 className="text-xl">{}</h2>
                <h2 className="text-xl">{tripsArrayData[index].trip.departure_time}</h2>
              </div>
              <DailyWeatherDetail weatherData={weatherData} />
            </div>
          ))
        ) : (
          <FetchLoading />
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
