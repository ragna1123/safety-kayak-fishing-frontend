"use client";
import React, { useEffect, useState } from "react";
import WeeklyWeatherForecast from "@/components/ui-elements/weatherForecast/WeeklyWeatherForecast";
import CardWrapper from "@/components/layouts/layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "@/components/layouts/layoutWrapper/card/CardBodyWrapper";
import { FetchWeeklyWeatherData } from "@/components/serverComponents/FetchWeeklyWeatherData";
import FetchLoading from "@/components/ui-elements/icon/loading/FetchLoading";

export default function FavoriteCard() {
  const [weeklyWeatherData, setWeeklyWeatherData] = useState<any[]>([]);

  async function getWeeklyWeatherData() {
    try {
      // const favoriteLocationsResponse = await fetch(
      //   `${process.env.NEXT_PUBLIC_RAILS_API_URL}/favorite_locations`,
      //   {
      //     credentials: "include",
      //   }
      // );
      // const favoriteLocationsData = await favoriteLocationsResponse.json();
      // ダミーデータを使用
      const favoriteLocationsData = [
        {
          id: 10,
          location_name: "タイの場所",
          description: "Fishing at Tokyo Bay",
          location_data: {
            latitude: 34.839684,
            longitude: 138.334068,
          },
        },
        {
          id: 11,
          location_name: "そこらへん",
          description: "Fishing at Tokyo Bay",
          location_data: {
            latitude: 10.681236,
            longitude: 139.767125,
          },
        },
      ];

      const weeklyWeatherDataPromises = favoriteLocationsData.map(async (location) => {
        return await FetchWeeklyWeatherData(location);
      });

      const results = await Promise.all(weeklyWeatherDataPromises);
      setWeeklyWeatherData(results.filter((data) => data !== null));
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWeeklyWeatherData();
  }, []);

  return (
    <CardWrapper>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-center mt-4">お気に入り地点</h1>
      </div>
      <CardBodyWrapper>
        {/* ここでWeeklyWeatherForecastにデータを渡す */}
        {weeklyWeatherData.length > 0 ? (
          weeklyWeatherData.map((data, index) => (
            <>
              <div className="flex justify-center">
                <h2 className="text-xl">地点名</h2>
              </div>
              <WeeklyWeatherForecast key={index} weatherData={data} />
            </>
          ))
        ) : (
          <FetchLoading />
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
