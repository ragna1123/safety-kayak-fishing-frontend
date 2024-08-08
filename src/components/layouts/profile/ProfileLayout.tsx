import { useEffect, useState } from "react";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";
import CardWrapper from "../_layoutWrapper/card/CardWrapper";
import CardBodyWrapper from "../_layoutWrapper/card/CardBodyWrapper";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function ProfileLayout() {
  const router = useRouter();
  const [profile, setProfile] = useState([]);
  const fetchProfile = async () => {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/users`, { withCredentials: true });
    const profile = res.data.user;
    if (profile) {
      setProfile(profile);
    } else {
      // プロフィールが見つからない場合の処理
      console.log("ユーザー情報が見つかりません");
      router.push("/");
    }
  };
  useEffect(() => {
    fetchProfile();
  }, []);

  const handleProfileEdit = () => {
    router.push("/profile/edit");
  };

  return (
    <DisplaySplitWrapper>
      <CardWrapper>
        <h1 className="text-3xl font-bold text-center mt-4 mb-6">マイページ</h1>
        <CardBodyWrapper>
          <div className="w-full max-w-md space-y-4">
            <div>
              <h2 className="font-bold">氏名</h2>
              <p>{profile.username}</p>
            </div>
            <div>
              <h2 className="font-bold">メールアドレス</h2>
              <p>{profile.email}</p>
            </div>
          </div>
          <div className="form-control mt-8">
            <button className="btn btn-primary" onClick={handleProfileEdit}>
              編集
            </button>
          </div>
        </CardBodyWrapper>
      </CardWrapper>
    </DisplaySplitWrapper>
  );
}
