"use server"
import React from "react";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import ToggleFavoriteIcon from "@/components/ui-parts/button/ToggleFavoriteIcon";
import DailyWeatherForecastTable from "@/components/ui-parts/trip/location/weather/DailyWeatherForecastTable";
import DisplaySplitWrapper from "../../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../../layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../../layoutWrapper/card/CardBodyWrapper";

export default async function GoingTripLayout() {
  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <div className="text-center p-4">
          <h1 className="text-3xl font-bold mb-2">出船中</h1>
          <p className="text-lg mb-2">出船時間: 6:00 - 13:00</p>
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-2xl font-bold">地点名</h2>
            <ToggleFavoriteIcon />
          </div>
        </div>

        <h1 className="text-xl font-bold text-center mt-4">地点名詳細</h1>

        <CardBodyWrapper>
          <DailyWeatherForecastTable />
          <BasicButton label="帰投報告" className="btn-success mt-8" />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
