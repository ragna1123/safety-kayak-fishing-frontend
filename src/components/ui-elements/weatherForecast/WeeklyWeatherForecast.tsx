"use client";

import { locationState } from "@/common/states/locationState";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilState } from "recoil";
import dayjs from "dayjs";

export default function WeeklyWeatherForecast({ weatherData }: any) {
  const Router = useRouter();
  const [recoilLocation, setRecoilLocation] = useRecoilState(locationState);

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

  // 位置情報詳細画面に遷移
  // 日時をクリックした際に、その日の天気詳細を表示する
  const navigateToDetail = (location_data: {}) => {
    setRecoilLocation({ latitude: location_data.latitude, longitude: location_data.longitude, datetime: location_data.datetime });
    Router.push("/location");
  };
  return (
    <>
      <div className="overflow-x-auto hidden-scrollbar">
        <table className="table table-zebra w-full text-sm">
          <thead>
            <tr>
              <th className="py-1 px-10">月/日</th>
              {weatherData.days?.map((data: any, index: number) => (
                <td
                  key={index}
                  className=" transition hover:bg-slate-600 rounded-lg cursor-pointer"
                  onClick={() => {
                    navigateToDetail({ latitude: weatherData.latitude, longitude: weatherData.longitude, datetime: data.datetime });
                  }}
                >
                  {dayjs(data.datetime).format("MM/DD")}
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
