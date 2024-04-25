import InputForm from "@/components/ui-parts/from/InputForm";
import TextareaForm from "@/components/ui-parts/from/TextareaForm";
import React from "react";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function GoingTripLayout() {
  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <div className="text-center p-4">
          <h1 className="text-3xl font-bold mb-6">帰投報告</h1>
          <p className="text-lg my-4">出船時間: 6:00 - 13:00</p>
          <h2 className="text-2xl font-bold">地点名</h2>
        </div>
        <h2 className="text-xl font-bold text-center mt-2">地点名詳細</h2>
        <div className="card-body">
          <form action="#" className="space-y-6">
            <InputForm label="タイトル" type="text" placeholder="タイトルを入力" id="title" value="" onChange={(e) => e.target.value} />
            <TextareaForm label="報告内容" row={8} placeholder="報告内容を入力" id="report" />
            <BasicButton label="帰投報告" className="btn-success m-8" />
          </form>
        </div>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
