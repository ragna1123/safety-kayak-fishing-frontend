import InputForm from "@/components/ui-parts/from/InputForm";
import React from "react";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function ProfileEditLayout() {
  return (
    <CardWrapper>
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      <h1 className="text-3xl font-bold text-center mt-4 mb-4">プロフィール編集</h1>
      <CardBodyWrapper>
        <div className="w-full max-w-md space-y-4">
          <InputForm label="氏名" type="text" placeholder="氏名を入力" id="name" value="" onChange={(e) => e.target.value} />
          <InputForm label="メールアドレス" type="email" placeholder="メールアドレスを入力" id="email" value="" onChange={(e) => e.target.value} />
          <InputForm label="パスワード" type="password" placeholder="パスワードを入力" id="password" value="" onChange={(e) => e.target.value} />
          <InputForm label="パスワード確認" type="password" placeholder="パスワードを再入力" id="passwordConfirm" value="" onChange={(e) => e.target.value} />
          <BasicButton label="登録" className="btn-success" buttonClassName="my-6" />
        </div>
      </CardBodyWrapper>
    </CardWrapper>
  );
}
