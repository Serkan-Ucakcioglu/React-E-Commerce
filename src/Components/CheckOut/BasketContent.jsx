import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBasket, remove, updateQuantity } from "../../Features/productSlice";
function BasketContent({ product }) {
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
}

export default BasketContent;
