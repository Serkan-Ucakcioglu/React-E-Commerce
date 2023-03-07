import React from "react";
import { NavLink } from "react-router-dom";

function Total({ basket, setShop, shop }) {
  const total = basket.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  return (
    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Total Price:</p>
        <strong>${total}</strong>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">
        Shipping and taxes calculated at checkout.
      </p>
      <div className="mt-6">
        <NavLink
          to={"/checkout"}
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </NavLink>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or
          <NavLink
            to={"/"}
            onClick={() => setShop(!shop)}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </NavLink>
        </p>
      </div>
    </div>
  );
}

export default Total;
