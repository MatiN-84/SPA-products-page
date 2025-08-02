import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { FiPlus, FiMinus } from "react-icons/fi";
import { findDetails } from "../helpers/helper";
import {
  addProduct,
  increaseNumberOfProducts,
} from "../features/Cart/cartSlice";
import { Spinner } from "@material-tailwind/react";
function ProductDetails() {
  const dispatch = useDispatch();
  const cartData = useSelector((data) => data.cartData);

  const id = useParams().id;
  const data = useSelector((data) => data.fetchData.items);

  const [numberOfProduct, setNumberOfProduct] = useState(1);
  const product = findDetails(id, data);
  const clickHandler = () => {
    const productInCart = cartData.cartProducts.find(
      (item) => item.product.id === +id
    );

    if (!productInCart) {
      dispatch(addProduct(product));
      dispatch(increaseNumberOfProducts({ id, number: numberOfProduct-1 }));

    } else if (productInCart) {
      dispatch(increaseNumberOfProducts({ id, number: numberOfProduct }));
    }


  };

  return (
    <div className="flex">
      {product ? (
        <>
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
                <span
                  className="cursor-pointer bg-red-500 rounded-2xl"
                  onClick={(e) =>{setNumberOfProduct((prev) => prev - 1)} }
                >
                  <FiMinus color="white" size={40} />
                </span>
                <span className="m-4">{numberOfProduct}</span>
                <span
                  className="cursor-pointer bg-green-500 rounded-2xl"
                  onClick={(e) => setNumberOfProduct((prev) => prev + 1)}
                >
                  <FiPlus color="white" size={40} />
                </span>
              </div>
            </div>
            <Link to="/cart">
              {" "}
              <button
                onClick={clickHandler}
                className="text-[1.3rem] text-green-600 border-2 border-green-600 p-2 rounded-xl hover:text-white hover:bg-green-600 cursor-pointer transition-all duration-300"
              >
                Add to cart
              </button>
            </Link>
          </div>
        </>
      ) : (
        <div className="">
          <Spinner className="mt-10 h-19 w-19 " />
        </div>
      )}
    </div>
  );
}

export default ProductDetails;
