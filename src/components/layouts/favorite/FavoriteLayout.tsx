import React from "react";
import FavoriteCard from "@/components/ui-parts/trip/favorite/FavoriteCard";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";

export default function FavoriteLayout() {
  return (
    <DisplaySplitWrapper>
      <FavoriteCard />
    </DisplaySplitWrapper>
  );
}
