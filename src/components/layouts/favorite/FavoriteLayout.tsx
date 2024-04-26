"use client";
import React from "react";
import FavoriteCard from "@/components/ui-parts/card/FavoriteCard";
import DisplaySplitWrapper from "../_layoutWrapper/display/DisplaySplitWrapper";

export default function FavoriteLayout() {
  return (
    <DisplaySplitWrapper>
      <FavoriteCard />
    </DisplaySplitWrapper>
  );
}
