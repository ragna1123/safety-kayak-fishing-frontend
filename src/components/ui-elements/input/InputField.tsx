"use client";
import React from "react";
type InputFieldProps = {
  label: string;
  id: string;
  type?: string;
};

export default function InputField(props: InputFieldProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <label htmlFor={props.id} className="font-semibold text-xl">
        {props.label}:
      </label>
      <input type={props.type} id={props.id} className="input input-bordered" />
    </div>
  );
}
