"use client";
import React, { useState } from "react";
import InputForm from "@/components/ui-parts/from/InputForm";
import TextareaForm from "@/components/ui-parts/from/TextareaForm";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import BasicButton from "@/components/ui-elements/button/BasicButton";
import axios from "axios";
import ErrorFlashMessage from "@/components/ui-parts/flashMessage/ErrorFlashMessage";
import { useRouter } from "next/navigation";
import SuccessFlashMessage from "@/components/ui-parts/flashMessage/SuccessFlashMessage";

export default function FeedbackLayout() {
  const router = useRouter();

  // フィードバックの状態管理
  const [title, setTitle] = useState("");
  const [feedbackDetails, setFeedbackDetails] = useState("");
  const [errorFlashMessage, setErrorFlashMessage] = useState(false);
  const [successFlashMessage, setSuccessFlashMessage] = useState(false);

  // フォーム送信処理
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_RAILS_API_URL}/feedbacks`,
        {
          feedback: {
            title: title,
            comment: feedbackDetails,
          },
        },
        { withCredentials: true }
      );
      if (res.status === 201) {
        setSuccessFlashMessage(true);
        setTitle(""); // タイトルリセット
        setFeedbackDetails(""); // フィードバック内容リセット

        // 2秒後にページ遷移
        setTimeout(() => {
          router.push("/home");
        }, 1500);
      }
    } catch (error) {
      setErrorFlashMessage(true);
      console.error("Failed to send feedback:", error);
    }
  };

  return (
    <DisplaySplitWrapper>
      <CardWrapper className="flex justify-center">
        {errorFlashMessage && <ErrorFlashMessage message="送信に失敗しました" />}
        {successFlashMessage && <SuccessFlashMessage message="お問い合わせありがとうございます" />}

        <div className="text-center p-4">
          <h1 className="text-3xl font-bold mt-8 mb-2">お問い合わせ</h1>
        </div>
        <CardBodyWrapper>
          <form onSubmit={handleSubmit}>
            {/* タイトルの入力 */}
            <InputForm label="タイトル" type="text" placeholder="タイトルを入力" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            {/* お問い合わせ内容の入力 */}
            <TextareaForm label="お問い合わせ内容" row={8} placeholder="内容を入力" id="report" value={feedbackDetails} onChange={(e) => setFeedbackDetails(e.target.value)} />
            {/* 送信ボタン */}
            <BasicButton label="送信" className="btn-success" buttonClassName="my-6" />
          </form>
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
