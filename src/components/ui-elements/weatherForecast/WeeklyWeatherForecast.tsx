import WeeklyWeatherForecastTable from "@/components/ui-parts/trip/location/weather/WeeklyWeatherForecastTable";
import React from "react";

export default function WeeklyWeatherForecast() {
  return (
    <>
      <div className="flex justify-center">
        <h2 className="card-title mt-2">石津浜</h2>
      </div>
      <WeeklyWeatherForecastTable />
    </>
  );
}
