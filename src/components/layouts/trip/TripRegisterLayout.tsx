"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import InputField from "@/components/ui-elements/input/InputField";
import ToggleSwitch from "@/components/ui-elements/switch/ToggleSwitch";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";
import { useRecoilValue } from "recoil";
import { locationState } from "@/common/states/locationState";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import FetchLocationName from "@/components/APIfetch/FetchLocationName";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TripRegisterLayout() {
  const router = useRouter();

  const [departureTime, setDepartureTime] = useState("06:00");
  const [estimatedReturnTime, setEstimatedReturnTime] = useState("12:00");
  const [emailNotification, setEmailNotification] = useState(true);
  const [lineNotification, setLineNotification] = useState(true);
  const [flashMessage, setFlashMessage] = useState(false);
  const locationRecoilData = useRecoilValue(locationState);

  // locationページからの日時ステート引き継ぎ、recoil内にあるdatetimeを元に出船予定日を作成する

  // ユーザーからの入力時間をISO8601形式に変換
  // JST時間をUTC時間に変換

  const todayUTC = dayjs(locationRecoilData?.datetime || new Date()).format("YYYY-MM-DD");

  // JST時間をUTC時間に変換
  const departureDateTime = dayjs(`${todayUTC}T${departureTime}:00`).tz("Asia/Tokyo").utc().format();
  const returnDateTime = dayjs(`${todayUTC}T${estimatedReturnTime}:00`).tz("Asia/Tokyo").utc().format();

  const registerTrip = async (event) => {
    event.preventDefault(); // Prevent form submission
    console.log("Registering trip...");

    try {
      const resLocationName = await FetchLocationName({ location_data: { latitude: locationRecoilData?.latitude, longitude: locationRecoilData?.longitude } });

      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips`,
        {
          trip: {
            departure_time: departureDateTime,
            estimated_return_time: returnDateTime,
            details: resLocationName,
            location_data: {
              latitude: locationRecoilData?.latitude,
              longitude: locationRecoilData?.longitude,
            },
          },
        },
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        console.log("Trip registration successful");
        router.push("/home");
      } else {
        console.error("Failed to register the trip:", response.data.message);
        setFlashMessage(true);
      }
    } catch (error) {
      console.error("Failed to register the trip:", error);
      setFlashMessage(true);
    }
  };

  return (
    <CardWrapper className="flex items-center justify-center">
      {flashMessage && <WarningFlashMessage message="出船予定の登録に失敗しました" />}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <h1 className="text-3xl font-bold mt-4">出船登録</h1>
      <div className="flex justify-center">
        {/* 出船日時をリコイルから取得する↓ */}
        {/* <p className="text-sm text-stone-200">出船予定日: {}</p> */}
      </div>
      <div className="w-full max-w-sm">
        <InputField label="出船時間" id="departureTime" type="time" defaultValue={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
        <InputField label="帰港時間" id="estimatedReturnTime" type="time" defaultValue={estimatedReturnTime} onChange={(e) => setEstimatedReturnTime(e.target.value)} />
        <ToggleSwitch label="帰投時刻を過ぎたら緊急連絡先へメールを送信" checked={emailNotification} onChange={() => setEmailNotification(!emailNotification)} />
        <ToggleSwitch label="出船中に安全度が低下したらLINEでお知らせ" checked={lineNotification} onChange={() => setLineNotification(!lineNotification)} />
        <BasicButton label="出船届作成" className="btn-success my-8" type="submit" onClick={registerTrip} />
      </div>
    </CardWrapper>
  );
}
