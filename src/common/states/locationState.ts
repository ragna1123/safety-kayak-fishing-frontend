import { atom } from "recoil";

export const locationState = atom({
  key: "locationState", // 一意のキーを指定
  default: null, // デフォルト値
});
