"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import ModalWrapper from "@/components/ui-elements/modal/ModalWrapper";
import TripEditLayout from "./TripEditLayout";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TripDetailLayout() {
  const [weatherData, setWeatherData] = useState<any[]>([]);
  const [tripData, setTripData] = useState(null);
  const [flashMessage, setFlashMessage] = useState(false);
  const params = useParams(); // パラメータを取得
  const router = useRouter();

  // 詳細情報を取得する関数
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

      // map に表示する位置情報をセット
      // setRecoilLocation({ latitude: locationData.lat, longitude: locationData.lng, locationName: resTripData.location_name });

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
      window.confirm("本当に削除しますか？");
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
        {flashMessage && <WarningFlashMessage message="情報の取得に失敗しました" />}
        <CardBodyWrapper>
          <div className="flex justify-center">
            <h1 className="text-3xl font-bold text-center mt-4">出船予定</h1>
          </div>
          {tripData && Object.keys(tripData).length > 0 ? (
            weatherData.length > 0 ? (
              <>
                <div className="flex justify-center">
                  <h2 className="text-xl">{tripData?.trip.details}</h2>
                </div>
                <div className="flex justify-center">
                  <h3 className="text-2xl px-1">{dayjs(tripData?.trip.departure_time).tz("Asia/tokyo").format("YYYY M/D H:mm")}</h3>
                  <span className="text-2xl">〜</span>
                  <h3 className="text-2xl px-1">{dayjs(tripData?.trip.estimated_return_time).tz("Asia/tokyo").format("H:mm")}</h3>
                </div>
                <div className="flex justify-center text-orange-600">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
                  </svg>
                  <h3 className="text-xl px-1">{dayjs(tripData?.trip.sunrise_time).tz("Asia/tokyo").format("H:mm")}</h3>
                  <span className="text-xl">〜</span>
                  <h3 className="text-xl px-1">{dayjs(tripData?.trip.sunset_time).tz("Asia/tokyo").format("H:mm")}</h3>
                </div>
                <DailyWeatherDetail weatherData={weatherData} detailToggle={true} />
                <ModalWrapper element_id="trip-edit-modal" title="編集" onClick={() => editTrip(tripData.trip.id)}>
                  <TripEditLayout />
                </ModalWrapper>
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
