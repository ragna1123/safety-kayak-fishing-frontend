import React from "react";
import InputForm from "@/components/ui-parts/from/InputForm";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../layoutWrapper/card/CardBody";
import TextLink from "@/components/ui-elements/link/TextLink";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import CardTitleH2 from "@/components/ui-elements/card/CardTitleH2";

export default function RegisterLayout() {
  return (
    <DisplaySplitWrapper className="flex justify-center items-center">
      <CardWrapper className="max-w-sm">
        <CardBodyWrapper>
          <CardTitleH2 title="Safety Kayak Fishing" />
          <InputForm
            label="UserName"
            type="text"
            placeholder="UserName"
            id="userName"
          />
          <InputForm
            label="Email"
            type="email"
            placeholder="Email"
            id="email"
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="Password"
            id="password"
          />
          <InputForm
            label="PasswordConfirm"
            type="password"
            placeholder="PasswordConfirm"
            id="passwordConfirm"
          />
          <TextLink label="ログインはこちら" href="/" />
          <BasicButton
            label="Sign up"
            className="mt-4"
            buttonClassName="btn-primary"
          />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
