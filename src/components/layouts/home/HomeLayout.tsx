"use client";
import React from "react";
import FavoriteCard from "@/components/ui-parts/card/favorite/FavoriteCard";
import OngoingTripCard from "@/components/ui-parts/card/ongoingTrip/OngoingTripCard";
import TripScheduleCard from "@/components/ui-parts/card/schedule/TripScheduleCard";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";

export default function HomeLayout() {
  // ここにクッキー内に保存されたユーザーがあるかどうかを確認する処理を追加
  // なければ、ログイン画面にリダイレクトする処理を追加
  return (
    <DisplaySplitWrapper>
      <OngoingTripCard detailToggle={false} />
      <TripScheduleCard />
      <FavoriteCard />
    </DisplaySplitWrapper>
  );
}
