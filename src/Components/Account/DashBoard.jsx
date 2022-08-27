import React from "react";
import { logOut } from "../../Store/userAuth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const out = () => {
    dispatch(logOut());
    navigate("/login");
  };

  return (
    <div>
      <h1>burası dashboard</h1>
      <button className="btn border-2 border-red-600" onClick={out}>
        çıkış yap
      </button>
    </div>
  );
}

export default DashBoard;
