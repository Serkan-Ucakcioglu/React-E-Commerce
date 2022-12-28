import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { getProduct } from "../../Api/api";
import Loading from "../Loading";
import FilteredProduct from "./FilteredProduct";
import ProductSelect from "./ProductSelect";

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

  if (loading) <Loading />;

  return (
    <div className="container">
      <ProductSelect select={select} setSelect={setSelect} />
      <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 mb-5">
        {all}
        {select !== "choose" &&
          data?.map((product) => {
            return <FilteredProduct product={product} key={product.id} />;
          })}
      </ul>
    </div>
  );
}
