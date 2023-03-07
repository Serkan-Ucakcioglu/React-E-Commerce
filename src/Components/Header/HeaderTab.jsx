import React from "react";
import { NavLink } from "react-router-dom";

function HeaderTab() {
  return (
    <>
      <div className="py-6 px-5 space-y-6">
        <div className="flex flex-col mb-2">
          <NavLink
            className="text-base mb-2 font-medium text-black hover:text-gray-900 border-2 border-gray-400 rounded"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            to={"/"}
          >
            Home
          </NavLink>
          <div className="text-base mb-2 font-medium text-gray-900 hover:text-gray-700 border-2 border-gray-400 rounded">
            Pricing
          </div>

          <div className="text-base mb-2 font-medium text-gray-900 hover:text-gray-700 border-2 border-gray-400 rounded">
            About
          </div>
        </div>
        <div>
          <NavLink
            to={"/login"}
            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Giriş Yap
          </NavLink>
          <p className="mt-6 text-center text-base font-medium text-gray-500">
            Existing customer?
            <NavLink
              to={"/register"}
              className="text-indigo-600 hover:text-indigo-500 ml-1"
            >
              Register
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
}

export default HeaderTab;
