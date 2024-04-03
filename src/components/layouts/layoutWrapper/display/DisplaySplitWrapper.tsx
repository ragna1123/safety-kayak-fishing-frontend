import React, { ReactNode } from "react";

type DisplaySplitWrapperProps = {
  children?: ReactNode;
  className?: string;
};

const DisplaySplitWrapper: React.FC<DisplaySplitWrapperProps> = ({
  children,
  className = "",
}) => {
  return <div className={`md:w-1/2 w-full ${className}`}>{children}</div>;
};

export default DisplaySplitWrapper;
