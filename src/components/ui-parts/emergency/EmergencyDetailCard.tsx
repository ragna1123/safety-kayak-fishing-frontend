import React from "react";
import InputForm from "@/components/ui-parts/input/InputForm";

export default function EmergencyCard() {
  return (
    <div className="card w-full bg-base-300 shadow-xl items-center mb-4">
      <h1 className="text-2xl font-bold text-center mt-4 mb-4">緊急連絡先登録</h1>
      <div className="card-body flex flex-col items-center">
        <form action="#" className="w-full max-w-md space-y-4">
          <InputForm label="氏名" type="text" placeholder="氏名を入力" id="name" />
          <InputForm label="関係" type="text" placeholder="関係性を入力" id="relationship" />
          <InputForm label="メールアドレス" type="email" placeholder="メールアドレスを入力" id="email" />
          <div className="flex justify-center w-full">
            <button className="btn btn-primary mt-4">緊急連絡先登録</button>
          </div>
        </form>
      </div>
    </div>
  );
}
