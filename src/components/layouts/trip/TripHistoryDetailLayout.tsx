import ToggleFavoriteIcon from "@/components/ui-parts/button/ToggleFavoriteIcon";
// import DailyWeatherForecastTable from "@/components/ui-parts/table/DailyWeatherForecastTable";
import React from "react";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";

export default function TripHistoryDetailLayout() {
  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <div className="text-center p-4">
          <h1 className="text-3xl font-bold mt-2">出船履歴</h1>
          <div className="flex justify-center items-center gap-4 mt-6">
            <h2 className="text-2xl font-bold">地点名</h2>
            <ToggleFavoriteIcon />
          </div>
          <h1 className="text-xl font-bold text-center mt-2 mb-4">地点名詳細</h1>
          <p className="text-lg m-2">出船日時: 2024 4/16 6:00 - 13:00</p>
        </div>

        {/* <CardBodyWrapper>
          <DailyWeatherForecastTable />
        </CardBodyWrapper> */}
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
