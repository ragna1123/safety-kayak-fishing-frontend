import React from "react";
import { InputFormType } from "@/common/types/Types";

export default function Input(props: InputFormType) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={`input input-bordered ${props.className}`}
      id={props.id}
      onChange={props.onChange}
    />
  );
}
