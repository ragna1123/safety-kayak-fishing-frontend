import React from "react";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import CardBodyWrapper from "@/components/layouts/layoutWrapper/card/CardBody";
import CardWrapper from "@/components/layouts/layoutWrapper/card/CardWrapper";

export default function TripScheduleCard() {
  return (
    <CardWrapper>
      <h1 className="text-2xl font-bold text-center mt-4">出船予定一覧</h1>
      <CardBodyWrapper>
        {/* 予定からロケーションデータを取得して天気データを取得 */}
        <DailyWeatherDetail />
      </CardBodyWrapper>
    </CardWrapper>
  );
}
