"use client";
import React, { useEffect, useState } from "react";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import DeleteIcon from "@/components/ui-elements/icon/DeleteIcon";
import { useRouter } from "next/navigation";
import axios from "axios";
import ModalWrapper from "@/components/ui-elements/modal/ModalWrapper";
import EmergencyRegisterLayout from "./EmergencyRegisterLayout";

type EmergencyContact = {
  id: number;
  name: string;
  relationship: string;
  email: string;
};

export default function EmergencyLayout() {
  const [emergencyContacts, setEmergencyContacts] = useState<EmergencyContact[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  const fetchEmergencyContact = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/emergency_contacts`, { withCredentials: true });
      const emergencyContacts: EmergencyContact[] = res.data.data;
      if (emergencyContacts && emergencyContacts.length > 0) {
        setEmergencyContacts(emergencyContacts);
        console.log("Emergency contacts:", emergencyContacts);
      } else {
        setError("緊急連絡先が登録されていません");
      }
    } catch (error) {
      console.error("Failed to fetch emergency contacts:", error);
      setError("緊急連絡先が登録されていません");
    }
  };

  const deleteEmergencyContact = async (id: number) => {
    // 削除の確認
    if (!confirm("本当に削除しますか？")) {
      return;
    }
    try {
      const res = await axios.delete(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/emergency_contacts/${id}`, { withCredentials: true });
      if (res.status === 200) {
        console.log("Emergency contact deleted successfully");
        setEmergencyContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
      } else {
        console.error("緊急連絡先の削除に失敗しました", res.data.message);
      }
    } catch (error) {
      console.error("緊急連絡先の削除に失敗しました", error);
    }
  };

  const addEmergencyContact = () => {
    router.push("/emergency");
  };

  useEffect(() => {
    fetchEmergencyContact();
  }, []);

  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <h1 className="text-2xl font-bold text-center mt-8 mb-4">緊急連絡先一覧</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <CardBodyWrapper>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>名前</th>
                  <th>関係</th>
                  <th>メールアドレス</th>
                  <th>削除</th>
                </tr>
              </thead>
              <tbody>
                {emergencyContacts.map((contact) => (
                  <tr key={contact.id}>
                    <td>{contact.name}</td>
                    <td>{contact.relationship}</td>
                    <td>{contact.email}</td>
                    <td onClick={() => deleteEmergencyContact(contact.id)}>
                      <DeleteIcon className="transition-colors duration-300 ease-in-out hover:cursor-pointer" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ModalWrapper element_id="emergencyModal" title="緊急連絡先を追加">
            <EmergencyRegisterLayout />
          </ModalWrapper>
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
