"use client";
import React from "react";
import Header from "@/components/layouts/header/Header";
import ProfileLayout from "@/components/layouts/profile/ProfileLayout";
import ProfileEditLayout from "@/components/layouts/profile/ProfileEditLayout";

export default function ProfileEdit() {
  return (
    <>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen">
        <ProfileEditLayout />
        <ProfileLayout />
      </div>
    </>
  );
}
