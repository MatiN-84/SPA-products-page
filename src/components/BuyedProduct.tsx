import React from "react";
import { FaTrash } from "react-icons/fa";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import {
  decreaseNumofProducts,
  increaseNumberOfProducts,
  removeProduct,
} from "../features/Cart/cartSlice";


interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}


interface CartItem {
  product: Product;
  count: number;
}


interface BuyedProductProps {
  item: CartItem;
}

const BuyedProduct: React.FC<BuyedProductProps> = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex">
      <div className="flex">
        <div className="p-3 mr-3 w-20">
          <img
            className="max-w-20 max-h-20"
            src={item.product.image}
            alt={item.product.title}
          />
        </div>

        <div className="w-40 flex flex-col justify-around text-[15px]">
          <p className="truncate overflow-hidden whitespace-nowrap w-40 text-green-600">
            {item.product.title}
          </p>

          <p className="text-[19px] text-[#6b7280]">
            ${item.product.price} × {item.count}
          </p>
          <p className="text-[19px] text-[#e11d48]">
            ${(item.product.price * item.count).toFixed(2)}
          </p>
        </div>
      </div>

      <div className="mt-15 flex items-center text-[20px]">
        <span
          className="cursor-pointer bg-red-500 rounded-2xl"
          onClick={() => dispatch(decreaseNumofProducts({ id: item.product.id }))}
        >
          <FiMinus color="white" size={20} />
        </span>

        <span className="m-4">{item.count}</span>

        <span
          className="cursor-pointer bg-green-500 rounded-2xl"
          onClick={() =>
            dispatch(increaseNumberOfProducts({ id: item.product.id, number: 1 }))
          }
        >
          <FiPlus color="white" size={20} />
        </span>

        <button
          className="text-red-500 hover:text-red-700"
          onClick={() => dispatch(removeProduct({ id: item.product.id }))}
        >
          <FaTrash className="cursor-pointer ml-10" />
        </button>
      </div>
    </div>
  );
};

export default BuyedProduct;
