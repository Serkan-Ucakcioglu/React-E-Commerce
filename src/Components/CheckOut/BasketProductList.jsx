import React from "react";
import { useSelector } from "react-redux";
import { selectedBasket } from "../../Features/productSlice";
import BasketContent from "./BasketContent";

function BasketProductList() {
  let basket = useSelector(selectedBasket);

  return (
    <>
      {basket?.map((product) => {
        return <BasketContent product={product} />;
      })}
    </>
  );
}

export default BasketProductList;
