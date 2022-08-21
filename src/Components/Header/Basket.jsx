import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../../Store/productSlice";
import { NavLink } from "react-router-dom";

function Basket() {
  let [shop, setShop] = useState(false);
  let basket = useSelector((state) => state.productSlice.basket);
  let count = useSelector((state) => state.productSlice.count);
  const dispatch = useDispatch();

  const removeBasket = (product) => {
    dispatch(remove(product));
  };

  return (
    <div className="container">
      <div
        className="w-1/5 h-3 flex items-center cursor-pointer"
        onClick={() => setShop((shop = !shop))}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSScOc9jICGGssMug0jWrOgeoFX6K78kLtw&usqp=CAU"
          alt=""
        />
        {count > 0 && (
          <div className="w-4">
            <strong className="bg-gray-600 rounded-full w-5 px-2 text-white">
              {" "}
              {count}
            </strong>
          </div>
        )}
      </div>

      {shop && (
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md mi mt-24">
                  <div className="flex h-2/3 flex-col overflow-auto bg-white shadow-xl rounded-md">
                    <div className="flex-1 overflow-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <h2
                          className="text-lg font-medium text-gray-900"
                          id="slide-over-title"
                        >
                          Shopping cart
                        </h2>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                          >
                            <span className="sr-only">Close panel</span>

                            <svg
                              className="h-6 w-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="2"
                              stroke="currentColor"
                              aria-hidden="true"
                              onClick={() => setShop(!shop)}
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
                      {basket.map((product) => {
                        return (
                          <div className="mt-8">
                            <div className="flow-root">
                              <ul
                                role="list"
                                className="-my-6 divide-y divide-gray-200"
                              >
                                <li className="flex py-6">
                                  <a
                                    href="#"
                                    className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200"
                                  >
                                    <img
                                      src={product.image}
                                      alt={product.title}
                                      className="h-full w-full object-cover object-scale-down"
                                    />
                                  </a>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <a href="#"> {product.title} </a>
                                        </h3>
                                        <p className="ml-4">
                                          <strong>${product.price}</strong>
                                        </p>
                                      </div>
                                    </div>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <p className="text-black-500">
                                        <strong>{product.quantity}</strong>
                                      </p>

                                      <div className="flex">
                                        <button
                                          onClick={() => removeBasket(product)}
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$262.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">
                        Shipping and taxes calculated at checkout.
                      </p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{" "}
                          <NavLink
                            to={"/"}
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </NavLink>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Basket;
