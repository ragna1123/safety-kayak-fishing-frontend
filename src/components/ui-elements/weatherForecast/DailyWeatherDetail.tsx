"use client";
import React, { useState } from "react";

export default function DailyWeatherDetail({ weatherData }: any,{tripData}: any) {
  const convertToCardinal = (degree:number) => {
    if (degree > 337.5) return "北";
    if (degree > 292.5) return "北西";
    if (degree > 247.5) return "西";
    if (degree > 202.5) return "南西";
    if (degree > 157.5) return "南";
    if (degree > 122.5) return "南東";
    if (degree > 67.5) return "東";
    if (degree > 22.5) return "北東";
    return "N";
  };
  return (
    <>
    {/* weatherDataがあるか？ */}
      <div className="flex justify-center">
        <h2 className="card-title mt-2">我入道</h2>
      </div>
      <div className="overflow-x-auto hidden-scrollbar">
        <table className="table table-zebra w-full text-sm">
          <thead>
            <tr>
              <th className="py-2 px-12">時間</th>
              {Array.from({ length: 25 }, (_, i) => (
                <th key={i} className="py-2">
                  {`${i}時`}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* <tr>
              <td className="py-2">天気</td>
                <td >はれ</td>
            </tr> */}
            <tr>
              <td className="py-2">気温</td>
                  {weatherData?.map((hour:any, index:number) => (
                    <td key={index}>{hour.airTemperature.sg.toFixed(1)}°C</td>
                  ))}
            </tr>
            <tr>
              <td className="py-2">風速<br />向き</td>
              {weatherData?.map((hour:any, index:number) => (
                <td key={index}>{hour.windSpeed.sg.toFixed(1)}m/s<br />{convertToCardinal(hour.windDirection.sg)}</td>
              ))}
            </tr>
            <tr>
              <td>降水確率</td>
              {weatherData?.map((hour:any, index:number) => (
                <td key={index}>{hour.precipitation.sg}%</td>
              ))}
            </tr>
            <tr>
              <td>波の高さ<br />方向</td>
              {weatherData?.map((hour:any, index:number) => (
                <td key={index}>{hour.waveHeight.sg}m<br />{convertToCardinal(hour.waveDirection.sg)}</td>
              ))}
            </tr>
            <tr>
              <td>うねりの高さ<br />間隔</td>
              {weatherData?.map((hour:any, index:number) => (
                <td key={index}>{hour.swellHeight.sg}m<br />{hour.swellPeriod.sg.toFixed(1)}s</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

