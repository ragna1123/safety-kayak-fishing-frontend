import React from "react";

export default function DailyWeatherForecastTable() {
  return (
    <div className="overflow-x-auto hidden-scrollbar">
      <table className="table table-zebra w-full text-sm">
        <thead>
          <tr>
            <th className="py-2 px-12">時間</th>
            {Array.from({ length: 24 }, (_, i) => (
              <th key={i} className="py-2">
                {`${i}時`}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2">天気</td>
            <td>晴れ</td>
            <td>曇り</td>
          </tr>
          <tr>
            <td className="py-2">気温</td>
            <td>20°C</td>
            <td>19°C</td>
          </tr>
          <tr>
            <td className="py-2">
              風速/
              <br />
              向き
            </td>
            <td>
              5m/s
              <br />北
            </td>
            <td>
              6m/s
              <br />
              北東
            </td>
          </tr>
          <tr>
            <td>降水確率</td>
            <td>10%</td>
            <td>20%</td>
          </tr>
          <tr>
            <td>
              波の高さ/
              <br />
              方向
            </td>
            <td>
              1m
              <br />北
            </td>
            <td>
              1.5m
              <br />
              北東
            </td>
          </tr>
          <tr>
            <td>
              うねりの高さ
              <br />
              間隔
            </td>
            <td>
              0.5m
              <br />
              10s
            </td>
            <td>
              0.7m
              <br />
              12s
            </td>
          </tr>
          <tr>
            <td>安全度</td>
            <td>A</td>
            <td>B</td>
          </tr>

          {/* ここに潮位グラフを追加 */}
          
        </tbody>
      </table>
    </div>
  );
}
