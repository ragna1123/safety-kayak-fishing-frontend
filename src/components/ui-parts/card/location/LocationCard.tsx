"use client";
import { useEffect, useState } from "react";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import FetchLoading from "@/components/ui-elements/icon/loading/FetchLoading";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import WeeklyWeatherForecast from "@/components/ui-elements/weatherForecast/WeeklyWeatherForecast";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import { FetchWeeklyWeatherData } from "@/components/serverComponents/FetchWeeklyWeatherData";

export default function LocationCard({ locationData }: any) {
  const [weatherData, setWeatherData] = useState(null);
  const [weeklyWeatherData, setWeeklyWeatherData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getWeatherData() {
    if (!locationData.lng || !locationData.lat) {
      setError("位置情報が無効です。");
      return;
    }

    setLoading(true);
    setError("");

    // 出船予定データに形を整える
    const tripData = {
      trip: {
        departure_time: new Date().getTime(),
      },
      location_data: {
        latitude: locationData.lat,
        longitude: locationData.lng,
      },
    };

    try {
      const weeklyWeatherResponse = await FetchWeeklyWeatherData(tripData);
      setWeeklyWeatherData(weeklyWeatherResponse);
      const weatherResponse = await FetchDailyWeatherData(tripData);
      setWeatherData(weatherResponse);
    } catch (error) {
      console.error("Error fetching weather data", error);
      setError("天気データの取得中にエラーが発生しました。");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, [locationData]);

  return (
    <>
      {error && <div>エラー: {error}</div>}
      {loading ? (
        <FetchLoading />
      ) : weatherData ? (
        <>
          <WeeklyWeatherForecast weatherData={weeklyWeatherData} />
          <hr className="my-4 solid:1px transparent" />
          <DailyWeatherDetail weatherData={weatherData} detailToggle={true} />
          <BasicButton label="出船予定作成" className="btn-success mb-2" />
        </>
      ) : null}
    </>
  );
}
