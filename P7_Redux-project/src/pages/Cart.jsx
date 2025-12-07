import { useSelector } from 'react-redux';
import CartItem from './../components/CartItem';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-3xl font-semibold text-gray-700 mb-4">
          Your Cart is Empty 🛒
        </h1>
        <Link to="/">
          <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl">
            Shop Now
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-10 px-4">
        {/* Left side – Cart items */}
        <div className="flex flex-col gap-6 w-full lg:w-[65%]">
          {cart.map((item, index) => (
            <CartItem key={item.id || index} item={item} itemIndex={index} />
          ))}
        </div>

        {/* Right side – Summary */}
        <div className="w-full lg:w-[30%] bg-white p-6 rounded-2xl shadow-lg border border-gray-200 h-fit sticky top-10">
          <h2 className="text-gray-600 text-sm font-semibold mb-2">
            YOUR CART
          </h2>
          <h1 className="text-2xl font-bold text-green-700 mb-4">Summary</h1>
          <p className="text-gray-700 mb-6">
            Total Items: <span className="font-semibold">{cart.length}</span>
          </p>

          <div className="border-t border-gray-300 pt-4">
            <p className="text-lg font-semibold text-gray-700">
              Total Amount:{' '}
              <span className="text-green-700">${totalAmount.toFixed(2)}</span>
            </p>
          </div>

          <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl text-lg font-semibold">
            Checkout Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
