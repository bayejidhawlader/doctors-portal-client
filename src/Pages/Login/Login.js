import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvicer";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  // sing in with email & password
  const { singIn } = useContext(AuthContext);

  // Login error when wrong email and password
  const [loginError, setLoginError] = useState("");

  // Location
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (data) => {
    console.log(data);
    setLoginError("");
    singIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error.message));
    setLoginError(errors.message);
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className=" shadow-xl border-purple-700 border-2 p-20">
        <h1 className="text-xl text-center">Login </h1>
        <form onSubmit={handleSubmit(handleLogin)}>
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-700" role="alert">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 carecters or Longer",
                },
              })}
              className="input input-bordered w-full max-w-xs"
            />
            {errors.password && (
              <p className="text-red-700" role="alert">
                {errors.password?.message}
              </p>
            )}

            <label className="label">
              <span className="label-text">Forgot Password ?</span>
            </label>
          </div>

          <input
            className="btn btn-accent w-full my-2"
            type="submit"
            value="Login"
          />
          {loginError && <p className="text-red-600">{loginError} why Not?</p>}
        </form>
        <p className="my-2 text-xs">
          New to Doctors Portal ?{" "}
          <Link to="/singup" className="text-primary">
            Create New Account
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full text-base font-normal">
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
