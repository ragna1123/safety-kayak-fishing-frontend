import InputForm from "@/components/ui-parts/input/InputForm"
import TextareaForm from "@/components/ui-parts/input/TextareaForm"
import React from "react";

export default function GoingTripLayout() {
  return (
    <div className="md:w-1/2 w-full flex justify-center">
      <div className="card w-full bg-base-300 shadow-xl mb-4">
        <div className="text-center p-4">
          <h1 className="text-2xl font-bold mb-2">帰投報告</h1>
          <p className="text-lg my-4">出船時間: 6:00 - 13:00</p>
          <h2 className="text-2xl font-bold">地点名</h2>
        </div>
        <h2 className="text-xl font-bold text-center mt-2">地点名詳細</h2>
        <div className="card-body">
          <form action="#" className="space-y-6">
            <InputForm
              label="タイトル"
              type="text"
              placeholder="タイトルを入力"
              id="title"
            />
            <TextareaForm label="報告内容" row={8} placeholder="報告内容を入力" id="report" />
            <div className="flex justify-center">
              <button className="btn btn-primary text-lg px-10 py-3">報告登録</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
