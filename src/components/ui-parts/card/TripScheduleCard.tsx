"use client";
import React, { useEffect, useState } from "react";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import CardBodyWrapper from "@/components/layouts/_layoutWrapper/card/CardBodyWrapper";
import CardWrapper from "@/components/layouts/_layoutWrapper/card/CardWrapper";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import { useRouter } from "next/navigation";
import { FetchDailyWeatherData } from "@/components/serverComponents/FetchDailyWeatherData";
import FetchLocationName from "@/components/serverComponents/FetchLocationName";
import axios from "axios";

export default function TripScheduleCard() {
  const [tripData, setTripData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  async function getWeatherArrayData() {
    setIsLoading(true);
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips`, { withCredentials: true });
      const tripsData = res.data.data;

      if (tripsData && tripsData.length > 0) {
        const fetchedData = await Promise.all(
          tripsData.map(async (tripData) => {
            const weatherData = await FetchDailyWeatherData(tripData);
            const locationName = await FetchLocationName(tripData);
            return {
              ...tripData,
              weatherData,
              locationName,
            };
          })
        );
        setTripData(fetchedData);
        console.log("Fetched trip data:", fetchedData);
      } else {
        setTripData([]);
      }
    } catch (error) {
      console.error("Error fetching trip data:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getWeatherArrayData();
  }, []);

  const handleClick = (id) => {
    router.push(`/trip/${id}`);
  };

  return (
    <CardWrapper>
      <CardBodyWrapper>
        <div className="flex justify-center">
          <h1 className="text-2xl font-bold">出船予定</h1>
        </div>
        {tripData.length === 0 && !isLoading && <p className="text-center">出船予定はありません。</p>}
        {isLoading ? (
          <FetchLoading />
        ) : (
          tripData.map((data, index) => (
            <div key={index} onClick={() => handleClick(data.trip.id)} className="cursor-pointer">
              <h1 className="text-2xl font-bold text-center mt-4">{data.locationName}</h1>
              <div className="flex justify-center">
                <h2 className="text-xl">{data.trip.departure_time}</h2>
              </div>
              <DailyWeatherDetail weatherData={data.weatherData} />
            </div>
          ))
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
