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
      <button className={`btn ${props.buttonClassName}`} onClick={props.onClick}>
        {props.label}
      </button>
    </div>
  );
}
