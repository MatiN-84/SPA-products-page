import React from "react";
import { shortProducts } from "../helpers/helper";

function Product({item}) {
  return (
    <div className="w-[33%] p-10" key={item.id}>
      <div className="flex w-[100%] h-[300px] items-center">
        <img
          className="w-[100%] max-h-[300px] "
          src={item.image}
          alt={item.title}
        />
      </div>
      <p className="text-[1.5rem] text-[#075985]">
        {shortProducts(item.title)}
      </p>
      <div className="mt-4">
        <p className="text-[#e11d48] text-[1.5rem]">${item.price}</p>
      </div>
    </div>
  );
}

export default Product;
