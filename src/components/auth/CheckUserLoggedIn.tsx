"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import axios from "axios";

export default function CheckUserLoggedIn() {
  const router = useRouter();

  useEffect(() => {
    const checkUserLoggedIn = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_RAILS_API_URL}/users/check_login`, { withCredentials: true });
        if (res.status !== 200) {
          router.push("/");
          console.log("CheckUserLoggedIn: not logged in");
        }
      } catch (error) {
        console.error(error);
        router.push("/");
        console.log("CheckUserLoggedIn: not logged in:error");
      }
    };

    checkUserLoggedIn();
  }, []);

  return null; // このコンポーネントはUIを持たない
}
