'use client';
import React, { useState } from "react";
import Input from "@/components/ui-elements/input/Input";
import { InputFormType } from "@/common/types/Types";

// InputForm コンポーネント
export default function InputForm(props: InputFormType) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <Input
        type={props.type}
        placeholder={props.placeholder}
        id={props.id}
        className={props.className}
        value={props.value} // propsからvalueを受け取る
        onChange={props.onChange} // propsからonChangeを受け取る
      />
    </div>
  );
}

