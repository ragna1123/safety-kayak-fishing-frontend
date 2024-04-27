"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import InputField from "@/components/ui-elements/input/InputField";
import ToggleSwitch from "@/components/ui-elements/switch/ToggleSwitch";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";
import { useRecoilValue } from "recoil";
import { locationState } from "@/common/states/locationState";

export default function TripRegisterLayout() {
  const router = useRouter();
  const [departureTime, setDepartureTime] = useState("06:00");
  const [estimatedReturnTime, setEstimatedReturnTime] = useState("18:00");
  const [emailNotification, setEmailNotification] = useState(true);
  const [lineNotification, setLineNotification] = useState(true);
  const [flashMessage, setFlashMessage] = useState(false);
  const locationRecoilData = useRecoilValue(locationState);
  console.log(departureTime, estimatedReturnTime, emailNotification, lineNotification, locationRecoilData);

  // 今日の日付をUTCで取得
  const todayUTC = new Date(Date.now());

  // ユーザーからの入力時間をISO8601形式に変換
  const departureISO = new Date(`${todayUTC.toISOString().split("T")[0]}T${departureTime}:00Z`);
  const returnISO = new Date(`${todayUTC.toISOString().split("T")[0]}T${estimatedReturnTime}:00Z`);

  // ISO8601形式のUTC日時を取得
  const departureTimeUTC = departureISO.toISOString();
  const returnTimeUTC = returnISO.toISOString();

  console.log("Departure UTC:", departureTimeUTC);
  console.log("Return UTC:", returnTimeUTC);

  const registerTrip = async (event) => {
    event.preventDefault(); // Prevent form submission

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips`,
        {
          trip: {
            departure_time: departureTimeUTC,
            estimated_return_time: returnTimeUTC,
            details: locationRecoilData?.locationName,
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
    <DisplaySplitWrapper leftPosition={true}>
      <CardWrapper className="flex items-center justify-center">
        {flashMessage && <WarningFlashMessage message="出船予定の登録に失敗しました" />}
        <h1 className="text-2xl font-bold m-8">出船登録</h1>
        <form onSubmit={registerTrip} className="w-full max-w-sm">
          <InputField label="出船時間" id="departureTime" type="time" defaultValue={departureTime} onChange={(e) => setDepartureTime(e.target.value)} />
          {/* <p>日の出 6:00</p> */}
          <InputField label="帰港時間" id="estimatedReturnTime" type="time" defaultValue={estimatedReturnTime} onChange={(e) => setEstimatedReturnTime(e.target.value)} />
          {/* <p>日の入 18:00</p> */}
          <ToggleSwitch label="帰投時刻を過ぎたら緊急連絡先へメールを送信" checked={emailNotification} onChange={() => setEmailNotification(!emailNotification)} />
          <ToggleSwitch label="出船中に安全度が低下したらLINEでお知らせ" checked={lineNotification} onChange={() => setLineNotification(!lineNotification)} />
          <BasicButton label="出船届作成" className="btn-success my-8" type="submit" />
        </form>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
