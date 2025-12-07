import { FcDeleteDatabase } from "react-icons/fc";
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Removed from cart");
  };

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-5 rounded-2xl shadow-md border border-gray-200">
      <div className="w-40 h-40 flex justify-center items-center">
        <img
          src={item?.image || ""}
          alt={item?.title || "Product"}
          className="object-contain max-h-full"
        />
      </div>

      <div className="flex flex-col sm:w-2/3 mt-4 sm:mt-0 sm:ml-6">
        <h1 className="text-lg font-semibold text-gray-800 mb-1">
          {item?.title}
        </h1>
        <p className="text-sm text-gray-600 mb-3">{item?.description}</p>

        <div className="flex justify-between items-center">
          <p className="text-green-700 font-bold text-lg">${item?.price}</p>
          <button
            onClick={removeFromCart}
            className="text-red-500 hover:text-red-700 transition"
          >
            <FcDeleteDatabase size={26} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
