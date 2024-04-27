"use client";
import React from "react";

type BasicButtonProps = {
  label: string;
  className?: string;
  buttonClassName?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export default function BasicButton(props: BasicButtonProps) {
  return (
    <div className={`form-control ${props.className}`}>
      <button className={`btn ${props.buttonClassName} text-zinc-700`} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
}
