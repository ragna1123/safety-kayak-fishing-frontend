"use client";
import React from "react";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import GoogleMap from "@/components/ui-parts/map/GoogleMap";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { registerLocationState } from "@/common/states/registerLocationState";
import TripRegisterLayout from "../trip/TripRegisterLayout";

export default function MapLayout() {
  // ここはお気に入りをリコイルに保存して、それを取得して表示する処理を追加
  const locations = [
    { lat: 35.6895, lng: 139.6917 }, // 東京
    { lat: 34.6937, lng: 135.5023 }, // 大阪
    // 他の緯度経度
  ];

  // ロケーション詳細から位置情報がリコイルに保存されたら、マップ置き換える処理を追加
  const registerLocation = useRecoilValue(registerLocationState);

  return (
    <DisplaySplitWrapper leftPosition={true}>
      {/* Googleマップを表示 */}
      {registerLocation ? <TripRegisterLayout locations={registerLocation} /> : <GoogleMap locations={locations} />}
    </DisplaySplitWrapper>
  );
}
