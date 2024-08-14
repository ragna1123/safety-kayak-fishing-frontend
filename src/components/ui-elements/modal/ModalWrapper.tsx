"use client";
import React from "react";

type ModalWrapperProps = {
  element_id: string;
  title: string;
  children?: React.ReactNode;
};

export default function ModalWrapper(props: ModalWrapperProps) {
  const { element_id, title, children } = props;
  return (
    <>
      <button className="btn-success btn" onClick={() => document.getElementById(element_id).showModal()}>
        {title}
      </button>
      <dialog id={element_id} className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            {children}
          </form>
        </div>
      </dialog>
    </>
  );
}
