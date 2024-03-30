import React from "react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div className="md:w-1/2 w-full hidden md:flex justify-center items-center">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <Image
            src="/1D562802-29A2-442D-89E1-2D38D5DB1181_1_105_c.jpeg"
            alt="kayak fishing image"
            width={300}
            height={200}
            className="max-w-sm rounded-md shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Go to Kayak Fishing!</h1>
            <p className="py-6">
              今までにない、カヤックフィッシングの新しい体験をしませんか？
            </p>
            <button className="btn btn-primary">New Create Account !!</button>
          </div>
        </div>
      </div>
    </div>
  );
}
