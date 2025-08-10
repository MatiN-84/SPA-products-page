// types/cart.ts
export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface CartProduct {
  product: Product;
  count: number;
}

export interface CartState {
  cartProducts: CartProduct[];
  totalItems: number;
  totalPrice: string;
}


import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import BuyedProduct from "../components/BuyedProduct";
import { clearAll } from "../features/Cart/cartSlice";


const Cart: React.FC = () => {
  const dispatch = useDispatch();

  const cartData = useSelector((state) => state.cartData);

  return (
    <div className="flex justify-around pt-5 mb-75">
      {cartData.cartProducts.length === 0 ? (
        <div className="text-center p-46">
          <h2 className="text-[2rem] text-[#6b7280]">
            Your cart is <span className="text-red-600">empty</span>
          </h2>
          <Link to="/products">
            <button className="text-[#16a34a] p-2 border-2 border-[#16a34a] rounded mt-[10px] hover:bg-[#16a34a] hover:text-white transition duration-100 ease-in">
              Shop Now
            </button>
          </Link>
        </div>
      ) : (
        <>
          <div className="w-120">
            <div>
              {cartData.cartProducts.map((item, index) => (
                <BuyedProduct key={index} item={item} />
              ))}
            </div>
            <div className="flex justify-between p-2">
              <Link to="/products">
                <button className="font-bold text-[#16a34a] p-2 border-2 border-[#16a34a] rounded mt-[10px] hover:bg-[#16a34a] hover:text-white transition duration-100 ease-in">
                  Buy more
                </button>
              </Link>
              <button
                onClick={() => dispatch(clearAll())}
                className="font-bold text-red-500 p-2 border-2 border-red-500 rounded mt-[10px] hover:bg-red-500 hover:text-white transition duration-100 ease-in"
              >
                Clear cart
              </button>
            </div>
          </div>

          <div className="h-50 border-2 border-[#16a34a] rounded-lg text-[1.3rem] text-[#075985] font-medium p-4 w-80">
            <div className="mb-3">
              <p>
                Total Items:{" "}
                <span className="text-center w-30 inline-block">
                  {cartData.totalItems}
                </span>
              </p>
            </div>
            <div>
              <p>
                Total Price:{" "}
                <span className="text-center w-30 inline-block text-red-500">
                  ${cartData.totalPrice}
                </span>
              </p>
            </div>
            <div className="w-[95%] h-[2px] bg-red-500 m-auto mt-4"></div>
            <button className="w-[100%] bg-[#16a34a] text-white mt-5 p-1 hover:text-red-500 border-2 border-green-600 hover:bg-white transition duration-100 ease-in">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
