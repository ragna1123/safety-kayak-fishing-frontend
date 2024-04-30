"use client";
import React, { useState } from "react";
import TextareaForm from "../from/TextareaForm";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import WarningFlashMessage from "../flashMessage/WarningFlashMessage";
import axios from "axios";
import { useRouter } from "next/navigation";

interface TripData {
  trip: {
    id: number;
    details: string;
    departure_time: string;
    estimated_return_time: string;
  };
  location_data: {
    latitude: string;
    longitude: string;
  };
}

interface Props {
  tripData: TripData;
}

export default function TripReportCard({ tripData }: Props) {
  const [returnDetails, setReturnDetails] = useState("");
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  const trip = tripData.trip;
  console.log(trip.id);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_RAILS_API_URL}/trips/${trip.id}/return`,
        {
          trip: { return_details: returnDetails },
        },
        { withCredentials: true }
      );
      if (res.status == 200) {
        router.push("/home");
      } else {
        setIsError(true);
        throw new Error("Failed to submit return report");
      }
    } catch (error) {
      console.error("Failed to submit trip return report:", error);
      setIsError(true);
    }
  };

  return (
    <>
      <div className="text-center p-4">
        {isError && <WarningFlashMessage message="帰投報告に失敗しました。" />}
        <h1 className="text-3xl font-bold mb-6">帰投報告</h1>
        <h2 className="text-2xl font-bold">{trip.details}</h2>
        <h4 className="text-md px-1">{trip.departure_time}</h4>
        <h4 className="text-md px-1">{trip.estimated_return_time}</h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextareaForm label="報告内容" row={8} placeholder="報告内容を入力" id="return_details" onChange={(e) => setReturnDetails(e.target.value)} />
          <BasicButton label="帰投報告" className="btn-success m-8" type="submit" />
        </form>
      </div>
    </>
  );
}
