import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../Store/productSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const { entities, loading } = useSelector((state) => state.productSlice);

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Blog Posts</h2>
      <ul>
        {entities.map((product) => (
          <li key={product.id}>
            <img className="w-6	" src={product.image} alt={product.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}
