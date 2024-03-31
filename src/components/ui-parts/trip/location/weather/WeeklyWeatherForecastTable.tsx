import React from "react";

export default function WeeklyWeatherForecastTable() {
  return (
    <div className="overflow-x-auto hidden-scrollbar">
      <table className="table table-zebra w-full text-sm">
        <thead>
          <tr>
            <th className="py-2 px-12">月/日</th>
            {Array.from({ length: 16 }, (_, i) => (
              <th key={i} className="py-2">
                {`4/${i + 1}`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-1 px-4">天気</td>
            <td>晴れ</td>
          </tr>
          <tr>
            <td className="py-2 px-4">最高気温</td>
            <td>20°C</td>
          </tr>
          <tr>
            <td className="py-2 px-4">
              風速 m/s
              <br />
              6|12|18時
            </td>
            <td>3|6|7</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
