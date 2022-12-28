import React from "react";

function BasketList({ product, removeBasket }) {
  return (
    <div className="mt-8">
      <div className="flow-root">
        <ul className="-my-6 divide-y divide-gray-200">
          <li className="flex py-6">
            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
              <img
                src={product.image}
                alt={product.title}
                className="h-full w-full object-scale-down"
              />
            </div>

            <div className="ml-4 flex flex-1 flex-col">
              <div>
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <h3>
                    <div>{product.title}</div>
                  </h3>
                  <p className="ml-4">
                    <strong>${product.price * product.quantity}</strong>
                  </p>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-between text-sm">
                <p className="text-black-500">
                  <strong>{product.quantity}</strong>
                </p>

                <div className="flex">
                  <button
                    onClick={() => removeBasket(product)}
                    type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default BasketList;
