"use client";
import React, { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useRecoilValue } from "recoil";
import { locationState } from "@/common/states/locationState";
import LocationCard from "@/components/ui-parts/card/LocationCard";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import FetchLocationName from "@/components/serverComponents/FetchLocationName";

interface LocationState {
  latitude?: number; // 緯度
  longitude?: number; // 経度
}

export default function LocationLayout() {
  const locationRecoilData: LocationState = useRecoilValue<LocationState>(locationState);
  const [LocationName, setLocationName] = useState<string>(""); // 追加
  const router = useRouter();
  const fetchLocationName = async () => {
    try {
      // fetchLocationName関数用にリクエストデータを作成
      const req_data = { location_data: { latitude: locationRecoilData.latitude, longitude: locationRecoilData.longitude } };
      const res = await FetchLocationName(req_data);
      setLocationName(res);
    } catch (error) {
      console.error("Failed to fetch location name:", error);
      throw error;
    }
  };

  useEffect(() => {
    // 位置情報が取得できている場合、位置情報から地名を取得
    if (locationRecoilData || locationRecoilData?.latitude || locationRecoilData?.longitude) {
      fetchLocationName();
    } else {
      router.push("/home");
    }
  }, [locationRecoilData, router]);

  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <div className="flex justify-center p-4 mt-4 items-center">
          <h1 className="text-2xl font-bold">{LocationName}</h1>
        </div>
        <LocationCard />
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
