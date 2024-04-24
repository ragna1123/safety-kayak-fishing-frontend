"use client";
import React, { useEffect, useState } from "react";
import WeeklyWeatherForecast from "@/components/ui-elements/weatherForecast/WeeklyWeatherForecast";
import CardWrapper from "@/components/layouts/_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "@/components/layouts/_layoutWrapper/card/CardBodyWrapper";
import { FetchWeeklyWeatherData } from "@/components/serverComponents/FetchWeeklyWeatherData";
import FetchLoading from "@/components/ui-elements/icon/loading/FetchLoading";

export default function FavoriteCard() {
  const [weeklyWeatherData, setWeeklyWeatherData] = useState<any[]>([]);
  const [favoriteLocations, setFavoriteLocations] = useState<any[]>([]);

  async function getWeeklyWeatherData() {
    try {
      const favoriteLocationsResponse = await fetch(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/favorite_locations`, {
        credentials: "include",
      });
      const favoriteLocationsData = await favoriteLocationsResponse.json();
      setFavoriteLocations(favoriteLocationsData.data);
      console.log("favoriteLocationsData", favoriteLocationsData);

      const weeklyWeatherDataPromises = favoriteLocationsData.data.map(async (location: any) => {
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
        {favoriteLocations && Object.keys(favoriteLocations).length > 0 ? (
          weeklyWeatherData.length > 0 ? (
            weeklyWeatherData.map((data, index) => (
              <div key={index}>
                <div className="flex justify-center">
                  <h2 className="text-xl">地点名</h2>
                </div>
                <WeeklyWeatherForecast key={index} weatherData={data} />
              </div>
            ))
          ) : (
            <FetchLoading />
          )
        ) : (
          <div className="flex justify-center">
            <h2 className="text-xl">お気に入り地点がありません</h2>
          </div>
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
