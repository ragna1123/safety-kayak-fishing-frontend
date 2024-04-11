"use server";
import axios from "axios";

// tripData を引数にして、Storm Glass API から1日の詳細な天気情報を取得する関数
export async function FetchDailyWeatherData(tripData: any) {

  const startDateJST = new Date(tripData.trip.departure_time);
      
  // endDateJST を生成して、1日加算
  const endDateJST = new Date(startDateJST);
  endDateJST.setDate(startDateJST.getDate() + 1);

  // ISO 文字列に変換
  const startDateUTC = startDateJST.toISOString();
  const endDateUTC = endDateJST.toISOString();

//   ISOリクエスト形式に変換して Storm Glass API にリクエスト
  const encodedStartDate = encodeURIComponent(startDateUTC);
  const encodedEndDate = encodeURIComponent(endDateUTC);

  const params = [
    "windSpeed",
    "airTemperature",
    "pressure",
    "cloudCover",
    "gust",
    "humidity",
    "precipitation",
    "swellDirection",
    "swellHeight",
    "swellPeriod",
    "visibility",
    "waterTemperature",
    "waveDirection",
    "waveHeight",
    "wavePeriod",
    "windWaveDirection",
    "windWaveHeight",
    "windWavePeriod",
    "windDirection",
  ]
  const dataType = ["sg"];

  const weatherResponse = await axios.get(
    `https://api.stormglass.io/v2/weather/point?lat=${tripData.location.latitude}&lng=${tripData.location.longitude}&params=${params.join(',')}&start=${encodedStartDate}&end=${encodedEndDate}&source=${dataType.join(',')}`,
    {
      headers: {
        'Authorization': `${process.env.NEXT_PUBLIC_STORM_GLASS_API_KEY}`
      },
    }
  );

  return weatherResponse.data.hours;
}

