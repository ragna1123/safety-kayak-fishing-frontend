import React from "react";
import DailyWeatherDetail from "@/components/ui-elements/trip/weatherForecast/DailyWeatherDetail";

export default function TripScheduleCard() {
  return (
    <div className="card w-full bg-base-300 shadow-xl items-center mt-1">
      <h1 className="text-2xl font-bold text-center my-4">出船予定一覧</h1>
      <div className="card-body items-center">
        {/* 予定からロケーションデータを取得して天気データを取得 */}
        <DailyWeatherDetail />
      </div>
    </div>
  );
}
