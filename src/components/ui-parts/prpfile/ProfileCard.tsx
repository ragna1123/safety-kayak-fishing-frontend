import React from 'react';

export default function ProfileCard() {
  // 仮のプロファイルデータ
  const profile = {
    name: '山田太郎',
    relationship: 'エンジニア',
    email: 'taro.yamada@example.com',
  };

  return (
    <div className="card w-full bg-base-300 shadow-xl mb-4">
      <h1 className="text-3xl font-bold text-center mt-4 mb-6">マイページ</h1>
      <div className="card-body flex flex-col items-center px-4">
        <div className="w-full max-w-md space-y-4">
          <div>
            <h2 className="font-bold">氏名</h2>
            <p>{profile.name}</p>
          </div>
          <div>
            <h2 className="font-bold">関係</h2>
            <p>{profile.relationship}</p>
          </div>
          <div>
            <h2 className="font-bold">メールアドレス</h2>
            <p>{profile.email}</p>
          </div>
        </div>
        <div className="form-control mt-8">
            <button className="btn btn-primary">編集</button>
          </div>
      </div>
    </div>
  );
}
