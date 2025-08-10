import React from "react";
import { shortProducts } from "../helpers/helper";
import { Link } from "react-router-dom";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
}

type DisplayStyle = "GRID" | "LIST";

interface ProductProps {
  item: ProductType;
  displayStyle: DisplayStyle;
}

const Product: React.FC<ProductProps> = ({ item, displayStyle }) => {
  return (
    <div
      className={
        (displayStyle === "GRID" ? "w-[33%] p-10" : "w-[100%] flex") +
        " p-3 hover:shadow-[0_0_16px_16px_#d1d5db80] transition-shadow duration-600 rounded-lg"
      }
      key={item.id}
    >
      <Link to={`/productDetails/${item.id}`}>
        <div className={displayStyle === "LIST" ? "flex h-70" : ""}>
          <div
            className={
              (displayStyle === "GRID"
                ? "flex h-[300px] justify-center w-[100%]"
                : "mr-10 h-[100%] content-center") + " items-center"
            }
          >
            <img
              className={
                displayStyle === "GRID"
                  ? "w-[100%] max-h-[300px] box-border"
                  : "w-60 max-h-60"
              }
              src={item.image}
              alt={item.title}
            />
          </div>
          <div className={displayStyle === "GRID" ? "mt-4" : "mt-10"}>
            <p className="text-[1.5rem] text-[#075985]">
              {displayStyle === "GRID" ? shortProducts(item.title) : item.title}
            </p>
            <p
              className={
                (displayStyle === "GRID" ? "" : "mt-4") +
                " text-[#e11d48] text-[1.5rem]"
              }
            >
              ${item.price}
            </p>
            {displayStyle === "LIST" && (
              <div>
                <p className="line-clamp-2 max-w-150 text-[#6b7280] text-[1.2rem]">
                  {item.description}
                </p>
                <button className="mt-4 text-[1rem] text-green-600 border-2 border-green-600 p-1 rounded-lg hover:text-white hover:bg-green-600 cursor-pointer transition-all duration-300">
                  Details
                </button>
              </div>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
