import React from "react";
import Shop from "../../assets/Shop";

function Shopping({ setShop }) {
  return (
    <div className="flex items-start justify-between">
      <h2 className="text-lg font-medium text-gray-900" id="slide-over-title">
        Shopping cart
      </h2>
      <div className="ml-3 flex h-7 items-center">
        <button
          type="button"
          onClick={() => setShop((prev) => !prev)}
          className="-m-2 p-2 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Close panel</span>
          <Shop />
        </button>
      </div>
    </div>
  );
}

export default Shopping;
