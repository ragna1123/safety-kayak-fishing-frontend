"use client";
import React, { useState } from "react";

export default function DailyWeatherDetail({ weatherData, tripData, detailToggle }:any) {

  const convertToCardinal = (degree:number) => {
    if (degree > 337.5) return "北";
    if (degree > 292.5) return "北西";
    if (degree > 247.5) return "西";
    if (degree > 202.5) return "南西";
    if (degree > 157.5) return "南";
    if (degree > 122.5) return "南東";
    if (degree > 67.5) return "東";
    if (degree > 22.5) return "北東";
    return "北";
  };
  return (
    <>
    {/* weatherDataがあるか？ */}
      <div className="flex justify-center">
        <h1 className="card-title  text-xl font-bold text-center mt-4">沼津</h1>
        <h1 className="card-title  text-xl font-bold text-center mt-4">4/20 10:00 - 13:00</h1>
      </div>

      <div className="overflow-x-auto hidden-scrollbar">
        <table className="table table-zebra w-full text-s">
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
                  <td className="text-orange-500" key={index} >{hour.airTemperature.sg.toFixed(1)}°C</td>
                ))}
            </tr>

            {detailToggle && (
              <>
                <tr>
                <td>湿度</td>
                  {weatherData?.map((hour:any, index:number) => (
                    <td className="text-orange-500" key={index}>{hour.humidity.sg.toFixed(0)}%</td>
                  ))}
              </tr>
              <tr>
                <td>降水確率</td>
                {weatherData?.map((hour:any, index:number) => (
                  <td className="text-orange-200" key={index}>{hour.precipitation.sg.toFixed(1)}%</td>
                ))}
              </tr>
              </>
              )}

            <tr>
              <td className="py-2">風速</td>
              {weatherData?.map((hour:any, index:number) => (
                <td className="text-lime-300" key={index}>{hour.windSpeed.sg.toFixed(1)}m/s<br />{convertToCardinal(hour.windDirection.sg)}</td>
              ))}
            </tr>
            {/* ホームと詳細ページで切り替え */}
              {detailToggle && (
                <>
            <tr>
              <td className="py-2">瞬間風速</td>
              {weatherData?.map((hour:any, index:number) => (
                <td  className="text-lime-300" key={index}>{hour.gust.sg.toFixed(1)}m/s</td>
              ))}
            </tr>
              </>
            )}
            <tr>
              <td>波の高さ</td>
              {weatherData?.map((hour:any, index:number) => (
                <td className="text-cyan-400" key={index}>
                  {hour.waveHeight.sg === 0 ? " - " : `${hour.waveHeight.sg}m`}
                  <br />
                  {hour.waveHeight.sg === 0 ? "" : convertToCardinal(hour.waveDirection.sg)}
                </td>
              ))}
            </tr>
              {detailToggle && (
              <>
            <tr>
              <td>うねり</td>
              {weatherData?.map((hour:any, index:number) => (
                <td className="text-cyan-400" key={index}>{hour.swellHeight.sg}m<br />{hour.swellPeriod.sg.toFixed(1)}s</td>
              ))}
            </tr >
              <tr>
              <td>水温</td>
              {weatherData?.map((hour:any, index:number) => (
                <td className="text-indigo-500" key={index}>{hour.waterTemperature.sg.toFixed(1)}°C</td>
              ))}
            </tr>
            <tr>
              <td>気圧</td>
              {weatherData?.map((hour:any, index:number) => (
                <td className="text-teal-300" key={index}>{hour.pressure.sg.toFixed(1)}Pa</td>
              ))}
            </tr>
            <tr>
              <td>視程</td>
              {weatherData?.map((hour:any, index:number) => (
                <td className="text-teal-300" key={index}>{hour.visibility.sg.toFixed(1)}km</td>
              ))}
            </tr>
              </>
              )}
          </tbody>
        </table>
      </div>
    </>
  );
}

