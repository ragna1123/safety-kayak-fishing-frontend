"use client";
import React, { useEffect, useState } from "react";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import WeeklyWeatherForecast from "@/components/ui-elements/weatherForecast/WeeklyWeatherForecast";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import ErrorFlashMessage from "../flashMessage/ErrorFlashMessage";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import { FetchWeeklyWeatherData } from "@/components/serverComponents/FetchWeeklyWeatherData";
import { useRecoilValue } from "recoil";
import { locationState } from "@/common/states/locationState";
import { useRouter } from "next/navigation";
import CardBodyWrapper from "@/components/layouts/_layoutWrapper/card/CardBodyWrapper";
import TripRegisterLayout from "@/components/layouts/trip/TripRegisterLayout";
import ModalWrapper from "@/components/ui-elements/modal/ModalWrapper";

export default function LocationCard() {
  const router = useRouter();
  const [weatherDate, setWeatherDate] = useState(new Date()); // デフォルトは現在時刻を設定
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
    // 出航日時を取得 (デフォルトは現在時刻を参照)
    const tripDate = locationRecoilData?.datetime ? new Date(locationRecoilData.datetime) : new Date();
    setWeatherDate(tripDate);
    const tripData = {
      trip: {
        departure_time: tripDate,
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
          <CardBodyWrapper>
            <WeeklyWeatherForecast weatherData={weeklyWeatherData} />
            <hr className="my-4" />
            <div className="flex justify-center">
              <h1 className="text-2xl font-bold">{weatherDate.toLocaleDateString()}</h1>
            </div>
            <DailyWeatherDetail weatherData={weatherData} detailToggle={true} />
            {/* ↓ここからモーダル */}
            <ModalWrapper element_id="tripRegisterModal" title="出船届を作成する">
              <TripRegisterLayout />
            </ModalWrapper>
          </CardBodyWrapper>
        </>
      )}
    </>
  );
}
