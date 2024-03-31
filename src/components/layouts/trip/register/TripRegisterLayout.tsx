"use client";
import React, { useState } from "react";

export default function TripRegisterLayout() {
  const [emailNotification, setEmailNotification] = useState(true);
  const [lineNotification, setLineNotification] = useState(true);

  return (
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-base-300 rounded-xl p-8 space-y-4">
      <h1 className="text-3xl font-bold mb-6">出船登録</h1>

      <div className="text-center">
        <span className="font-semibold text-2xl">出船日: 4月16日</span>
      </div>
      <form action="/trip/register" className="w-full max-w-sm">
        {/* 出船時間と帰港時間のフォーム */}
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="departureTime" className="font-semibold text-xl">
            出船時間:
          </label>
          <input
            type="time"
            
            id="departureTime"
            className="input input-bordered"
          />
        </div>
        <p>日の出 6:00</p>
        <div className="flex justify-between items-center mb-4">
          <label htmlFor="returnTime" className="font-semibold text-xl">
            帰港時間:
          </label>
          <input type="time" id="returnTime" className="input input-bordered" />
        </div>
        <p>日の入 18:00</p>

        <div className="flex items-center justify-between mb-2 mt-10">
          <span>帰投時刻を過ぎたら緊急連絡先へメールを送信</span>
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={emailNotification}
            onChange={() => setEmailNotification(!emailNotification)}
          />
        </div>

        <div className="flex items-center justify-between">
          <span>出船中に安全度が低下したらLINEでお知らせ</span>
          <input
            type="checkbox"
            className="toggle toggle-accent"
            checked={lineNotification}
            onChange={() => setLineNotification(!lineNotification)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-full mt-4">
          出船届作成
        </button>
      </form>
    </div>
  );
}
