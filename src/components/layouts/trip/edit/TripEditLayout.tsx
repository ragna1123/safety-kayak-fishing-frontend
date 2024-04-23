"use client";
import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import DisplaySplitWrapper from "../../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../../layoutWrapper/card/CardWrapper";
import InputField from "@/components/ui-elements/input/InputField";
import ToggleSwitch from "@/components/ui-elements/switch/ToggleSwitch";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";

export default function TripRegisterLayout() {
  const [emailNotification, setEmailNotification] = useState(true);
  const [lineNotification, setLineNotification] = useState(true);
  const [flashMessage, setFlashMessage] = useState(false);
  const [tripData, setTripData] = useState({});
  const router = useRouter();
  const params = useParams();

  const getTrip = async () => {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/${params.id}`, { withCredentials: true });
      if (response.status === 200 && response.data.data) {
        setTripData(response.data.data);
      } else {
        console.error("Failed to fetch trip details:", response.data.message);
      }
    } catch (error) {
      console.error("Failed to fetch trip details:", error);
    }
  };

  useEffect(() => {
    if (params.id) getTrip();
  }, [params.id]);

  const registerTrip = async (event) => {
    event.preventDefault();
    const departureTime = event.target.departureTime.value;
    const returnTime = event.target.returnTime.value;

    try {
      const response = await axios.put(
        `${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/${params.id}`,
        {
          trip: {
            departure_time: departureTime,
            estimated_return_time: returnTime,
            details: "Details provided",
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

  return (
    <DisplaySplitWrapper leftPosition={true}>
      {flashMessage && <WarningFlashMessage message="編集時にエラーが発生しました" />}
      <CardWrapper className="flex items-center justify-center">
        <h1 className="text-3xl font-bold m-8">出船編集</h1>
        <form onSubmit={registerTrip} className="w-full max-w-sm">
          <InputField label="出船時間" id="departureTime" type="time" defaultValue={tripData.departure_time} />
          <InputField label="帰港時間" id="returnTime" type="time" defaultValue={tripData.estimated_return_time} />
          <ToggleSwitch label="帰投時刻を過ぎたら緊急連絡先へメールを送信" checked={emailNotification} onChange={() => setEmailNotification(!emailNotification)} />
          <ToggleSwitch label="出船中に安全度が低下したらLINEでお知らせ" checked={lineNotification} onChange={() => setLineNotification(!lineNotification)} />
          <BasicButton label="出船届編集" className="btn-success m-4" type="submit" />
        </form>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
