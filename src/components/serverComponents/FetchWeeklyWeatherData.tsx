"use server";
"use server";
import axios from "axios";

// location を引数にして、Weather API から1週間の詳細な天気情報を取得する関数
export async function FetchWeeklyWeatherData(location: any) {
  let weeklyWeatherResponse;

  if (location.location_data.latitude && location.location_data.longitude) {
    weeklyWeatherResponse = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location.location_data.latitude},${location.location_data.longitude}?key=${process.env.NEXT_PUBLIC_WEATHER_FORECAST_API_KEY}&unitGroup=metric&lang=ja`
    );
    console.log(weeklyWeatherResponse.data);
  }


  return weeklyWeatherResponse?.data || null;
}
