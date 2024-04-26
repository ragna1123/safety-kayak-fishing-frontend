"use client";
import React, { useEffect, useState } from "react";
import WeeklyWeatherForecast from "@/components/ui-elements/weatherForecast/WeeklyWeatherForecast";
import CardWrapper from "@/components/layouts/_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "@/components/layouts/_layoutWrapper/card/CardBodyWrapper";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import { FetchWeeklyWeatherData } from "@/components/serverComponents/FetchWeeklyWeatherData";
import FetchLocationName from "@/components/serverComponents/FetchLocationName";

export default function FavoriteCard() {
  const [weeklyWeatherData, setWeeklyWeatherData] = useState([]);
  const [favoriteLocations, setFavoriteLocations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function getFavoriteLocations() {
    setIsLoading(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/favorite_locations`, {
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setFavoriteLocations(data.data);
        getWeatherData(data.data);
      } else {
        throw new Error("Failed to fetch favorite locations");
      }
    } catch (error) {
      console.error("Error fetching favorite locations:", error);
      setFavoriteLocations([]);
    } finally {
      setIsLoading(false);
    }
  }

  async function getWeatherData(locations: { latitude: number; longitude: number }[]) {
    try {
      const weatherDataPromises = locations.map(async (location) => {
        const weather = await FetchWeeklyWeatherData(location);
        const locationName = await FetchLocationName(location);
        return weather ? { ...weather, locationName } : null;
      });

      const weatherData = await Promise.all(weatherDataPromises);
      setWeeklyWeatherData(weatherData.filter(Boolean) as any);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    getFavoriteLocations();
  }, []);

  if (isLoading) {
    return <FetchLoading />;
  }

  return (
    <CardWrapper>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-center mt-4">お気に入り地点</h1>
      </div>
      <CardBodyWrapper>
        {favoriteLocations.length > 0 ? (
          weeklyWeatherData.length > 0 ? (
            weeklyWeatherData.map((data, index) => (
              <>
                <h2 className="text-xl text-center">{data.locationName}</h2>
                <WeeklyWeatherForecast key={index} weatherData={data} />
              </>
            ))
          ) : (
            <p className="text-xl text-center">天気情報が見つかりませんでした。</p>
          )
        ) : (
          <h2 className="text-xl text-center">お気に入り地点がありません</h2>
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
