"use server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";


export async function GetCookie() {
  const cookie = cookies().get("jwt")
  // if (!cookie) {
  //   redirect("/");
  // }
  console.log("cookie", cookie);
  return cookie;
}

export async function DeleteCookie() {
  cookies().delete("jwt")
  redirect("/")
}
