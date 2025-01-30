import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const token = localStorage.getItem("token"); // Check token for authentication

  if (!token) {
    // Store the message in localStorage
    localStorage.setItem(
      "authMessage",
      "You need to log in to access this page."
    );

    // Redirect to login if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PrivateRoutes;
