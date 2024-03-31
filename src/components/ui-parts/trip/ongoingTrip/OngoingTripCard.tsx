import DailyWeatherDetail from "@/components/ui-elements/trip/weatherForecast/DailyWeatherDetail";
import React from "react";

export default function OngoingTripCard() {
  return (
    <div className="card w-full bg-base-300 shadow-xl items-center mb-1">
      <h1 className="text-2xl font-bold text-center mt-4">出船中</h1>
      <div className="card-body items-center">
        {/* 出船中のデータをバックエンドから取得 */}
        {/* ロケーションデータからstormGlassIOを叩きにいく */}
        <DailyWeatherDetail />
      </div>
    </div>
  );
}
