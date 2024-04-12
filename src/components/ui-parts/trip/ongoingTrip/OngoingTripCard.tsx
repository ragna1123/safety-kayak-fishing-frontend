"use client";
import { useEffect, useState } from "react";
import CardWrapper from "@/components/layouts/layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "@/components/layouts/layoutWrapper/card/CardBodyWrapper";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import FetchLoading from "@/components/ui-elements/icon/loading/FetchLoading";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function OngoingTripCard({ detailToggle }: { detailToggle: boolean }) {
  const [weatherData, setWeatherData] = useState(null);

  async function getWeatherData() {
    try {
      // const activeTripResponse = await fetch(
      //   `${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/active`,
      //   {
      //     credentials: "include",
      //   }
      // );

      // const tripData = activeTripResponse.json();

      // ダミーデータ
      const tripData = {
        trip: {
          departure_time: "2024-04-13T16:30:00.000Z",
        },
        location: {
          latitude: 35.078368,
          longitude: 138.860804,
        }
      };
      
      if (tripData.trip && tripData.trip.departure_time) {
        const weatherResponse = await FetchDailyWeatherData(tripData);
        setWeatherData(weatherResponse);
      }
    } catch (error) {
      console.error("Error", error);
      // 適切なエラーハンドリングをここに追加
    }

  }

  useEffect(() => {
    getWeatherData();
  }
  , []);

  return (
    <CardWrapper>
      <CardBodyWrapper>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-center mt-4">出船中</h1>
      </div>
        {
          weatherData ? (
            <>
              <DailyWeatherDetail weatherData={weatherData} detailToggle={detailToggle}/>
              <BasicButton label="帰還報告へ" className="btn-success" />
            </>
          ) : (
            <FetchLoading />
          )
        }
      </CardBodyWrapper>
    </CardWrapper>
  );
}
