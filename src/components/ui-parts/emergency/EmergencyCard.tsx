import React from "react";

export default function EmergencyCard() {
  return (
    <div className="card w-full bg-base-300 shadow-xl items-center mb-4">
      <h1 className="text-2xl font-bold text-center mt-4 mb-4">緊急連絡先一覧</h1>
      <div className="card-body flex flex-col items-center">
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
        <div className="flex justify-center w-full mt-4">
          <button className="btn btn-primary">緊急連絡先を追加</button>
        </div>
      </div>
    </div>
  );
}
