import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import React from "react";
import DisplaySplitWrapper from "../../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../../layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../../layoutWrapper/card/CardBody";

export default function TripHistoryLayout() {
  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <h1 className="text-3xl font-bold text-center mt-4">出船履歴一覧</h1>
        <CardBodyWrapper>
          {/* 予定からロケーションデータを取得して天気データを取得 */}
          <DailyWeatherDetail />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
