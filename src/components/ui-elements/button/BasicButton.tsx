import React from "react";

type BasicButtonProps = {
  label: string;
  className?: string;
  buttonClassName?: string;
};

export default function BasicButton(props: BasicButtonProps) {
  return (
    <div className={`form-control ${props.className}`}>
      <button className={`btn ${props.buttonClassName}`}>{props.label}</button>
    </div>
  );
}
