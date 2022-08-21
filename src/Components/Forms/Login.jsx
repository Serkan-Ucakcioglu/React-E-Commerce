import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <div className="container">
      <div className="flex items-center justify-center min-h-screen">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <div className="flex justify-center">
            <NavLink to={"/"}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoxYHtHfZpE0uwrQlNjwA5YBKaTykHPBFaD63RzN3lXLsAvu4vnJLOxiHUNsXeLUPIddE&usqp=CAU"
                alt="ekinoks"
              />
            </NavLink>
          </div>
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          <form>
            <div className="mt-4">
              <div>
                <label className="block" for="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
                <span className="text-xs tracking-wide text-red-600">
                  Email field is required{" "}
                </span>
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                  Login
                </button>
                <NavLink
                  to={"/register"}
                  className="inline-block px-6 py-2 border-2 border-red-600 text-red-600 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  activeClassName="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"                
                >
                  Register
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
