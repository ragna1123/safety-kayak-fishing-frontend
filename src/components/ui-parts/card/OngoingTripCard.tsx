"use client";
import { useEffect, useState } from "react";
import CardWrapper from "@/components/layouts/_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "@/components/layouts/_layoutWrapper/card/CardBodyWrapper";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import FetchLocationName from "@/components/serverComponents/FetchLocationName";

export default function OngoingTripCard({ detailToggle }: { detailToggle: boolean }) {
  const [weatherData, setWeatherData] = useState(null);
  const [tripData, setTripData] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  async function getWeatherData() {
    setIsLoading(true);
    try {
      const activeTripResponse = await fetch(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/active`, { credentials: "include" });
      const res = await activeTripResponse.json();

      if (!res.data) {
        setIsLoading(false);
        return;
      }

      setTripData(res.data);

      const weatherResponse = await FetchDailyWeatherData(res.data);
      setWeatherData(weatherResponse);

      const locationNameResponse = await FetchLocationName(res.data);
      setLocationName(locationNameResponse);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <CardWrapper>
      <CardBodyWrapper>
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold text-center mt-4">出船中</h1>
        </div>
        {isLoading ? (
          <FetchLoading />
        ) : (
          <>
            {tripData && weatherData ? (
              <>
                <div className="flex justify-center">
                  <h2 className="text-xl">{locationName}</h2>
                </div>
                <DailyWeatherDetail weatherData={weatherData} detailToggle={detailToggle} />
                <BasicButton label="帰還報告へ" className="btn-success" />
              </>
            ) : (
              <p className="text-center text-xl">出船予定はありません。</p>
            )}
          </>
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
