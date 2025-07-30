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

const options = [
  { value: "a-z", label: "name (a-z)" },
  { value: "z-a", label: "name (z-a)" },
  { value: "highest", label: "price (highes)" },
  { value: "lowest", label: "price (lowest)" },
];
import { FiPackage } from "react-icons/fi";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchData = useSelector((state) => state.fetchData);
  const [query, setQuery] = useState({});
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [productCounter, setProductCounter] = useState(0);
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedOption, setSelectedOption] = useState(options[3]);
  const [productsDisplayStyle, setProductsDisplayStyle] = useState("GRID");

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
    finalProducts = sortTheProducts(finalProducts, selectedOption.value);

    setProductCounter(giveProductsNumber(finalProducts));
    setDisplayed(finalProducts);
  }, [query, priceRange, selectedOption]);

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
            setPriceRange={setPriceRange}
            priceRange={priceRange}
            search={search}
            setQuery={setQuery}
            setSearch={setSearch}
            query={query}
          />

          <div className="w-[1050px] ml-[250px]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                <FaTh
                  className={
                    (productsDisplayStyle === "GRID"
                      ? "border-2 border-green-700"
                      : null) +
                    " p-[2px] rounded text-[#155e75] cursor-pointer text-[30px] hover:opacity-70 transition-all duraiton-300 "
                  }
                  onClick={() => setProductsDisplayStyle("GRID")}
                />
                <FaBars
                  className={
                    (productsDisplayStyle === "LIST"
                      ? "border-2 border-green-700"
                      : null) +
                    " p-[2px] rounded text-[#155e75] cursor-pointer text-[30px] hover:opacity-70 transition-all duraiton-300 "
                  }
                  onClick={() => setProductsDisplayStyle("LIST")}
                />
              </div>
              <div className="text-[#6b7280]">{productCounter} Items found</div>
              <div className=" w-100 h-1 bg-red-500"></div>
              <div className="text-[#6b7280]">
                <Select
                  value={selectedOption}
                  onChange={(option) => setSelectedOption(option)}
                  options={options}
                  placeholder="sort By:"
                />
              </div>
            </div>

            <div className="flex flex-wrap">
              {displayed.length !== 0 ? (
                displayed.map((item: object) => (
                  <Product
                    item={item}
                    key={item.id}
                    displayStyle={productsDisplayStyle}
                  />
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
