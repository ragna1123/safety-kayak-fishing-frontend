"use client";
import React, { useState } from "react";
import DisplaySplitWrapper from "../../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../../layoutWrapper/card/CardWrapper";
import InputField from "@/components/ui-elements/input/InputField";
import ToggleSwitch from "@/components/ui-elements/switch/ToggleSwitch";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import axios from "axios";
import { useRouter } from "next/navigation";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";

export default function TripRegisterLayout() {
  const router = useRouter();
  const [emailNotification, setEmailNotification] = useState(true);
  const [lineNotification, setLineNotification] = useState(true);
  const [flashMessage, setFlashMessage] = useState(false);

  const registerTrip = async (event) => {
    event.preventDefault(); // フォームのデフォルト送信を防ぐ
    const today = new Date(); // 現在の日付を取得
    const sessionLocationData = sessionStorage.getItem("location");
    const location = JSON.parse(sessionLocationData || "{}");

    // 入力された時間と現在の日付を組み合わせる
    const departureTimeValue = `${today.toISOString().split("T")[0]}T${event.target.departureTime.value}:00`;
    const returnTimeValue = `${today.toISOString().split("T")[0]}T${event.target.estimatedReturnTime.value}:00`;

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips`,
        {
          trip: {
            departure_time: departureTimeValue,
            estimated_return_time: returnTimeValue,
            details: "aaaa",
            location_data: {
              latitude: location.lat,
              longitude: location.lng,
            },
          },
        },
        {
          withCredentials: true, // This should be part of the config options, not the data payload
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
    }
  };

  return (
    <DisplaySplitWrapper leftPosition={true}>
      <CardWrapper className="flex items-center justify-center">
        {flashMessage && <WarningFlashMessage message="出船予定の登録に失敗しました" />}
        <h1 className="text-3xl font-bold m-8">出船登録</h1>
        <form onSubmit={registerTrip} className="w-full max-w-sm">
          <InputField label="出船時間" id="departureTime" type="time" />
          <p>日の出 6:00</p>
          <InputField label="帰港時間" id="estimatedReturnTime" type="time" />
          <p>日の入 18:00</p>
          <ToggleSwitch label="帰投時刻を過ぎたら緊急連絡先へメールを送信" checked={emailNotification} onChange={() => setEmailNotification(!emailNotification)} />
          <ToggleSwitch label="出船中に安全度が低下したらLINEでお知らせ" checked={lineNotification} onChange={() => setLineNotification(!lineNotification)} />
          <BasicButton label="出船届作成" className="btn-success my-8" type="submit" />
        </form>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
