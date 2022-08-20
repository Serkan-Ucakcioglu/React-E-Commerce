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
      <ul className="grid grid-flow-row-dense grid-cols-4 grid-rows-6">
        {entities.map((product) => (
          <li>
            <NavLink to={"/home"} key={product.id}>
              <div className="p-10 flex flex-col justify-center items-center max-w-sm mt-5 h-96 mr-2 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img
                  src={product.image}
                  alt={product.title}
                  className="cursor-pointer h-4/6 w-4/6"
                />
                <a href="#">
                  <h5 className="mb-2 text-xl mt-2 font-semibold tracking-tight text-gray-900 dark:text-white">
                    {product.title}
                  </h5>
                </a>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
