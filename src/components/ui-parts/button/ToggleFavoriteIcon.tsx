import FavoriteIconDisable from "@/components/ui-elements/icon/favorite/FavoriteIconDisable";
import FavoriteIconEnable from "@/components/ui-elements/icon/favorite/FavoriteIconEnable";
import React from "react";

function ToggleFavoriteIcon() {
  return (
    <div className="cursor-pointer">
      {/* クリック時にアイコン切り替え */}
      {/* ロケーションのお気に入り登録機能 */}
      <FavoriteIconDisable />
      {/* <FavoriteIconEnable /> */}
    </div>
  );
}

export default ToggleFavoriteIcon;
