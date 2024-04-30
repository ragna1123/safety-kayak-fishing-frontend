"use client";
import { useEffect, useState } from "react";
import CardWrapper from "@/components/layouts/_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "@/components/layouts/_layoutWrapper/card/CardBodyWrapper";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import FetchLocationName from "@/components/serverComponents/FetchLocationName";
import { useRouter } from "next/navigation";

export default function OngoingTripCard({ detailToggle }: { detailToggle: boolean }) {
  const [weatherData, setWeatherData] = useState(null);
  const [tripData, setTripData] = useState(null);
  const [locationName, setLocationName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

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

  const navigateToReturn = () => {
    router.push(`/trip/${tripData?.trip.id}/return`);
  };

  const navigateToActiveTrip = () => {
    router.push(`/trip/active`);
  };

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <CardWrapper>
      <CardBodyWrapper>
        <div className="flex justify-center">
          <h1 className="text-3xl font-bold text-center mt-4">出船中</h1>
        </div>
        {isLoading ? (
          <FetchLoading />
        ) : (
          <>
            {tripData && weatherData ? (
              <>
                <div className={`flex flex-col rounded-md transition-colors ${detailToggle ? "" : "cursor-pointer border-4 border-transparent hover:border-zinc-700"}`} onClick={detailToggle ? undefined : navigateToActiveTrip}>
                  <h2 className="text-2xl font-bold text-center mt-4">{locationName}</h2>
                  <div className="flex justify-center space-x-4 mt-2">
                    <h3 className="text-xl">{tripData.trip.departure_time}</h3>
                    <span className="text-xl">to</span>
                    <h3 className="text-xl">{tripData.trip.estimated_return_time}</h3>
                  </div>
                  <DailyWeatherDetail weatherData={weatherData} detailToggle={detailToggle} />
                </div>
                <BasicButton label="帰還報告へ" className="btn-success" onClick={navigateToReturn} />
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
