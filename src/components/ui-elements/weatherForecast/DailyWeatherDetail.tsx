import React from "react";
import DailyWeatherForecastTable from "@/components/ui-parts/trip/location/weather/DailyWeatherForecastTable";

export default function DailyWeatherDetail() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="card-title mt-2">沼津 我入道</h2>
      </div>
      <DailyWeatherForecastTable />
    </>
  );
}
