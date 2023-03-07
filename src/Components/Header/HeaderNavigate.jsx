import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

function HeaderNavigate({ user }) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Workflow</span>
            <Link
              className="text-base font-medium text-gray-500 hover:text-gray-900"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              to={"/"}
            >
              <img
                className="h-11 w-auto sm:h-10"
                src="https://www.ekinokssoftware.com/common/slider_image/logo-mid.png"
                alt="Ekinoks"
              />
            </Link>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <NavLink
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                to={"/"}
              >
                Home
              </NavLink>
            </div>

            <div className="text-base font-medium text-gray-500 hover:text-gray-900">
              Pricing{" "}
            </div>
            <div className="text-base font-medium text-gray-500 hover:text-gray-900">
              Docs{" "}
            </div>
          </nav>
          <div className="md:flex items-center ml-4 md:flex-1 lg:w-0">
            <NavLink
              to={"/login"}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {!user ? "login" : "dashboard"}
            </NavLink>
          </div>
          <div className="basket">
            <Basket />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeaderNavigate;
