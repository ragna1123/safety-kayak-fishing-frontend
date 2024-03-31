import InputForm from "@/components/ui-parts/input/InputForm"
import TextareaForm from "@/components/ui-parts/input/TextareaForm"
import React from "react";

export default function FeedbackCard() {
  return (
      <div className="card w-full bg-base-300 shadow-xl mb-4">
        <div className="text-center p-4">
          <h1 className="text-2xl font-bold mb-2">お問い合わせ</h1>
        </div>
        <div className="card-body">
          <form action="#" className="space-y-6">
            <InputForm
              label="タイトル"
              type="text"
              placeholder="タイトルを入力"
              id="title"
            />
            <TextareaForm label="お問い合わせ内容" row={8} placeholder="内容を入力" id="report" />
            <div className="flex justify-center">
              <button className="btn btn-primary text-lg px-10 py-3">お問い合わせ送信</button>
            </div>
          </form>
        </div>
      </div>
  );
}