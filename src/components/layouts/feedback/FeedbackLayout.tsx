import React from "react";
import InputForm from "@/components/ui-parts/from/InputForm";
import TextareaForm from "@/components/ui-parts/from/TextareaForm";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function FeedbackLayout() {
  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <div className="text-center p-4">
          <h1 className="text-2xl font-bold mb-2">お問い合わせ</h1>
        </div>
        <CardBodyWrapper>
          <form action="#" className="w-full max-w-md space-y-4">
            <InputForm label="タイトル" type="text" placeholder="タイトルを入力" id="title" value="" onChange={(e) => e.target.value} />
            <TextareaForm label="お問い合わせ内容" row={8} placeholder="内容を入力" id="report" />
            <BasicButton label="送信" className="btn-success" buttonClassName="my-6" />
          </form>
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
