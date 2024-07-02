"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import InputField from "@/components/ui-elements/input/InputField";
import ToggleSwitch from "@/components/ui-elements/switch/ToggleSwitch";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TripRegisterLayout() {
  const [departureTime, setDepartureTime] = useState("");
  const [estimatedReturnTime, setEstimatedReturnTime] = useState("");
  const [emailNotification, setEmailNotification] = useState(true);
  const [lineNotification, setLineNotification] = useState(true);
  const [flashMessage, setFlashMessage] = useState(false);
  const [tripData, setTripData] = useState({});
  const router = useRouter();
  const params = useParams();

  // 編集対象の出船情報を取得
  const getTrip = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/${params.id}`, { withCredentials: true });
      if (response.status === 200 && response.data.data) {
        const tripData = response.data.data;
        setTripData(tripData);
        setDepartureTime(dayjs(tripData.trip.departure_time).tz("Asia/Tokyo").format("HH:mm"));
        setEstimatedReturnTime(dayjs(tripData.trip.estimated_return_time).tz("Asia/Tokyo").format("HH:mm"));
      } else {
        console.error("Failed to fetch trip details:", response.data.message);
      }
    } catch (error) {
      console.error("Failed to fetch trip details:", error);
    }
  };

  const registerTrip = async (event) => {
    event.preventDefault();
    console.log(tripData);
    const todayUTC = dayjs(tripData?.trip.departure_time).tz("Asia/Tokyo").format("YYYY-MM-DD");
    console.log(todayUTC);

    const departureDateTime = dayjs(`${todayUTC}T${departureTime}:00`).tz("Asia/Tokyo").utc().format();
    const returnDateTime = dayjs(`${todayUTC}T${estimatedReturnTime}:00`).tz("Asia/Tokyo").utc().format();
    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/${params.id}`,
        {
          trip: {
            departure_time: departureDateTime,
            estimated_return_time: returnDateTime,
          },
        },
        { withCredentials: true }
      );
      if (response.status === 200) {
        router.push("/home");
      } else {
        setFlashMessage(true);
      }
    } catch (error) {
      console.error("Failed to register the trip:", error);
      setFlashMessage(true);
    }
  };

  useEffect(() => {
    if (params.id) getTrip();
  }, [params.id]);

  return (
    <DisplaySplitWrapper leftPosition={true}>
      {flashMessage && <WarningFlashMessage message="編集時にエラーが発生しました" />}
      <CardWrapper className="flex items-center justify-center">
        <h1 className="text-3xl font-bold m-8">出船編集</h1>
        <form onSubmit={registerTrip} className="w-full max-w-sm">
          <InputField label="出船時間" id="departureTime" type="time" defaultValue={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
          <InputField label="帰港時間" id="estimatedReturnTime" type="time" defaultValue={estimatedReturnTime} onChange={(e) => setEstimatedReturnTime(e.target.value)} />
          <ToggleSwitch label="帰投時刻を過ぎたら緊急連絡先へメールを送信" checked={emailNotification} onChange={() => setEmailNotification(!emailNotification)} />
          <ToggleSwitch label="出船中に安全度が低下したらLINEでお知らせ" checked={lineNotification} onChange={() => setLineNotification(!lineNotification)} />
          <BasicButton label="出船届編集" className="btn-success m-4" type="submit" />
        </form>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
