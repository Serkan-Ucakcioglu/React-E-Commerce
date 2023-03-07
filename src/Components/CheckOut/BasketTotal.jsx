import React from "react";
import { useSelector } from "react-redux";
import { selectedBasket } from "../../Features/productSlice";

function BasketTotal() {
  const basket = useSelector(selectedBasket);
  return (
    <>
      <div className="border-t mt-8">
        <div className="flex font-semibold text-white justify-between py-6 text-sm uppercase">
          <span>Total cost</span>
          <span>
            $
            {Math.floor(
              basket.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              ) + 10.0
            )}
          </span>
        </div>
        <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded">
          Checkout
        </button>
      </div>
    </>
  );
}

export default BasketTotal;
