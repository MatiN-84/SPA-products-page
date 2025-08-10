import { FaBars, FaTh } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Select from "react-select";
import { FiPackage } from "react-icons/fi";
import {
  createQueryObject,
  filterProducts,
  getInitialQuery,
  getInRangeProducts,
  giveProductsNumber,
  searchProducts,
  sortTheProducts,
} from "../helpers/helper";


// Types
interface ProductType {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface QueryParams {
  priceRange: number;
  search?: string;
  category?: string;
  sortby?: string;
}

interface OptionType {
  value: string;
  label: string;
}

const sortOptions: OptionType[] = [
  { value: "a-z", label: "name (a-z)" },
  { value: "z-a", label: "name (z-a)" },
  { value: "highest", label: "price (highest)" },
  { value: "lowest", label: "price (lowest)" },
];

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const fetchData = useSelector((state) => state.fetchData);

  const [query, setQuery] = useState<QueryParams>({ priceRange: 1000 });
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState<ProductType[]>([]);
  const [productCounter, setProductCounter] = useState(0);
  const [productsDisplayStyle, setProductsDisplayStyle] = useState<"GRID" | "LIST">("GRID");

  useEffect(() => {
    setQuery(getInitialQuery(searchParams));
    setDisplayed(fetchData.items);
  }, [fetchData, searchParams]);

  useEffect(() => {
    setSearchParams(query);
    setSearch(query.search || "");

    let finalProducts = searchProducts(fetchData.items, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    finalProducts = getInRangeProducts(finalProducts, query.priceRange);
    finalProducts = sortTheProducts(finalProducts, query.sortby);

    setProductCounter(giveProductsNumber(finalProducts));
    setDisplayed(finalProducts);
  }, [query, fetchData.items, setSearchParams]);

  return fetchData.status === "loading" ? (
    <div className="h-300 flex justify-center">
      <Spinner className="mt-10 h-19 w-19" />
    </div>
  ) : (
    <div className="flex">
      <Sidebar search={search} setQuery={setQuery} setSearch={setSearch} query={query} />

      <div className="w-[1050px] ml-[250px]">
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-2">
            <FaTh
              className={`${productsDisplayStyle === "GRID" ? "border-2 border-green-700" : ""} 
                          p-[2px] rounded text-[#155e75] cursor-pointer text-[30px] hover:opacity-70 transition-all duration-300`}
              onClick={() => setProductsDisplayStyle("GRID")}
            />
            <FaBars
              className={`${productsDisplayStyle === "LIST" ? "border-2 border-green-700" : ""} 
                          p-[2px] rounded text-[#155e75] cursor-pointer text-[30px] hover:opacity-70 transition-all duration-300`}
              onClick={() => setProductsDisplayStyle("LIST")}
            />
          </div>

          <div className="text-[#6b7280]">{productCounter} Items found</div>

          <Select
            value={sortOptions.find(option => option.value === query.sortby) || null}
            onChange={(option) =>
              setQuery((prev) =>
                createQueryObject(prev, { ...prev, sortby: option?.value || "" })
              )
            }
            options={sortOptions}
            placeholder="Sort By:"
          />
        </div>

        <div className="flex flex-wrap">
          {displayed.length > 0 ? (
            displayed.map((item) => (
              <Product key={item.id} item={item} displayStyle={productsDisplayStyle} />
            ))
          ) : (
            <div className="w-full h-120 flex justify-center items-center text-center text-[#5b5b5b] text-[50px]">
              No Product found <FiPackage />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
