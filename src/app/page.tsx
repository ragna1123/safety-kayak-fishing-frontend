import Image from "next/image";
import InputForm from "../components/ui-parts/inputs_form";

export default function Login() {
  return (
    // 左側
    <div className="flex flex-col md:flex-row min-h-screen">
      <div className="md:w-1/2 w-full hidden md:flex justify-center items-center">
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
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
      {/* 右側 */}
      <div className="md:w-1/2 w-full flex justify-center items-center">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h2 className="card-title text-center">Kayak Fishing App</h2>
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
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
