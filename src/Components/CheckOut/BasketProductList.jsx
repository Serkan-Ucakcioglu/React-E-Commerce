import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addBasket,
  remove,
  selectedBasket,
  updateQuantity,
} from "../../Features/productSlice";
import BasketContent from "./BasketContent";

function BasketProductList() {
  let basket = useSelector(selectedBasket);

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
    <>
      {basket?.map((product) => {
        return <BasketContent product={product} />;
      })}
    </>
  );
}

export default BasketProductList;
