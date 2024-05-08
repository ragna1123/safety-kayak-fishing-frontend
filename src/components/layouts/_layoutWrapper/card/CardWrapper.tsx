import React, { ReactNode } from "react";

type CardWrapperProps = {
  children?: ReactNode;
  className?: string;
};

const CardWrapper: React.FC<CardWrapperProps> = ({ children, className = "" }) => {
  return <div className={`card w-full shadow-2xl bg-base-100 ${className}`}>{children}</div>;
};

export default CardWrapper;
