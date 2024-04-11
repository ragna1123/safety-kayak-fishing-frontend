"use server";
import React from "react";
import FavoriteCard from "@/components/ui-parts/trip/favorite/FavoriteCard";
import OngoingTripCard from "@/components/ui-parts/trip/ongoingTrip/OngoingTripCard";
import TripScheduleCard from "@/components/ui-parts/trip/schedule/TripScheduleCard";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";

export default async function HomeLayout() {
  // ここにクッキー内に保存されたユーザーがあるかどうかを確認する処理を追加
  // なければ、ログイン画面にリダイレクトする処理を追加
  return (
    <DisplaySplitWrapper>
      <OngoingTripCard />
      <TripScheduleCard />
      <FavoriteCard />
    </DisplaySplitWrapper>
  );
}
