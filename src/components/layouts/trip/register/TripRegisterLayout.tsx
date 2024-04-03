"use client";
import React, { useState } from "react";
import DisplaySplitWrapper from "../../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../../layoutWrapper/card/CardWrapper";
import InputField from "@/components/ui-elements/input/InputField";
import ToggleSwitch from "@/components/ui-elements/switch/ToggleSwitch";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function TripRegisterLayout() {
  const [emailNotification, setEmailNotification] = useState(true);
  const [lineNotification, setLineNotification] = useState(true);

  return (
    <DisplaySplitWrapper>
      <CardWrapper className="flex items-center justify-center">
        <h1 className="text-3xl font-bold m-8">出船登録</h1>

        <div className="text-center">
          <p className="font-semibold text-2xl m-4">出船日: 4月16日</p>
        </div>
        <form action="/trip/register" className="w-full max-w-sm">
          <InputField label="出船時間" id="departureTime" type="time" />
          <p>日の出 6:00</p>
          <InputField label="帰港時間" id="returnTime" type="time" />
          <p>日の入 18:00</p>
          <ToggleSwitch
            label="帰投時刻を過ぎたら緊急連絡先へメールを送信"
            checked={emailNotification}
            onChange={() => setEmailNotification(!emailNotification)}
          />
          <ToggleSwitch
            label="出船中に安全度が低下したらLINEでお知らせ"
            checked={lineNotification}
            onChange={() => setLineNotification(!lineNotification)}
          />
          <BasicButton
            label="出船届作成"
            className="btn-success mt-4"
          />
        </form>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
