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
  const [isLoading, setIsLoading] = useState(true);

  async function getWeatherData(locations) {
    try {
      const weatherDataPromises = locations.map(async (location) => {
        const weather = await FetchWeeklyWeatherData(location);
        const locationName = await FetchLocationName(location);
        return weather ? { ...weather, locationName } : null;
      });

      const weatherData = await Promise.all(weatherDataPromises);
      setWeeklyWeatherData(weatherData.filter(Boolean));
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  async function getFavoriteLocations() {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/favorite_locations`, {
        credentials: "include",
      });
      const data = await response.json();
      if (response.ok) {
        setFavoriteLocations(data.data);
        await getWeatherData(data.data);
      } else {
        throw new Error("Failed to fetch favorite locations");
      }
    } catch (error) {
      console.error("Error fetching favorite locations:", error);
    }
  }

  useEffect(() => {
    getFavoriteLocations();
  }, []);

  return (
    <CardWrapper>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold text-center mt-4">お気に入り地点</h1>
      </div>
      <CardBodyWrapper>
        {isLoading ? (
          <FetchLoading />
        ) : favoriteLocations.length > 0 && weeklyWeatherData.length > 0 ? (
          weeklyWeatherData.map((data, index) => (
            <React.Fragment key={index}>
              <h2 className="text-xl text-center">{data.locationName}</h2>
              <WeeklyWeatherForecast weatherData={data} />
            </React.Fragment>
          ))
        ) : (
          <p className="text-xl text-center">天気情報が見つかりませんでした。</p>
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
