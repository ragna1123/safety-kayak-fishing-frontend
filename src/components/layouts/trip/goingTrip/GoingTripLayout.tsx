import ToggleFavoriteIcon from "@/components/ui-parts/trip/favorite/ToggleFavoriteIcon";
import DailyWeatherForecastTable from "@/components/ui-parts/trip/location/weather/DailyWeatherForecastTable";
import React from "react";

export default function GoingTripLayout() {
  return (
    <div className="md:w-1/2 w-full flex justify-center">
      <div className="card w-full bg-base-300 shadow-xl mb-4">
        <div className="text-center p-4">
          <h1 className="text-3xl font-bold mb-2">出船中</h1>
          <p className="text-lg mb-2">出船時間: 6:00 - 13:00</p>
          <div className="flex justify-center items-center gap-4">
            <h2 className="text-2xl font-bold">地点名</h2>
            <ToggleFavoriteIcon />
          </div>
        </div>
        
        <h1 className="text-xl font-bold text-center mt-4">地点名詳細</h1>
        
        <div className="card-body">
          <DailyWeatherForecastTable />
          <div className="flex justify-center mt-8">
            <button className="btn btn-primary text-lg mt-10">帰投報告</button>
          </div>
        </div>
      </div>
    </div>
  );
}

