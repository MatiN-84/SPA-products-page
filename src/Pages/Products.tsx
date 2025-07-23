import { FaBars, FaTh } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import { useSearchParams } from "react-router-dom";
import {  useEffect, useState } from "react";
import {   filterProducts, getInitialQuery, searchProducts } from "../helpers/helper";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchData = useSelector((state) => state.fetchData);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    setQuery(getInitialQuery(searchParams));
    setDisplayed(fetchData);
    console.log("this is query"+JSON.stringify(query));
  }, [fetchData]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");
    let finalProducts = filterProducts(searchProducts(fetchData.items , query.search) , query.category);
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
          <Sidebar search={search} setQuery={setQuery} setSearch={setSearch} query={query} />

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
              {fetchData.items.map((item: object) => (
                <Product item={item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
