import React from "react";
import InputForm from "@/components/ui-parts/from/InputForm";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import CardWrapper from "../layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../layoutWrapper/card/CardBodyWrapper";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";

export default function EmergencyDetailLayout() {
  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <h1 className="text-2xl font-bold text-center mt-4 mb-4">
          緊急連絡先登録
        </h1>
        <CardBodyWrapper>
          <form action="#" className="w-full max-w-md space-y-4">
            <InputForm
              label="氏名"
              type="text"
              placeholder="氏名を入力"
              id="name"
              value=""
              onChange={(e) => e.target.value}
            />
            <InputForm
              label="関係"
              type="text"
              placeholder="関係性を入力"
              id="relationship"
              value=""
              onChange={(e) => e.target.value}
            />
            <InputForm
              label="メールアドレス"
              type="email"
              placeholder="メールアドレスを入力"
              id="email"
              value=""
              onChange={(e) => e.target.value}
            />
            <BasicButton
              label="緊急連絡先登録"
              className="btn-success"
              buttonClassName="mt-6"
            />
          </form>
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
