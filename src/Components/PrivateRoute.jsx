import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let user = localStorage.getItem("user") == null ? false : true;

  useEffect(() => {}, [user]);

  if (!user) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default PrivateRoute;
