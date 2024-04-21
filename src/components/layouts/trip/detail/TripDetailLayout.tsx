"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DisplaySplitWrapper from "../../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../../layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../../layoutWrapper/card/CardBodyWrapper";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import axios from "axios";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";
import FetchLoading from "@/components/ui-elements/icon/loading/FetchLoading";
import { set } from "react-hook-form";

export default function TripDetailLayout() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [tripData, setTripData] = useState(null);
  const [flashMessage, setFlashMessage] = useState(false);
  const params = useParams(); // パラメータを取得

  // 旅行の詳細情報を取得する関数
  async function fetchTripDetail() {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/${params.id}`, { withCredentials: true });
      if (!res.data.data) {
        setTripData(null);
        return;
      }
      setTripData(res.data.data);
      const fetchData = await FetchDailyWeatherData(res.data.data);
      //   console.log("fetchData", fetchData);
      setWeatherData(fetchData);
    } catch (error) {
      console.error("トリップの詳細情報の取得に失敗しました:", error);
      setFlashMessage(true);
      // エラー処理、例えばエラーページへのリダイレクトなど
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchTripDetail();
    }
  }, [params.id]); // idが変わるたびにデータを再取得

  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <CardBodyWrapper>
          {flashMessage && <WarningFlashMessage message="情報の取得に失敗しました" />}
          <div className="flex justify-center">
            <h1 className="text-2xl font-bold text-center mt-4">出船予定</h1>
          </div>
          {tripData && Object.keys(tripData).length > 0 ? (
            weatherData.length > 0 ? (
              <>
                <div className="flex justify-center">
                  <h2 className="text-xl">地点名</h2>
                </div>
                <div className="flex justify-center">
                  <h4 className="text-md px-1">{tripData.trip.departure_time}</h4>
                  <h4 className="text-md px-1">{tripData.trip.estimated_return_time}</h4>
                </div>
                <DailyWeatherDetail weatherData={weatherData} detailToggle={true} />
              </>
            ) : (
              <FetchLoading /> // ここでローディングを表示
            )
          ) : (
            <div className="flex justify-center">
              <h2 className="text-xl">出船予定の情報がありません</h2>
            </div>
          )}
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
