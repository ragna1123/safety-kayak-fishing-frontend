import React from "react";
import InputForm from "@/components/ui-parts/from/InputForm";
import TextLink from "@/components/ui-elements/link/TextLink";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../layoutWrapper/card/CardBody";
import CardTitleH2 from "@/components/ui-elements/card/CardTitleH2";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function LoginLayout() {
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
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="Password"
            id="password"
          />
          <TextLink label="新規登録はこちら" href="/register" />
          <BasicButton
            label="Sign in"
            className="mt-4"
            buttonClassName="btn-primary"
          />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
