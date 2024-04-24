import { useEffect, useState } from "react";
import CardWrapper from "@/components/layouts/_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "@/components/layouts/_layoutWrapper/card/CardBodyWrapper";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import FetchLoading from "@/components/ui-elements/icon/loading/FetchLoading";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function OngoingTripCard({ detailToggle }: { detailToggle: boolean }) {
  const [weatherData, setWeatherData] = useState(null);
  const [tripData, setTripData] = useState(null);

  async function getWeatherData() {
    try {
      const activeTripResponse = await fetch(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/active`, {
        credentials: "include",
      });
      const res = await activeTripResponse.json();

      if (!res.data) {
        setTripData(null);
        return; // ローディングを終了する
      }

      setTripData(res.data);

      if (res.data.trip && res.data.trip.departure_time) {
        const weatherResponse = await FetchDailyWeatherData(res.data);
        setWeatherData(weatherResponse);
      }
    } catch (error) {
      console.error("Error", error);
      // 適切なエラーハンドリングを行う
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []); // tripData が変更された場合に再実行

  return (
    <CardWrapper>
      <CardBodyWrapper>
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold text-center mt-4">出船中</h1>
        </div>
        {tripData && Object.keys(tripData).length > 0 ? (
          weatherData ? (
            <>
              <div className="flex justify-center">
                <h2 className="text-xl">地点名</h2>
              </div>
              <DailyWeatherDetail weatherData={weatherData} detailToggle={detailToggle} />
              <BasicButton label="帰還報告へ" className="btn-success" />
            </>
          ) : (
            <FetchLoading />
          )
        ) : (
          <div className="flex justify-center">
            <h2 className="text-xl">出船中の情報がありません</h2>
          </div>
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
