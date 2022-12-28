import React from "react";
import { NavLink } from "react-router-dom";

function FormHead() {
  return (
    <>
      <div className="flex justify-center">
        <NavLink to={"/"}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxYHtHfZpE0uwrQlNjwA5YBKaTykHPBFaD63RzN3lXLsAvu4vnJLOxiHUNsXeLUPIddE&usqp=CAU"
            alt="ekinoks"
          />
        </NavLink>
      </div>
      <h3 className="text-2xl font-bold text-center">Login to your account</h3>
    </>
  );
}

export default FormHead;
