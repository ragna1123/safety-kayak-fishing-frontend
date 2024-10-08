"use client";
import React, { useEffect, useState } from "react";
import DailyWeatherDetail from "@/components/ui-elements/weatherForecast/DailyWeatherDetail";
import CardBodyWrapper from "@/components/layouts/_layoutWrapper/card/CardBodyWrapper";
import CardWrapper from "@/components/layouts/_layoutWrapper/card/CardWrapper";
import FetchLoading from "@/components/ui-elements/icon/FetchLoading";
import { useRouter } from "next/navigation";
import { FetchDailyWeatherData } from "@/components/APIfetch/FetchDailyWeatherData";
import axios from "axios";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

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
            return {
              ...tripData,
              weatherData,
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

  const navigateToSchedule = () => {
    router.push("/trip");
  };

  const handleClick = (id) => {
    router.push(`/trip/${id}`);
  };

  useEffect(() => {
    getWeatherArrayData();
  }, []);

  return (
    <CardWrapper>
      <CardBodyWrapper>
        <div className="flex justify-center">
          <h1
            className="text-3xl font-bold text-center cursor-pointer hover:text-zinc-500 transition duration-100 ease-in-out"
            onClick={() => {
              navigateToSchedule();
            }}
          >
            出船予定
          </h1>
        </div>
        {tripData.length === 0 && !isLoading && <p className="text-center text-xl mt-2">出船予定はありません</p>}
        {isLoading ? (
          <FetchLoading />
        ) : (
          tripData.map((data, index) => (
            <div key={index} className="cursor-pointer border-4 border-transparent rounded-md transition-colors hover:border-zinc-700" onClick={() => handleClick(data.trip.id)}>
              <h1 className="text-xl font-bold text-center mt-4">{data.trip.details}</h1>
              <div className="flex justify-center">
                <h2 className="text-xl">{dayjs(data.trip.departure_time).tz("Asia/tokyo").format("YYYY M/D H:mm")}</h2>
                <h2 className="text-xl">〜</h2>
                <h2 className="text-xl">{dayjs(data.trip.estimated_return_time).tz("Asia/tokyo").format("H:mm")}</h2>
              </div>
              <DailyWeatherDetail weatherData={data.weatherData} />
            </div>
          ))
        )}
      </CardBodyWrapper>
    </CardWrapper>
  );
}
