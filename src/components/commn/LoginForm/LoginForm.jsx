import Image from "next/image";
import { useState } from "react";

const LoginForm = () => {
  const [register, setRegister] = useState("login");
  return (
    <div className="flex">
      <div className="w-full">
        <Image
          width={1000}
          height={1000}
          className="rounded-xl"
          src="https://images.pexels.com/photos/3987020/pexels-photo-3987020.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="login photo"
        />
      </div>
      <div className="w-full">
        {register === "login" ? (
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        ) : (
          <form className="card-body ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        )}
        <p className=" text-slate-700 ml-10">
          New to House🏠Hub?{" "}
          {/* <Link href="/register" className="text-blue-600 font-semibold">
            Register
          </Link>{" "} */}
          {register === "login" ? (
            <span
              className="cursor-pointer font-semibold text-green-600"
              onClick={() => setRegister("register")}
            >
              Register
            </span>
          ) : (
            <span
              className="cursor-pointer font-semibold text-green-600"
              onClick={() => setRegister("login")}
            >
              Login
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
