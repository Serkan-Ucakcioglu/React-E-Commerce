import React from "react";

function DetailList({ detail, addProduct }) {
  return (
    <div className="max-w-sm flex flex-col items-center rounded overflow-hidden shadow-lg">
      <img
        className="object-scale-down w-full h-96 mr-2 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={detail.image}
        alt={detail.title}
        loading="lazy"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {detail.id} {detail.title}
        </div>
        <p className="text-gray-500 font-bold text-base">
          {detail.description}
        </p>
        <p className="text-gray-700 text-base mt-4">
          <strong className="text-lg font-bold text-black ">
            ${detail.price}
          </strong>
        </p>
      </div>
      <button
        className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
        type="button"
        onClick={() => addProduct()}
      >
        Buy
      </button>
    </div>
  );
}

export default DetailList;
