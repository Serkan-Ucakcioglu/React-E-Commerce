import { useSelector } from "react-redux";
import { selectedCount } from "../../Features/productSlice";
import BasketList from "./BasketList";

function CheckOut() {
  let count = useSelector(selectedCount);

  return (
    <div className="container mx-auto mt-10">
      {count === 0 && (
        <h1 className="text-red text-xl flex mt-8 justify-center items-center">
          Sepetiniz Boş.
        </h1>
      )}
      <BasketList />
    </div>
  );
}

export default CheckOut;
