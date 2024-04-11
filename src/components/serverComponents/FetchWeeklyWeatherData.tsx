"use server";
import axios from "axios";

// tripData を引数にして、Storm Glass API から1日の詳細な天気情報を取得する関数
export async function FetchWeeklyWeatherData(location: any) {

  const weeklyWeatherResponse = await axios.get(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=${location.location_data.latitude},${location.location_data.longitude}&aggregateHours=24&unitGroup=metric&contentType=json&key=${process.env.NEXT_PUBLIC_WEATHER_FORECAST_API_KEY
}`
  );
  return weeklyWeatherResponse;
}