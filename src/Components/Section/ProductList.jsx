import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Api/api";
import { productSlices } from "../../Features/productSlice";
import Loading from "../Loading";
import FilteredProduct from "./FilteredProduct";
import ProductSelect from "./ProductSelect";

export default function ProductList() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector(productSlices);
  const [select, setSelect] = useState("choose");
  const data = useMemo(
    () => entities.filter((product) => product.category === select),
    [select, entities]
  );

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

  if (loading) <Loading />;
  return (
    <div className="container">
      <ProductSelect select={select} setSelect={setSelect} />
      <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-3 mb-5">
        {select !== "choose"
          ? data?.map((product) => {
              return <FilteredProduct product={product} key={product.id} />;
            })
          : entities?.map((product) => {
              return <FilteredProduct product={product} key={product.id} />;
            })}
      </ul>
    </div>
  );
}
