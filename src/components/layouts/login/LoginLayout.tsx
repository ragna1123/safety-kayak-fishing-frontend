"use client";
import React, { use, useEffect, useState } from "react";
import InputForm from "@/components/ui-parts/from/InputForm";
import TextLink from "@/components/ui-elements/link/TextLink";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import CardTitleH2 from "@/components/ui-elements/card/CardTitleH2";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";
import ErrorFlashMessage from "@/components/ui-parts/flashMessage/ErrorFlashMessage";
import axios from "axios";
import { useRouter } from "next/navigation";
import { time } from "console";

export default function LoginLayout() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [warningFlashMessage, setWarningFlashMessage] = useState(false);
  const [errorFlashMessage, setErrorFlashMessage] = useState(false);

  const handleLogin = async () => {
    try {
      const requestLogin = { user: { email, password } };
      // ログインリクエストを送信
      const response = await axios.post(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/users/login`, requestLogin, { withCredentials: true });

      if (response.status === 200) {
        // ログインに成功した場合の処理
        setTimeout(() => {
          router.push("/home");
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        // サーバーからのレスポンスが返ってきた場合
        if (error.response.status === 401) {
          // 認証エラー（401）の場合
          setWarningFlashMessage(true);
        } else {
          // その他のエラーの場合
          setErrorFlashMessage(true);
        }
      } else {
        // サーバーからのレスポンスがない場合（ネットワークエラーなど）
        setErrorFlashMessage(true);
      }
      console.error("Login error", error);
    }
  };
  useEffect(() => {
    const checkLogin = async () => {
      try {
        // ログイン状態をチェック
        const response = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/users/check_login`, { withCredentials: true });

        if (response.status === 200) {
          // ログイン済みの場合
          router.push("/home");
        }
      } catch (error) {
        console.error("Check login error", error);
      }
    };
  }, []);

  return (
    <DisplaySplitWrapper className="flex justify-center items-center">
      <CardWrapper className="max-w-sm">
        {warningFlashMessage && <WarningFlashMessage message="ログインに失敗しました" />}
        {errorFlashMessage && <ErrorFlashMessage message="エラーが発生しました" />}
        <CardBodyWrapper>
          <CardTitleH2 title="Safety Kayak Fishing" />
          <InputForm label="Email" type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputForm label="Password" type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <TextLink label="新規登録はこちら" href="/register" />
          <BasicButton label="Sign in" className="mt-4" buttonClassName="btn-primary" onClick={handleLogin} />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
