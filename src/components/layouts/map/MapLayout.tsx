import React from "react";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";

export default function MapLayout() {
  return (
    <DisplaySplitWrapper className="flex justify-center items-center">
      {/* ここにGoogleマップを領域展開 */}
      <h1>map</h1>
    </DisplaySplitWrapper>
  );
}
