import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  remove,
  selectedBasket,
  selectedCount,
} from "../../Features/productSlice";
import BasketList from "./BasketList";
import Shopping from "./Shopping";
import Total from "./Total";

function Basket() {
  let [shop, setShop] = useState(false);
  let basket = useSelector(selectedBasket);
  let count = useSelector(selectedCount);
  const dispatch = useDispatch();

  const removeBasket = (product) => {
    dispatch(remove(product));
  };

  const baskets = count > 0 && (
    <div>
      {shop && (
        <div
          className="relative z-10"
          aria-labelledby="slide-over-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                <div className="pointer-events-auto w-screen max-w-md mi mt-24">
                  <div className="flex h-2/3 flex-col overflow-auto bg-white shadow-xl rounded-md">
                    <div className="flex-1 overflow-auto py-6 px-4 sm:px-6">
                      <Shopping setShop={setShop} />
                      {basket.map((product) => {
                        return (
                          <BasketList
                            product={product}
                            key={product.id}
                            removeBasket={removeBasket}
                          />
                        );
                      })}
                    </div>
                    <Total basket={basket} setShop={setShop} shop={shop} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="container">
      <div
        className="w-1/5 h-3 flex items-center cursor-pointer"
        onClick={() => setShop((shop = !shop))}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDSScOc9jICGGssMug0jWrOgeoFX6K78kLtw&usqp=CAU"
          alt="basket"
        />
        {count > 0 && (
          <div className="w-4">
            <strong className="bg-gray-600 rounded-full w-5 px-2 text-white">
              {count}
            </strong>
          </div>
        )}
      </div>

      {baskets}
    </div>
  );
}

export default Basket;
