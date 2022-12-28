import React from "react";
import { NavLink } from "react-router-dom";

function FilteredProduct({ product }) {
  return (
    <>
      <li key={product.id}>
        <NavLink to={`detail/${product.id}`}>
          <div className="p-10 flex flex-col justify-center items-center w-full	mt-5 h-96 mr-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={product.image}
              alt={product.title}
              className="cursor-pointer h-4/6 w-full object-contain "
              loading="lazy"
            />
            <div>
              <h5 className="mb-2 text-xl mt-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Detail</span>
              </button>
            </div>
          </div>
        </NavLink>
      </li>
    </>
  );
}

export default FilteredProduct;
