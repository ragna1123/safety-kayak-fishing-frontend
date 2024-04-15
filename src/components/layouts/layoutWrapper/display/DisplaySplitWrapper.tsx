// DisplaySplitWrapper.tsx
"use client";
import React, { ReactNode } from "react";

type DisplaySplitWrapperProps = {
  children?: ReactNode;
  className?: string;
  leftPosition?: boolean; // 追加：固定するかどうかのフラグ
};

const DisplaySplitWrapper: React.FC<DisplaySplitWrapperProps> = ({
  children,
  className = "",
  leftPosition = false, // 追加：デフォルトは false
}) => {
  // 固定されたコンポーネントのスタイルを適用
  const fixedStyle = leftPosition ? "left-0" : "right-0 overflow-y-scroll";
  return <div className={`fixed top-0 pt-16 h-full md:w-1/2 w-full ${fixedStyle} ${className}`}>{children}</div>;
};

export default DisplaySplitWrapper;
