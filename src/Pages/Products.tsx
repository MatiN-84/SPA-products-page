import { FaBars, FaTh } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  filterProducts,
  getInitialQuery,
  giveProductsNumber,
  searchProducts,
} from "../helpers/helper";

import { FiPackage } from "react-icons/fi";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchData = useSelector((state) => state.fetchData);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [productCounter , setProductCounter] = useState (0);

  useEffect(() => {
    setQuery(getInitialQuery(searchParams));
    setDisplayed(fetchData.items);
  }, [fetchData]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    const finalProducts = filterProducts(
      searchProducts(fetchData.items, query.search),
      query.category
    );
    setProductCounter(giveProductsNumber(finalProducts))
    setDisplayed(finalProducts);
  }, [query]);

  // useEffect(()=> {
  //   setQuery(searchParams)
  // }, [searchParams])

  return (
    <>
      {fetchData.status == "loading" ? (
        <div className=" h-300 flex justify-center">
          <Spinner className="mt-10 h-19 w-19 " />
        </div>
      ) : (
        <div className="flex  ">
          <Sidebar
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
              <div className="text-[#6b7280]">Sort by:</div>
            </div>

            <div className="flex flex-wrap">
              {displayed.length!==0 ? (
                displayed.map((item: object) => <Product item={item} key={item.id} />)
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
