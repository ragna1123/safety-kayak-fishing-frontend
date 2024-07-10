import React from "react";
import { TextareaFormType } from "@/common/types/Types";

const Textarea: React.FC<TextareaFormType> = (props) => {
  return (
    <textarea
      placeholder={props.placeholder}
      className={`textarea input-bordered ${props.className}`}
      id={props.id}
      rows={props.row} // 適切な行数に設定
      onChange={props.onChange}
    ></textarea>
  );
};

export default Textarea;
