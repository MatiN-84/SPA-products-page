import { FaBars, FaTh } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from "react-select";
import {
  filterProducts,
  getInitialQuery,
  getInRangeProducts,
  giveProductsNumber,
  searchProducts,
  sortTheProducts,
} from "../helpers/helper";

import { FiPackage } from "react-icons/fi";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchData = useSelector((state) => state.fetchData);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [productCounter, setProductCounter] = useState(0);
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedOption, setSelectedOption] = useState("highest");

  useEffect(() => {
    setQuery(getInitialQuery(searchParams));
    setDisplayed(fetchData.items);
  }, [fetchData]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(fetchData.items, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    finalProducts = getInRangeProducts(finalProducts, priceRange);
    sortTheProducts(finalProducts,selectedOption)
  
    setProductCounter(giveProductsNumber(finalProducts));
    setDisplayed(finalProducts);
  }, [query, priceRange , selectedOption]);

  // useEffect(()=> {
  //   setQuery(searchParams)
  // }, [searchParams])

  const options = [
    { value: "z-a", label: "name (a-z)" },
    { value: "a-z", label: "name (z-a)" },
    { value: "highest", label: "price (highes)" },
    { value: "lowest", label: "price (lowest)" },
  ];


  return (
    <>
      {fetchData.status == "loading" ? (
        <div className=" h-300 flex justify-center">
          <Spinner className="mt-10 h-19 w-19 " />
        </div>
      ) : (
        <div className="flex  ">
          <Sidebar
            setPriceRange={setPriceRange}
            priceRange={priceRange}
            search={search}
            setQuery={setQuery}
            setSearch={setSearch}
            query={query}
          />

          <div className="w-[1050px] ml-[250px]">
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                <FaTh className="text-[#155e75] cursor-pointer text-[30px]" />
                <FaBars className="text-[#155e75] cursor-pointer text-[30px]" />
              </div>
              <div className="text-[#6b7280]">{productCounter} Items found</div>
              <div className=" w-100 h-1 bg-red-500"></div>
              <div className="text-[#6b7280]">
                <Select
                  value={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                  placeholder="sort By:"
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              {displayed.length !== 0 ? (
                displayed.map((item: object) => (
                  <Product item={item} key={item.id} />
                ))
              ) : (
                <div className="w-[100%] h-120 flex justify-center items-center text-center text-[#5b5b5b] text-[50px]">
                  {" "}
                  No Product found <FiPackage />{" "}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
