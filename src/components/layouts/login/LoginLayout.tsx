"use client";
import React, { useState } from "react";
import InputForm from "@/components/ui-parts/from/InputForm";
import TextLink from "@/components/ui-elements/link/TextLink";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../layoutWrapper/card/CardBodyWrapper";
import CardTitleH2 from "@/components/ui-elements/card/CardTitleH2";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LoginLayout() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const requestLogin = { user: { email, password }};
      // ログインリクエストを送信
      await axios.post(
        `${process.env.NEXT_PUBLIC_RAILS_API_URL}/users/login`,
        requestLogin,
        { withCredentials: true }
      ).then((response) => {
        if (response.status === 200) {
          // ログインに成功した場合の処理
        // レスポンスのステータスコードが200(OK)の場合はホームページにリダイレクト
          router.push("/home");
        } else {
          // ログインに失敗した場合の処理
          throw new Error("ログインに失敗しました");
        }
      })
    } catch (error) {
      console.error("Login error", error);
      // エラーハンドリングをここに記述
      router.push("/");
    }
  };

  return (
    <DisplaySplitWrapper className="flex justify-center items-center">
      <CardWrapper className="max-w-sm">
        <CardBodyWrapper>
          <CardTitleH2 title="Safety Kayak Fishing" />
          <InputForm
            label="Email"
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <TextLink label="新規登録はこちら" href="/register" />
          <BasicButton
            label="Sign in"
            className="mt-4"
            buttonClassName="btn-primary"
            onClick={handleLogin}
          />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
