import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export const PublicRoute = ({ component: Component }) => {
  const isAuthenticated = useSelector((state) => !!state.auth.uid);
  return isAuthenticated ? <Navigate to="/dashboard" /> : <Component />;
};

export default PublicRoute;
