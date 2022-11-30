import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProduct } from "../../Api/api";

export default function ProductList() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.productSlice);
  const [select, setSelect] = useState("choose");
  const data = entities.filter((product) => product.category === select);

  const getData = (data) => dispatch(getProduct(data));

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    getData({ signal });
    return () => {
      controller.abort();
    };

    // eslint-disable-next-line
  }, []);

  const all =
    select === "choose" &&
    entities.map((product) => (
      <li key={product.id}>
        <NavLink to={`detail/${product.id}`}>
          <div className="p-14 flex flex-col justify-center items-center max-w-full mt-5 h-96 mr-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img
              src={product.image}
              alt={product.title}
              className="cursor-pointer h-1/2 w-full object-contain"
              loading="lazy"
            />
            <div>
              <h5 className="mb-2 text-sm mt-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.title}
              </h5>
              <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <span>Detail</span>
              </button>
            </div>
          </div>
        </NavLink>
      </li>
    ));

  const filteredData =
    select !== "choose" &&
    data.map((product) => (
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
    ));

  if (loading) {
    return (
      <div
        className="container bg-yellow-100 rounded-lg py-5 px-6 mb-3 text-base text-yellow-700 inline-flex items-center w-full"
        role="alert"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="exclamation-triangle"
          className="w-4 h-4 mr-2 fill-current"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"
          ></path>
        </svg>
        ...LOADİNG
      </div>
    );
  }

  return (
    <div className="container">
      <div className="flex flex-col mt-8 items-center">
        <label
          htmlFor="category"
          className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-400 d-none"
        >
          Select an Category
        </label>
        <select
          id="category"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-1/2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
      <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 mb-5">
        {all}
        {filteredData}
      </ul>
    </div>
  );
}
