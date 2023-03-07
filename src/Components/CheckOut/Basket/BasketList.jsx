import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectedBasket, selectedCount } from "../../../Features/productSlice";
import BasketProductList from "./BasketProductList";
import BasketTotal from "../BasketTotal";

function BasketList() {
  let basket = useSelector(selectedBasket);
  let count = useSelector(selectedCount);

  return (
    <>
      {count > 0 && (
        <div className="flex shadow-md my-10 res bg-gray-600">
          <div className="w-3/4 bg-neutral-50 00 px-10 py-10 wll">
            <div className="flex justify-between border-b pb-8 wll">
              <h1 className="font-semibold text-2xl">Shopping Cart</h1>
              <h2 className="font-semibold text-2xl">
                {basket.length} {basket.length < 2 ? "Item" : "Items"}
              </h2>
            </div>
            <BasketProductList />
            <NavLink
              to={"/"}
              className="flex font-semibold text-indigo-600 text-sm mt-10"
            >
              Continue Shopping
            </NavLink>
          </div>

          <div
            id="summary"
            className="w-1/4 wll px-8 py-10 justify-between border-l-2 border-white"
          >
            <h1 className="font-semibold s text-white text-2xl border-b pb-8 justify-between">
              Order Summary
            </h1>
            <div className="mt-3 text-white">
              <label className="font-medium inline-block mb-3 text-sm uppercase">
                Shipping
              </label>
              <select className="block p-2 text-gray-600 w-full text-sm">
                <option>Standard shipping - $10.00</option>
              </select>
            </div>
            <div className="py-10">
              <label
                htmlFor="promo"
                className="font-semibold text-white inline-block mb-3 text-sm uppercase"
              >
                Promo Code
              </label>
              <input
                type="text"
                id="promo"
                placeholder="Enter your code"
                className="p-2 text-sm w-full rounded"
              />
            </div>
            <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded">
              Apply
            </button>
            <BasketTotal />
          </div>
        </div>
      )}
    </>
  );
}

export default BasketList;
