import React from "react";
import Image from "next/image";
import DisplaySplitWrapper from "../layoutWrapper/display/DisplaySplitWrapper";

export default function HeroSection() {
  return (
    <DisplaySplitWrapper className="justify-center items-center pt-0" leftPosition={true}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image src="/1D562802-29A2-442D-89E1-2D38D5DB1181_1_105_c.jpeg" alt="kayak fishing image" width={300} height={200} className="max-w-sm rounded-md shadow-2xl" />
          <div>
            <h1 className="text-4xl font-bold">Go to Kayak Fishing !!</h1>
            <p className="py-6">今までにない、カヤックフィッシングの新しい体験をしませんか？</p>
            <a className="btn btn-primary" href="/register">
              New Create Account
            </a>
          </div>
        </div>
      </div>
    </DisplaySplitWrapper>
  );
}
