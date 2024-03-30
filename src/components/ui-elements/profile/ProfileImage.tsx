import React from "react";
import Image from "next/image";
import { ProfileType } from "@/common/types/Types";

export default function ProfileImage(props: ProfileType) {
  return (
    <div className="w-10 rounded-full">
      <Image
        src={props.imagePath}
        alt="Tailwind CSS Navbar component"
        width={40}
        height={40}
      />
    </div>
  );
}
