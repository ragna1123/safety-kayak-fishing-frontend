"use client";
import React from "react";
import Textarea from "@/components/ui-elements/input/Textarea";
import { TextareaFormType } from "@/common/types/Types";

const TextareaForm: React.FC<TextareaFormType> = (props) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">{props.label}</span>
      </label>
      <Textarea placeholder={props.placeholder} id={props.id} row={props.row} className={props.className} onChange={props.onChange} />
    </div>
  );
};

export default TextareaForm;
