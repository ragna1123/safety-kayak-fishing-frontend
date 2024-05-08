"use client";

import { locationState } from "@/common/states/locationState";
import { useRouter } from "next/navigation";
import React from "react";
import { useRecoilState } from "recoil";
import dayjs from "dayjs";

export default function WeeklyWeatherForecast({ weatherData }: any) {
  const router = useRouter();
  const [recoilLocation, setRecoilLocation] = useRecoilState(locationState);

  const directions = [
    { limit: 337.5, path: "M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" },
    { limit: 292.5, path: "M5.25 6.31v9.44a.75.75 0 0 1-1.5 0V4.5a.75.75 0 0 1 .75-.75h11.25a.75.75 0 0 1 0 1.5H6.31l13.72 13.72a.75.75 0 1 1-1.06 1.06L5.25 6.31Z" },
    { limit: 247.5, path: "M20.03 3.97a.75.75 0 0 1 0 1.06L6.31 18.75h9.44a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75V8.25a.75.75 0 0 1 1.5 0v9.44L18.97 3.97a.75.75 0 0 1 1.06 0Z" },
    { limit: 202.5, path: "M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z" },
    { limit: 157.5, path: "M3.97 3.97a.75.75 0 0 1 1.06 0l13.72 13.72V8.25a.75.75 0 0 1 1.5 0V19.5a.75.75 0 0 1-.75.75H8.25a.75.75 0 0 1 0-1.5h9.44L3.97 5.03a.75.75 0 0 1 0-1.06Z" },
    { limit: 112.5, path: "M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" },
    { limit: 67.5, path: "M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z" },
    { limit: 22.5, path: "M11.47 2.47a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1-1.06 1.06l-2.47-2.47V21a.75.75 0 0 1-1.5 0V4.81L8.78 7.28a.75.75 0 0 1-1.06-1.06l3.75-3.75Z" }, // 最後に北を再度定義
  ];
  const DirectionSVG = ({ path }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path fillRule="evenodd" d={`${path}`} clipRule="evenodd" />
    </svg>
  );
  const convertToCardinal = (degree) => {
    const direction = directions.find((d) => degree > d.limit);
    return <>{direction ? <DirectionSVG path={direction.path} /> : <DirectionSVG path={directions[0].path} />}</>;
  };

  // 位置情報詳細画面に遷移
  // 日時をクリックした際に、その日の天気詳細を表示する
  const navigateToDetail = (location_data: {}) => {
    setRecoilLocation({ latitude: location_data.latitude, longitude: location_data.longitude, datetime: location_data.datetime });
    // router.push("/location");
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
