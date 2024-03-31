import React from 'react'
import InputForm from "@/components/ui-parts/input/InputForm";

export default function ProfileEditCard() {
  return (
    <div className="card w-full bg-base-300 shadow-xl items-center mb-4">
      <h1 className="text-2xl font-bold text-center mt-4 mb-4">マイページ</h1>
      <div className="card-body flex flex-col items-center">
        <form action="#" className="w-full max-w-md space-y-4">
          <InputForm label="氏名" type="text" placeholder="氏名を入力" id="name" />
          <InputForm label="メールアドレス" type="email" placeholder="メールアドレスを入力" id="email" />
          <InputForm label="パスワード" type="password" placeholder="パスワードを入力" id="password" />
          <InputForm label="パスワード確認" type="password" placeholder="パスワードを再入力" id="passwordConfirm" />
          <div className="flex justify-center w-full">
            <button className="btn btn-primary mt-4">登録</button>
          </div>
        </form>
      </div>
    </div>
  )
}
