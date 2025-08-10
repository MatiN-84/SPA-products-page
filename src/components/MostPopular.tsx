import React from "react";
import { give3PupolarProducts } from "../helpers/helper";
import Product from "./Product";

interface ProductType {
  id: number;
  title: string;
  price: number;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface MostPopularProps {
  data: ProductType[];
}

const MostPopular: React.FC<MostPopularProps> = ({ data }) => {
  const topRatedProducts: ProductType[] = give3PupolarProducts(data);

  return (
    <div className="mt-13">
      <h2 className="text-[#6b7280] text-[2rem]">Most popular products</h2>
      <div className="flex">
        {topRatedProducts.map((item) => (
          <Product key={item.id} item={item} displayStyle="GRID" />
        ))}
      </div>
    </div>
  );
};

export default MostPopular;
