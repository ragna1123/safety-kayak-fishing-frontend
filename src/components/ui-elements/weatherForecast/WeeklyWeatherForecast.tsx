"use client";
import React from "react";

export default function WeeklyWeatherForecast({ weatherData }: any) {
  const convertToCardinal = (degree: number) => {
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
      <div className="overflow-x-auto hidden-scrollbar">
        <table className="table table-zebra w-full text-sm">
          <thead>
            <tr>
              <th className="py-1 px-10">月/日</th>
              {weatherData.days?.map((data: any, index: number) => (
                <td key={index} className=" transition hover:bg-slate-600 rounded-lg cursor-pointer">
                  {data.datetime}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-1">天気</td>
              {weatherData.days?.map((data: any, index: number) => (
                <td className="text-stone-200" key={index}>
                  {data.conditions}
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-1">気温</td>
              {weatherData.days?.map((data: any, index: number) => (
                <td className="text-orange-500" key={index}>
                  {data.temp}°C
                </td>
              ))}
            </tr>
            <tr>
              <td className="py-1">風速</td>
              {weatherData.days?.map((data: any, index: number) => (
                <td className="text-lime-300" key={index}>
                  {data.windspeed}m/s
                  <br />
                  {convertToCardinal(data.winddir)}
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
