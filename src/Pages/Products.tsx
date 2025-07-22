import { FaBars, FaTh } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";
import Product from "../components/Product";
import Sidebar from "../components/Sidebar";



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
          <Sidebar/>

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
                <Product item={item}/>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
