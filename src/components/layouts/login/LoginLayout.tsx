import React from "react";
import InputForm from "@/components/ui-parts/InputForm";

export default function LoginLayout() {
  return (
    <div className="md:w-1/2 w-full flex justify-center items-center">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-center mb-2">Safety Kayak Fishing</h2>
          <InputForm
            label="Email"
            type="email"
            placeholder="Email"
            id="email"
          />
          <InputForm
            label="Password"
            type="password"
            placeholder="Password"
            id="password"
          />
          <label className="label">
            <a href="/register" className="label-text-alt link link-hover">
              新規登録はこちら
            </a>
          </label>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
}
