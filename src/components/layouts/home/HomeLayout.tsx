"use client";
import React, { useEffect, useState } from "react";
import FavoriteCard from "@/components/ui-parts/card/FavoriteCard";
import OngoingTripCard from "@/components/ui-parts/card/OngoingTripCard";
import TripScheduleCard from "@/components/ui-parts/card/TripScheduleCard";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import axios from "axios";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";
import { useRouter } from "next/navigation";
import useUnreturnedTripChecker from "@/common/hooks/useUnreturnedTripChecker";
import ErrorFlashMessage from "@/components/ui-parts/flashMessage/ErrorFlashMessage";

export default function HomeLayout() {
  const { unreturnedTrips, isLoading: unreturnedLoading, error: unreturnedError } = useUnreturnedTripChecker();
  const [emergencyContacts, setEmergencyContacts] = useState([]);
  const [error, setError] = useState("");
  const router = useRouter();

  // 最初に緊急連絡先の取得して登録されているか確認
  const fetchEmergencyContact = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/emergency_contacts`, { withCredentials: true });
      const emergencyContacts = res.data.data;
      if (emergencyContacts && emergencyContacts.length > 0) {
        setEmergencyContacts(emergencyContacts);
        setError("");
      } else {
        setError("緊急連絡先が登録されていません");
      }
    } catch (error) {
      console.error("Failed to fetch emergency contacts:", error);
      setError("緊急連絡先が登録されていません");
    }
  };

  // 緊急連絡先登録画面への遷移
  const navigateToEmergencyRegister = () => {
    router.push("/emergency/register");
  };

  const navigateToReturn = () => {
    router.push(`/trip/unreturned`);
  };

  useEffect(() => {
    fetchEmergencyContact();
  }, []);

  return (
    <DisplaySplitWrapper>
      {emergencyContacts.length === 0 && error && (
        <div className="w-full cursor-pointer" onClick={navigateToEmergencyRegister}>
          <WarningFlashMessage message={error} />
        </div>
      )}
      {unreturnedError && <ErrorFlashMessage message={unreturnedError} />}
      {unreturnedTrips.length > 0 && (
        <div onClick={() => navigateToReturn()}>
          <WarningFlashMessage message={`${unreturnedTrips.length}件の帰還報告のされていない予定があります。クリックして確認してください。`} />
        </div>
      )}
      <OngoingTripCard detailToggle={false} />
      <TripScheduleCard />
      <FavoriteCard />
    </DisplaySplitWrapper>
  );
}
