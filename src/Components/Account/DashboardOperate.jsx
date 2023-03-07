import React from "react";
import { NavLink } from "react-router-dom";
import Edit from "../../assets/Edit";
import Add from "../../assets/Add";
import Home from "../../assets/Home";

function DashboardOperate({ out }) {
  return (
    <>
      <li>
        <NavLink
          to={"/"}
          className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
        >
          <Home />
          <span className="ml-3">Home Page</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/account/add-product"}
          className="flex items-center justify-start p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
        >
          <Add />
          <span className="flex ml-3 whitespace-nowrap">Add Product</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/account/edit-product"}
          className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
        >
          <Edit />
          <span className="flex ml-3 whitespace-nowrap">Edit</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/account/delete-product"}
          className="flex items-center p-2 text-base font-normal text-white rounded-lg dark:text-white hover:bg-gray-100 hover:text-black dark:hover:bg-gray-700"
        >
          <div>🗑️</div>
          <span className="flex ml-3 whitespace-nowrap">Delete</span>
        </NavLink>
      </li>
      <li className="mt-4">
        <button
          type="button"
          onClick={out}
          className="text-white  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Log Out
        </button>
      </li>
    </>
  );
}

export default DashboardOperate;
