import InputForm from "@/components/ui-parts/from/InputForm";
import React from "react";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../layoutWrapper/card/CardBodyWrapper";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function ProfileEditLayout() {
  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <h1 className="text-2xl font-bold text-center mt-4 mb-4">マイページ</h1>
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
              label="メールアドレス"
              type="email"
              placeholder="メールアドレスを入力"
              id="email"
              value=""
              onChange={(e) => e.target.value}
            />
            <InputForm
              label="パスワード"
              type="password"
              placeholder="パスワードを入力"
              id="password"
              value=""
              onChange={(e) => e.target.value}
            />
            <InputForm
              label="パスワード確認"
              type="password"
              placeholder="パスワードを再入力"
              id="passwordConfirm"
              value=""
              onChange={(e) => e.target.value}
            />
            <BasicButton
              label="登録"
              className="btn-success"
              buttonClassName="my-6"
            />
          </form>
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
