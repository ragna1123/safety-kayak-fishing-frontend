import React from "react";
import WeeklyWeatherForecast from "@/components/ui-elements/trip/weatherForecast/WeeklyWeatherForecast";

export default function FavoriteCard() {
  return (
    <div className="card w-full bg-base-300 shadow-xl items-center">
      <h1 className="text-2xl font-bold text-center my-2">お気に入り地点</h1>
      <div className="card-body items-center">
        {/* ここを描画時にAPIを叩いてお気に入りを取得 */}
        {/* お気に入り地点がない場合は、お気に入り地点がありませんと表示 */}
        {/* ロケーションデータから週間天気のAPIを叩きにいく */}
        <WeeklyWeatherForecast />
      </div>
    </div>
  );
}
