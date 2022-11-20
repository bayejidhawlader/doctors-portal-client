import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvicer";
import useToken from "../../hooks/useToken";

const SingUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);

  // Sing Up error
  const [singUpError, setSingUpError] = useState("");

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  const navigate = useNavigate();

  if (token) {
    navigate("/");
  }

  const handleSingUp = (data) => {
    console.log(data);
    setSingUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Succssfully");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((error) => console.log(error));
      })
      .catch((error) => {
        console.error(error);
        setSingUpError(error.message);
      });
  };

  // 01 const saveUser
  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => setCreatedUserEmail(email));
  };

  // 02 Verify jwt token
  // const getUserToken = (email) => {};

  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className=" shadow-xl border-yellow-500 border-2 p-20">
        <h1 className="text-xl text-center">Sing Up</h1>
        <form onSubmit={handleSubmit(handleSingUp)}>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: "Email is Required",
              })}
              className="input input-bordered w-full"
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "password must be 6 carecter long",
                  pattern: {
                    value: /(?=(.*[A-Z]){2,})/,
                    message: "Password must be Strong",
                  },
                },
              })}
              className="input input-bordered w-full "
            />
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          <input
            className="btn btn-accent w-full my-2 text-white"
            type="submit"
            value="Register"
          />
          {singUpError && <p className="text-red-600">{singUpError}</p>}
        </form>
        <p className="my-2 text-xs">
          Already Have an Account ?
          <Link to="/login" className="text-primary">
            Please Login
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

export default SingUp;
