"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BlockLoginForAuthenticated() {
  const router = useRouter();

  useEffect(() => {
    const blockLoginForAuthenticated = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/users/check_login`, { withCredentials: true });
        if (res.status === 200) {
          console.log("You are already logged in.");
          // ログイン済みならホームにリダイレクト
          // router.push("/home");
        }
      } catch (error) {
        console.error(error);
        console.log("not logged in");
      }
    };

    blockLoginForAuthenticated();
  }, []);

  return <></>; // このコンポーネントはUIを持たない
}
