import React from "react";
import InputForm from "@/components/ui-parts/InputForm";

export default function RegisterLayout() {
  return (
    <div className="md:w-1/2 w-full flex justify-center items-center">
      <div className="card w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Kayak Fishing App</h2>
          <InputForm
            label="UserName"
            type="text"
            placeholder="UserName"
            id="userName"
          />
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
          <InputForm
            label="PasswordConfirm"
            type="password"
            placeholder="PasswordConfirm"
            id="passwordConfirm"
          />
          <label className="label">
            <a href="/" className="label-text-alt link link-hover">
              ログインはこちら
            </a>
          </label>
          <div className="form-control mt-8">
            <button className="btn btn-primary">Sign up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
