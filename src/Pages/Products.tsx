import { useEffect } from "react";
import { FaBars, FaTh } from "react-icons/fa";
import { useSelector } from "react-redux";
import { shortProducts } from "../helpers/helper";

import { Spinner } from "@material-tailwind/react";
const categories: string[] = [
  "All",
  "Men's Clothing",
  "Jewelery",
  "Electronics",
  "Women's Clothing",
];

function Products() {
  const products = useSelector((state) => state.fetchData);
  console.log(products);
  return (
    <>
      {products.status == "loading" ? (
        <div className=" h-300 flex justify-center">
          <Spinner className="mt-10 h-19 w-19 " />
        </div>
      ) : (
        <div className="flex  ">
          <div className=" fixed  ">
            <div>
              <input type="text" placeholder="Search" />
            </div>
            <div>
              <h2>Category</h2>
              <div>
                <ul>
                  {categories.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h2>Price</h2>
              <p>$999.99</p>
              <progress></progress>
            </div>

            <div>
              <button>Reset Filters</button>
            </div>
          </div>

          <div className="w-[1050px] ml-[250px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <FaTh className="text-[#155e75] cursor-pointer text-[30px]" />
                <FaBars className="text-[#155e75] cursor-pointer text-[30px]" />
              </div>
              <div className="text-[#6b7280]">20 items found</div>
              <div className=" w-100 h-1 bg-red-500"></div>
              <div className="text-[#6b7280]">Sort by:</div>
            </div>

            <div className="flex flex-wrap">
              {products.items.map((item: object) => (
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
                    <p className="text-[#e11d48] text-[1.5rem]">
                      {" "}
                      ${item.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
