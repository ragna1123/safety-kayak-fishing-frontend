import React from "react";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import CardBodyWrapper from "@/components/layouts/layoutWrapper/card/CardBody";
import CardWrapper from "@/components/layouts/layoutWrapper/card/CardWrapper";

export default function TripScheduleCard() {
  return (
    <CardWrapper>
      <CardBodyWrapper>
        {/* 予定からロケーションデータを取得して天気データを取得 */}
        <DailyWeatherDetail />
      </CardBodyWrapper>
    </CardWrapper>
  );
}
