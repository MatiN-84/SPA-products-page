import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { FiPlus, FiMinus } from "react-icons/fi";
import { findDetails } from "../helpers/helper";
function ProductDetails() {
  const id = useParams().id;
  const data = useSelector((data) => data.fetchData.items);

  const product = findDetails(id, data);
  console.log(product);
  return (
    <div className="flex">
      <div className="p-10">
        <img
          className="w-100 max-h-100"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="ml-10 mt-5 ">
        <div className="mb-5">
          <Link
            className=" p-4 text-[#6b7280] text-[1.3rem] trasition-all duration-300 rounded-lg border-2 border-red-500 hover:text-white hover:bg-red-500"
            to="/products"
          >
            back to products
          </Link>
        </div>
        <h2 className="text-[#6b7280] text-[2rem]">{product.title}</h2>
        <p className=" mt-2 text-[#e11d48] text-[1.3rem] ">
          <span className="text-[1.3rem] text-[#16a34a]">Price:</span>
          {product.price} $
        </p>
        <p className="text-[1.2rem] text-[#6b7280] mt-2">
          <span className="text-[1.3rem] text-[#16a34a] ">Category:</span>
          {product.category}
        </p>
        <p className=" mt-2 text-[#6b7280]"> {product.description}</p>
        <div>
          <div className="mt-15 flex items-center text-[60px]">
            <span className="cursor-pointer bg-red-500 rounded-2xl">
              <FiMinus color="white" size={40} />
            </span>
            <span className="">1</span>
            <span className="cursor-pointer bg-green-500 rounded-2xl">
              <FiPlus color="white" size={40} />
            </span>
          </div>
        </div>

        <button className="text-[1.3rem] text-green-600 border-2 border-green-600 p-2 rounded-xl hover:text-white hover:bg-green-600 cursor-pointer transition-all duration-300">
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
