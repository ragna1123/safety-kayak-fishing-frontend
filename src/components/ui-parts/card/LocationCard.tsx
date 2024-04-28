"use client";
import React, { useEffect, useState } from "react";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import WeeklyWeatherForecast from "@/components/ui-elements/weatherForecast/WeeklyWeatherForecast";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import ErrorFlashMessage from "../flashMessage/ErrorFlashMessage";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import { FetchWeeklyWeatherData } from "@/components/serverComponents/FetchWeeklyWeatherData";
import { useRecoilValue } from "recoil";
import { locationState } from "@/common/states/locationState";
import { useRouter } from "next/navigation";

export default function LocationCard() {
  const router = useRouter();
  const [weatherData, setWeatherData] = useState(null);
  const [weeklyWeatherData, setWeeklyWeatherData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const locationRecoilData = useRecoilValue(locationState);

  useEffect(() => {
    if (!locationRecoilData || !locationRecoilData.latitude || !locationRecoilData.longitude) {
      setError("位置情報が無効です。");
      return;
    }

    setLoading(true);
    setError("");

    getWeatherData();
  }, [locationRecoilData]);

  async function getWeatherData() {
    // 日付処理がまだなので、仮で現在時刻を出船時刻として設定
    const tripData = {
      trip: {
        departure_time: new Date().getTime(),
      },
      location_data: {
        latitude: locationRecoilData?.latitude,
        longitude: locationRecoilData?.longitude,
      },
    };

    try {
      const weatherResponse = await FetchDailyWeatherData(tripData);
      setWeatherData(weatherResponse);
      const weeklyWeatherResponse = await FetchWeeklyWeatherData(tripData);
      setWeeklyWeatherData(weeklyWeatherResponse);
    } catch (error) {
      console.error("Error fetching weather data", error);
      setError("天気データの取得中にエラーが発生しました。");
    } finally {
      setLoading(false);
    }
  }

  const registerNavigate = () => {
    router.push("/trip/register");
  };

  return (
    <>
      {error && <ErrorFlashMessage message={error} />}
      {loading ? (
        <FetchLoading />
      ) : (
        <>
          <WeeklyWeatherForecast weatherData={weeklyWeatherData} />
          <hr className="my-4" />
          <DailyWeatherDetail weatherData={weatherData} detailToggle={true} />
          <BasicButton label="出船予定作成" className="btn-success mb-2" onClick={() => registerNavigate()} />
        </>
      )}
    </>
  );
}
