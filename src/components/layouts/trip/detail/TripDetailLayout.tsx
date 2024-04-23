"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import DisplaySplitWrapper from "../../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../../layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../../layoutWrapper/card/CardBodyWrapper";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";
import FetchLoading from "@/components/ui-elements/icon/loading/FetchLoading";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function TripDetailLayout() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [tripData, setTripData] = useState(null);
  const [flashMessage, setFlashMessage] = useState(false);
  const params = useParams(); // パラメータを取得
  const router = useRouter();

  // 旅行の詳細情報を取得する関数
  async function fetchTripDetail() {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/${params.id}`, { withCredentials: true });
      if (!res.data || !res.data.data) {
        setTripData(null);
        return;
      }
      const resTripData = res.data.data;

      console.log("Trip data:", resTripData);

      // latitude と longitude を安全に数値に変換
      const locationData = {
        lat: Number(resTripData.location_data.latitude),
        lng: Number(resTripData.location_data.longitude),
      };

      // マップに表示するためにセッションストレージに位置情報を保存
      // うまくいかず
      sessionStorage.setItem("location", JSON.stringify(locationData));

      // 取得したデータを状態にセット
      setTripData(resTripData);

      // 取得した位置情報を元に天気情報を取得し、データをセット
      try {
        const fetchData = await FetchDailyWeatherData(resTripData);
        setWeatherData(fetchData);
      } catch (weatherError) {
        console.error("Failed to fetch weather data:", weatherError);
        setWeatherData([]); // 天気情報の取得に失敗した場合、データをnullに設定
      }
    } catch (error) {
      console.error("Failed to fetch trip details:", error);
      setTripData(null); // トリップ情報の取得に失敗した場合、データをnullに設定
    }
  }

  const deleteTrip = async (id: number) => {
    try {
      // トリップの削除処理
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/${id}`, { withCredentials: true });
      if (res.status === 200) {
        console.log("Trip deletion successful");
        router.push("/home");
      } else {
        console.error("Failed to delete the trip:", res.data.message);
        setFlashMessage(true);
      }
    } catch (error) {
      console.error("Failed to delete the trip:", error);
    }
  };

  const editTrip = (id: number) => {
    try {
      router.push(`/trip/${id}/edit`);
    } catch (error) {
      console.error("Failed to update the trip:", error);
      setFlashMessage(true);
    }
  };

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
                {/* <BasicButton label="削除" className="btn-info" buttonClassName="text-slate-700" onClick={}/> */}
                <BasicButton label="編集" className="btn-info" buttonClassName="text-slate-700" onClick={() => editTrip(tripData.trip.id)} />
                <BasicButton label="削除" className="btn-error" buttonClassName="text-slate-700" onClick={() => deleteTrip(tripData.trip.id)} />
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
