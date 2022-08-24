import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
function PrivateRoute({ children }) {
  const { isSuccess } = useSelector((state) => state.userAuth);

  if (!isSuccess) {
    return <Navigate to={"/err"} />;
  }
  return children;
}

export default PrivateRoute;
