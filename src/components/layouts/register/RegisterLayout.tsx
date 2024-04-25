"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import InputForm from "@/components/ui-parts/from/InputForm";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import TextLink from "@/components/ui-elements/link/TextLink";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import CardTitleH2 from "@/components/ui-elements/card/CardTitleH2";
import WarningFlashMessage from "@/components/ui-parts/flashMessage/WarningFlashMessage";

export default function RegisterLayout() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const [flashMessage, setFlashMessage] = useState(false);
  const handleRegister = async () => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/users`, {
        user: {
          username,
          email,
          password,
          password_confirmation: passwordConfirm,
        },
      });
      if (response.status === 201) {
        router.push("/");
      }
    } catch (error) {
      console.error("Register error", error);
      setFlashMessage(true);
    }
  };
  return (
    <DisplaySplitWrapper className="flex justify-center items-center">
      <CardWrapper className="max-w-sm">
        {flashMessage && <WarningFlashMessage message="ユーザー登録に失敗しました" />}
        <CardBodyWrapper>
          <CardTitleH2 title="Safety Kayak Fishing" />
          <InputForm label="UserName" type="text" placeholder="UserName" id="userName" value={username} onChange={(e) => setUsername(e.target.value)} />
          <InputForm label="Email" type="email" placeholder="Email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <InputForm label="Password" type="password" placeholder="Password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <InputForm label="PasswordConfirm" type="password" placeholder="PasswordConfirm" id="passwordConfirm" value={passwordConfirm} onChange={(e) => setPasswordConfirm(e.target.value)} />
          <TextLink label="ログインはこちら" href="/" />
          <BasicButton label="Sign up" className="mt-4" buttonClassName="btn-primary" onClick={handleRegister} />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
