// Header コンポーネント
"use client";
import React from "react";
import ProfileImage from "@/components/ui-elements/profile/ProfileImage";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const logoutHandler = () => {
    try {
      // ログアウト処理
      // cookie の削除をAPIで行う
      axios.delete(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/users/logout`, {
        withCredentials: true,
      });
      router.push("/");
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <div className="navbar bg-base-200 fixed top-0 left-0 w-full z-50">
      {" "}
      {/* ここに変更: `fixed`, `w-full`, `z-50` を追加 */}
      <div className="flex-1">
        <a className="btn btn-ghost text-xl" href="/home">
          Safety Kayak Fishing
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <ProfileImage imagePath={"/1D562802-29A2-442D-89E1-2D38D5DB1181_1_105_c.jpeg"} />
          </div>
          <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <a href="/profile">Profile</a>
            </li>
            <li>
              <a href="/emergency">Emergency</a>
            </li>
            <li>
              <a href="/trip/history">History</a>
            </li>
            <li>
              <div onClick={logoutHandler} className="text-rose-700">
                Logout
              </div>
            </li>
            <li>
              <a href="/feedback">Feedback</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
