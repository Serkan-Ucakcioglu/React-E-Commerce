import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Store/productSlice";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (loading) return <p>loading.</p>;

  return (
    <div className="container">
      <ul className="grid grid-flow-row-dense grid-cols-4 grid-rows-6 ">
        {entities.map((product) => (
          <li key={product.id}>
            <NavLink to={`detail/${product.id}`}>
              <div className="p-10 flex flex-col justify-center items-center max-w-full mt-5 h-96 mr-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  src={product.image}
                  alt={product.title}
                  className="cursor-pointer h-4/6 w-4/6 object-contain"
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
        ))}
      </ul>
    </div>
  );
}
