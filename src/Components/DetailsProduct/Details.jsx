import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBasket } from "../../Store/productSlice";
import Header from "../Header/Header";

function Details() {
  const { id } = useParams();
  let [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  const fetchDetail = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  };

  const addProduct = () => {
    dispatch(addBasket(detail));
  };
  useEffect(() => {
    fetchDetail();
    console.log("useEffect detail sayfasında çalıştı");
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <ul className="flex justify-center items-center mt-20">
          <li>
            <div className="max-w-sm flex flex-col items-center rounded overflow-hidden shadow-lg">
              <img
                className="object-cover w-full h-96 mr-2 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={detail.image}
                alt={detail.title}
                loading="lazy"
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{detail.title}</div>
                <p className="text-gray-500 font-bold text-base">
                  {detail.description}
                </p>
                <p className="text-gray-700 text-base mt-4">
                  <strong className="text-lg font-bold text-black ">
                    {" "}
                    ${detail.price}
                  </strong>
                </p>
              </div>
              <button
                className="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-2"
                type="button"
                onClick={() => addProduct()}
              >
                add
              </button>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Details;
