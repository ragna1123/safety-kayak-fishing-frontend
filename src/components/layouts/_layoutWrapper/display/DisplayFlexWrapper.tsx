"use client";
import React from "react";

export default function DisplayFlexWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <div className="flex flex-col md:flex-row min-h-screen">{children}</div>;
    </>
  );
}
