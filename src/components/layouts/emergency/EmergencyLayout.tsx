import React from "react";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../layoutWrapper/card/CardBodyWrapper";
import BasicButton from "@/components/ui-elements/button/BasicButton";

export default function EmergencyLayout() {
  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <h1 className="text-2xl font-bold text-center mt-4 mb-4">
          緊急連絡先一覧
        </h1>

        <CardBodyWrapper>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>名前</th>
                  <th>関係</th>
                  <th>メールアドレス</th>
                </tr>
              </thead>
              <tbody>
                {/* 緊急連絡先の各行を追加 */}
                <tr>
                  <td>山田太郎</td>
                  <td>父</td>
                  <td>taro.yamada@example.com</td>
                </tr>
                <tr>
                  <td>鈴木花子</td>
                  <td>母</td>
                  <td>hanako.suzuki@example.com</td>
                </tr>
                {/* 他の連絡先を追加 */}
              </tbody>
            </table>
          </div>
          <BasicButton label="緊急連絡先を追加" className="btn-primary my-8" />
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
