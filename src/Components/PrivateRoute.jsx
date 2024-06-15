import React, { useContext, useRef } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const PrivateRoute = () => {
  const { isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();
  const alertShown = useRef(false);

  useEffect(() => {
    if (!isAuthenticated && !alertShown.current) {
      alertShown.current = true;
      alert("You need to be logged in first!");
      navigate("/SwiftCart/login");
    }
  }, [isAuthenticated, navigate]);

  return isAuthenticated ? <Outlet /> : null;
};

export default PrivateRoute;
