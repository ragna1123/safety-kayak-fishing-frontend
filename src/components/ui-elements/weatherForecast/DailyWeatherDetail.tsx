"use client";
export default function DailyWeatherDetail({ weatherData, tripData, detailToggle }: any) {
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

  return (
    <>
      <div className="overflow-x-auto hidden-scrollbar">
        <table className="table table-zebra w-full text-s">
          <thead>
            <tr>
              <th className="py-2 px-12">時間</th>
              {Array.from({ length: 25 }, (_, i) => (
                <th key={i} className="py-2">
                  {`${i}:00`}
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
              {weatherData?.map((hour: any, index: number) => (
                <td className="text-orange-500" key={index}>
                  {hour.airTemperature.sg.toFixed(1)}°C
                </td>
              ))}
            </tr>

            {detailToggle && (
              <>
                <tr>
                  <td>湿度</td>
                  {weatherData?.map((hour: any, index: number) => (
                    <td className="text-orange-500" key={index}>
                      {hour.humidity.sg.toFixed(0)}%
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>降水確率</td>
                  {weatherData?.map((hour: any, index: number) => (
                    <td className="text-orange-200" key={index}>
                      {hour.precipitation.sg.toFixed(1)}%
                    </td>
                  ))}
                </tr>
              </>
            )}

            <tr>
              <td className="py-2">風速</td>
              {weatherData?.map((hour: any, index: number) => (
                <td className="text-lime-300" key={index}>
                  {hour.windSpeed.sg.toFixed(1)}m/s
                  <br />
                  {convertToCardinal(hour.windDirection.sg)}
                </td>
              ))}
            </tr>
            {/* ホームと詳細ページで切り替え */}
            {detailToggle && (
              <>
                <tr>
                  <td className="py-2">瞬間風速</td>
                  {weatherData?.map((hour: any, index: number) => (
                    <td className="text-lime-300" key={index}>
                      {hour.gust.sg.toFixed(1)}m/s
                    </td>
                  ))}
                </tr>
              </>
            )}
            <tr>
              <td>波の高さ</td>
              {weatherData?.map((hour: any, index: number) => (
                <td className="text-cyan-400" key={index}>
                  {hour.waveHeight?.sg === 0 ? " - " : `${hour.waveHeight?.sg}m`}
                  <br />
                  {hour.waveHeight?.sg === 0 ? "" : convertToCardinal(hour.waveDirection?.sg)}
                </td>
              ))}
            </tr>
            {detailToggle && (
              <>
                <tr>
                  <td>うねり</td>
                  {weatherData?.map((hour: any, index: number) => (
                    <td className="text-cyan-400" key={index}>
                      {hour.swellHeight?.sg}m<br />
                      {hour.swellPeriod?.sg.toFixed(1)}s
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>水温</td>
                  {weatherData?.map((hour: any, index: number) => (
                    <td className="text-indigo-500" key={index}>
                      {hour.waterTemperature?.sg.toFixed(1)}°C
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>気圧</td>
                  {weatherData?.map((hour: any, index: number) => (
                    <td className="text-teal-300" key={index}>
                      {hour.pressure.sg.toFixed(1)}Pa
                    </td>
                  ))}
                </tr>
                <tr>
                  <td>視程</td>
                  {weatherData?.map((hour: any, index: number) => (
                    <td className="text-teal-300" key={index}>
                      {hour.visibility.sg.toFixed(1)}km
                    </td>
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
