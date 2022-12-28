import { useCallback } from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import { addBasket } from "../../Features/productSlice";
import DetailList from "./DetailList";

function Details() {
  const { id } = useParams();
  let [detail, setDetail] = useState([]);
  const dispatch = useDispatch();

  const addProduct = () => {
    dispatch(addBasket(detail));
  };
  const fetchDetail = useCallback(
    (signal) => {
      fetch(`https://fakestoreapi.com/products/${id}`, signal)
        .then((res) => res.json())
        .then((data) => {
          setDetail(data);
        });
    },
    [id]
  );
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    fetchDetail(signal);
    return () => {
      controller.abort();
    };
  }, [fetchDetail]);

  return (
    <>
      <Header />
      <div className="container">
        <ul className="flex justify-center items-center mt-20">
          <li>
            <DetailList detail={detail} addProduct={addProduct} />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Details;
