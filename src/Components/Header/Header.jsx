import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <span className="sr-only">Workflow</span>
            <NavLink
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
            </NavLink>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>

              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
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

            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Pricing{" "}
            </a>
            <a
              href="#"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Docs{" "}
            </a>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <a
              href="#"
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              {" "}
              Sign in{" "}
            </a>
            <a
              href="#"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              {" "}
              Sign up{" "}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <img
                  className="h-8 w-auto"
                  src="data:image/png;base64,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"
                  alt="ekinoks"
                />
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>

                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6"></div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div className="flex flex-col mb-2">
              <NavLink
                className="text-base font-medium text-gray-500 hover:text-gray-900"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                to={"/"}
              >
                Home
              </NavLink>
              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {" "}
                Pricing{" "}
              </a>

              <a
                href="#"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                {" "}
                Docs{" "}
              </a>
            </div>
            <div>
              <a
                href="#"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                {" "}
                Sign up{" "}
              </a>
              <p className="mt-6 text-center text-base font-medium text-gray-500">
                Existing customer?
                <a href="#" className="text-indigo-600 hover:text-indigo-500">
                  {" "}
                  Sign in{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
