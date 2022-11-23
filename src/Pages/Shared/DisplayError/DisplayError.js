import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvicer";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <p className="text-red-500">Something Went Wrong</p>
      <p className="text-red-400">{error.ststusText || error.message}</p>
      <h4 className="text-3xl">
        Please <button onClick={handleLogOut}>Sing Out</button> and log Back in
      </h4>
    </div>
  );
};

export default DisplayError;
