import { TextareaFormType } from '@/common/types/Types'
import React from 'react'

function Textarea(props:TextareaFormType) {
  return (
    <textarea
    placeholder={props.placeholder}
    className={`textarea input-bordered ${props.className}`}
    id={props.id}
    rows={props.row} // 適切な行数に設定
  ></textarea>
  )
}

export default Textarea