"use client";
import React, { useEffect, useState } from "react";
import WeeklyWeatherForecast from "@/components/ui-elements/weatherForecast/WeeklyWeatherForecast";
import CardWrapper from "@/components/layouts/layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "@/components/layouts/layoutWrapper/card/CardBodyWrapper";
import { FetchWeeklyWeatherData } from "@/components/serverComponents/FetchWeeklyWeatherData";

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

      // ダミーデータ
      const favoriteLocationsData = [
        {
        id: 10,
        location_name: "タイの場所",
        description: "Fishing at Tokyo Bay",
        location_data: {
            latitude: "80.681236",
            longitude: "139.767125"
            }
        },
        {
        id: 11,
        location_name: "そこらへん",
        description: "Fishing at Tokyo Bay",
        location_data: {
            latitude: "10.681236",
            longitude: "139.767125"
            }
        }
    ]

    const weeklyWeatherDataPromises = favoriteLocationsData.map(async (location) => {
      if (location.location_data.latitude && location.location_data.longitude) {
        return await FetchWeeklyWeatherData(location);
      }
      return null;
    });
      const result = await Promise.all(weeklyWeatherDataPromises);
      console.log(result);
      // setWeeklyWeatherData(result.filter((data) => data !== null));
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getWeeklyWeatherData();
  }
  , []);

  return (
    <CardWrapper>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-center mt-4">お気に入り地点</h1>
      </div>
      <CardBodyWrapper>
        <WeeklyWeatherForecast />
      </CardBodyWrapper>
    </CardWrapper>
  );
}
