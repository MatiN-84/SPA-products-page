import React from "react";
import { give3PupolarProducts } from "../helpers/helper";
import Product from "./Product";

function MostPopular({ data }) {
    const betterRateProducts=give3PupolarProducts(data)

  return (
    <div className="mt-13">
      <h2 className="text-[#6b7280] text-[2rem]">Most popular products</h2>
      <div className="flex" >{betterRateProducts.map(item=> <Product item={item}/>)}</div>
    </div>

  );
}

export default MostPopular;
