"use client";
import React from "react";
type CardTitleH2Props = {
  title: string;
};

export default function CardTitleH2(props: CardTitleH2Props) {
  return <h2 className="card-title text-center mb-2">{props.title}</h2>;
}
