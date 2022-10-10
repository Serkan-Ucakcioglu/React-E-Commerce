import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { remove, updateQuantity } from "../../Store/productSlice";
import { addBasket } from "../../Store/productSlice";

function CheckOut() {
  let basket = useSelector((state) => state.productSlice.basket);
  let count = useSelector((state) => state.productSlice.count);
  const dispatch = useDispatch();

  const removeBasket = (product) => {
    dispatch(remove(product));
  };
  const quantity = (product) => {
    dispatch(addBasket(product));
  };

  const decrement = (product) => {
    dispatch(updateQuantity(product));
  };

  const baskets = count > 0 && (
    <div className="flex shadow-md my-10 res bg-gray-600">
      <div className="w-3/4 bg-neutral-50 00 px-10 py-10 wll">
        <div className="flex justify-between border-b pb-8 wll">
          <h1 className="font-semibold text-2xl">Shopping Cart</h1>
          <h2 className="font-semibold text-2xl">
            {basket.length} {basket.length < 2 ? "Item" : "Items"}
          </h2>
        </div>

        {basket.map((product) => {
          return (
            <div
              className="flex items-center justify-around hover:bg-gray-100 -mx-8 px-6 py-5"
              key={product.id}
            >
              <div className="flex w-2/5 mt-2 spce">
                <div className="w-20">
                  <NavLink to={`/detail/${product.id}`}>
                    <img
                      className="h-24 object-scale-down"
                      src={product.image}
                      alt={product.title}
                    />
                  </NavLink>
                </div>
                <div className="flex flex-col justify-center ml-4 mt-2 flex-grow">
                  <span className="text-sm">
                    <strong>{product.title}</strong>
                  </span>
                  <button
                    onClick={() => removeBasket(product)}
                    className="font-semibold hover:text-red-500 text-red-500 text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="flex justify-center w-1/5 wll mr-2">
                <svg
                  className="fill-current text-gray-600 w-3 cursor-pointer"
                  viewBox="0 0 448 512"
                  onClick={() => decrement(product)}
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>

                <input
                  className="mx-2 border text-center w-8"
                  type="text"
                  value={product.quantity}
                />

                <svg
                  className="fill-current text-gray-600 w-3 cursor-pointer"
                  viewBox="0 0 448 512"
                  onClick={() => quantity(product)}
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>
              <span className="text-center w-1/5 font-semibold text-sm mls-2">
                ${product.quantity * product.price}
              </span>
            </div>
          );
        })}

        <NavLink
          to={"/"}
          className="flex font-semibold text-indigo-600 text-sm mt-10"
        >
          <svg
            className="fill-current mr-2 text-indigo-600 w-4"
            viewBox="0 0 448 512"
          >
            <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
          </svg>
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
        <div className="border-t mt-8">
          <div className="flex font-semibold text-white justify-between py-6 text-sm uppercase">
            <span>Total cost</span>
            <span>
              $
              {basket.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              ) + 10.0}
            </span>
          </div>
          <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto mt-10">
      {count === 0 && (
        <h1 className="text-red text-xl flex mt-8 justify-center items-center">
          Sepetiniz Boş.
        </h1>
      )}
      {baskets}
    </div>
  );
}

export default CheckOut;
