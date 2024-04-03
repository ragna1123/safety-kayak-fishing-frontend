import React from "react";
import WeeklyWeatherForecast from "@/components/ui-elements/weatherForecast/WeeklyWeatherForecast";
import CardWrapper from "@/components/layouts/layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "@/components/layouts/layoutWrapper/card/CardBody";

export default function FavoriteCard() {
  return (
    <CardWrapper>
      <h1 className="text-2xl font-bold text-center mt-4">お気に入り地点</h1>
      <CardBodyWrapper>
        {/* ここを描画時にAPIを叩いてお気に入りを取得 */}
        {/* お気に入り地点がない場合は、お気に入り地点がありませんと表示 */}
        {/* ロケーションデータから週間天気のAPIを叩きにいく */}
        {/* イーチループ */}
        <WeeklyWeatherForecast />
      </CardBodyWrapper>
    </CardWrapper>
  );
}
