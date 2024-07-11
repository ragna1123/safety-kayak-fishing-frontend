"use client";
import React from "react";
type TextLinkProps = {
  label: string;
  href: string;
};

export default function TextLink(props: TextLinkProps) {
  return (
    <label className="label">
      <a href={props.href} className="label-text-alt link link-hover">
        {props.label}
      </a>
    </label>
  );
}
