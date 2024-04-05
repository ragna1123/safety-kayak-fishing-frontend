import React from "react";

export default function CardBodyWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="card-body">{children}</div>;
}
