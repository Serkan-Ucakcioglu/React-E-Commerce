import React from "react";

function ProductSelect({ select, setSelect }) {
  return (
    <div className="flex flex-col mt-8 items-center">
      <label
        htmlFor="category"
        className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400 d-none"
      >
        Select an Category
      </label>
      <select
        id="category"
        className="bg-gray-50 border rounded  border-gray-400 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={select}
        onChange={(e) => setSelect(e.target.value)}
      >
        <option value="choose">All</option>
        <option value="electronics">Electronics</option>
        <option value="jewelery">Jewelery</option>
        <option value="men's clothing">Men's clothing</option>
        <option value="women's clothing">Women's clothing</option>
      </select>
    </div>
  );
}

export default ProductSelect;
