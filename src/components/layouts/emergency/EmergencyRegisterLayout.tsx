"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import InputForm from "@/components/ui-parts/from/InputForm";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";

interface FormData {
  name: string;
  relationship: string;
  email: string;
}

export default function EmergencyRegisterLayout() {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    name: "",
    relationship: "",
    email: "",
  });
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const registerEmergencyContact = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const res = await axios.post(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/emergency_contacts`, { emergency_contact: formData }, { withCredentials: true });
      if (res.status === 201) {
        console.log("Emergency contact registered successfully");
        router.push("/home");
      } else {
        console.error("Failed to register emergency contact", res.data.message);
        setError("緊急連絡先の登録に失敗しました");
      }
    } catch (error) {
      console.error("Failed to register emergency contact", error);
      setError("緊急連絡先の登録に失敗しました");
    }
  };

  return (
    <CardWrapper>
      {error && <WarningFlashMessage message={error} />}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <h1 className="text-2xl font-bold text-center mt-8 mb-4">緊急連絡先登録</h1>
      <CardBodyWrapper>
        {/* modal component にformが存在する */}
        <InputForm label="氏名" type="text" placeholder="氏名を入力" id="name" value={formData.name} onChange={handleInputChange} />
        <InputForm label="関係" type="text" placeholder="関係性を入力" id="relationship" value={formData.relationship} onChange={handleInputChange} />
        <InputForm label="メールアドレス" type="email" placeholder="メールアドレスを入力" id="email" value={formData.email} onChange={handleInputChange} />
        <BasicButton type="submit" label="緊急連絡先登録" className="btn-success mt-20" buttonClassName="mt-8" onClick={registerEmergencyContact} />
      </CardBodyWrapper>
    </CardWrapper>
  );
}
