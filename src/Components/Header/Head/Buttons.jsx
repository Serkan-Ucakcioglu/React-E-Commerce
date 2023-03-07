import React from "react";

function Buttons({ show, setShow }) {
  return (
    <>
      {show ? (
        <button
          type="button"
          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
            onClick={() => setShow(!show)}
          >
            se
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (
        <button
          type="button"
          className="bg-black-100 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          aria-expanded="false"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 100 80"
            width="40"
            height="40"
            onClick={() => setShow(!show)}
          >
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </button>
      )}
    </>
  );
}

export default Buttons;
