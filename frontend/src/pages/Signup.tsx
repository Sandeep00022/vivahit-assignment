import React from "react";
import OAuth from "../components/Oauth.tsx";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Signup = () => {
  const { currentUser } = useSelector((state) => state.user);

  if (currentUser) {
    <Navigate to="/" />;
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <OAuth />
    </div>
  );
};

export default Signup;
