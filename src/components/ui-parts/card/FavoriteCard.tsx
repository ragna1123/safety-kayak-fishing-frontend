"use client";
import React, { useEffect, useState } from "react";
import WeeklyWeatherForecast from "@/components/ui-elements/weatherForecast/WeeklyWeatherForecast";
import CardWrapper from "@/components/layouts/_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "@/components/layouts/_layoutWrapper/card/CardBodyWrapper";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import { FetchWeeklyWeatherData } from "@/components/serverComponents/FetchWeeklyWeatherData";
import FetchLocationName from "@/components/serverComponents/FetchLocationName";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function FavoriteCard() {
  const router = useRouter();
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
      const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/favorite_locations`, {
        withCredentials: true,
      });
      if (res.status === 200) {
        setFavoriteLocations(res.data.data);
        await getWeatherData(res.data.data);
      } else {
        throw new Error("Failed to fetch favorite locations");
      }
    } catch (error) {
      console.error("Error fetching favorite locations:", error);
    }
  }
  const navigateToFavoriteList = () => {
    router.push("/favorites");
  };

  useEffect(() => {
    getFavoriteLocations();
  }, []);

  return (
    <CardWrapper>
      <div className="flex justify-center">
        <h1
          className="text-3xl font-bold text-center mt-4 cursor-pointer hover:text-zinc-500 transition duration-100 ease-in-out"
          onClick={() => {
            navigateToFavoriteList();
          }}
        >
          お気に入り地点
        </h1>
      </div>
      <CardBodyWrapper>
        {isLoading ? (
          <FetchLoading />
        ) : favoriteLocations.length > 0 && weeklyWeatherData.length > 0 ? (
          weeklyWeatherData.map((data, index) => (
            <div key={index} className="cursor-pointer border-4 border-transparent rounded-md transition-colors hover:border-zinc-700">
              <h2 className="text-xl text-center my-1">{data.locationName}</h2>
              <WeeklyWeatherForecast weatherData={data} />
            </div>
          ))
        ) : (
          <p className="text-xl text-center">天気情報が見つかりませんでした。</p>
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
