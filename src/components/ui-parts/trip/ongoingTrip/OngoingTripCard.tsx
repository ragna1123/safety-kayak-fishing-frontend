import CardBodyWrapper from "@/components/layouts/layoutWrapper/card/CardBody";
import CardWrapper from "@/components/layouts/layoutWrapper/card/CardWrapper";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import React from "react";

export default function OngoingTripCard() {
  return (
    <CardWrapper>
      <h1 className="text-2xl font-bold text-center mt-4">出船中</h1>

      {/* ここでデータ取得とeach文 */}
      <CardBodyWrapper>
        {/* 出船中のデータをバックエンドから取得 */}
        {/* ロケーションデータからstormGlassIOを叩きにいく */}
        <DailyWeatherDetail />
      </CardBodyWrapper>
    </CardWrapper>
  );
}
