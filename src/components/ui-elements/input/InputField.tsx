"use client";
import React from "react";
import { DefaultValue } from "recoil";
type InputFieldProps = {
  label: string;
  id: string;
  defaultValue?: string;
  type?: string;
};

export default function InputField(props: InputFieldProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <label htmlFor={props.id} className="font-semibold text-xl">
        {props.label}:
      </label>
      <input type={props.type} id={props.id} value={props.defaultValue} className="input input-bordered" />
    </div>
  );
}
