import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "./../components/Header";

export const PrivateRoute = ({ component: Component }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.uid);
  return isAuthenticated ? (
    <div>
      <Header />
      <Component />
    </div>
  ) : (
    <Navigate to="/" />
  );
};

export default PrivateRoute;
