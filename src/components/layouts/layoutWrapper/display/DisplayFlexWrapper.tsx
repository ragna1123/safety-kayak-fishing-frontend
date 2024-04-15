"use client";
import React from "react";
import { RecoilRoot } from "recoil";

export default function DisplayFlexWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <RecoilRoot>
        <div className="flex flex-col md:flex-row min-h-screen">{children}</div>;
      </RecoilRoot>
    </>
  );
}
