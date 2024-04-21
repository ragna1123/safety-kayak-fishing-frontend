import Header from "@/components/layouts/header/Header";
import DisplayFlexWrapper from "@/components/layouts/layoutWrapper/display/DisplayFlexWrapper";
import MapLayout from "@/components/layouts/map/MapLayout";
import TripDetailLayout from "@/components/layouts/trip/detail/TripDetailLayout";
import React from "react";

export default function TripDetail() {
  // parame-taからidを取得
  // idを使って、tripの詳細情報を取得
  // 取得した情報を使って、fetchDailyWeatherを呼び出す
  return (
    <>
      <Header />
      <DisplayFlexWrapper>
        <MapLayout />
        <TripDetailLayout />
      </DisplayFlexWrapper>
    </>
  );
}
