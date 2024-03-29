import React from "react";
import Load from "../assets/Load";

function Loading() {
  return (
    <div
      className="container bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full"
      role="alert"
    >
      <Load />
      ...LOADİNG
    </div>
  );
}

export default Loading;
