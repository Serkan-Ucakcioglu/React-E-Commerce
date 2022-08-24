import React from "react";
import { logOut } from "../../Store/userAuth";
import { useDispatch } from "react-redux";

function DashBoard() {
  const dispatch = useDispatch();
  const out = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <h1>burası dashboard</h1>
      <button className="btn border-2 border-red-600" onClick={out}>çıkış yap</button>
    </div>
  );
}

export default DashBoard;
