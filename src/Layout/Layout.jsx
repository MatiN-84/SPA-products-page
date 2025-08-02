import React from "react";
import "./test.css";
import { MdShoppingCart } from "react-icons/md";
import { MdStore } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function Layout({ children }) {
  const cartProductsNumber = useSelector(data=> data.cartData.totalItems)
  
  const MENU = [
    { name: "Home", path: "/Homepage" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
  ];
  return (
    <>
      <div
        style={{}}
        className= " bg-green-100 p-5 flex justify-between text-green-600 h-18 fixed w-[100%] z-10 top-0"
      >

        <div className="icon">
          <Link to="./Homepage"><MdStore className="text-[#155e75] w-8 h-8 cursor-pointer" /></Link>
          
        </div>
        <div className="navigation">
          <ul
            
            className="flex justify-between w-[260px] font-semibold text-[20px] "
          >
            {MENU.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  (isActive ? "border-b-3 border-red-500 " : null ) +
                  "cursor-pointer hover:text-green-500"
                }
                key={item.name}
                to={item.path}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
        </div>
        <NavLink to="./cart" className={({isActive})=>(isActive? "border-b-3 border-red-500 ":null)+"cartBox relative"}>
          <div className="absolute bottom-6 left-6 bg-red-700  rounded-full  w-6 h-6 flex items-center justify-center text-white" >{cartProductsNumber}</div>
          
          <MdShoppingCart  className="text-[#155e75] w-8 h-8 cursor-pointer " />
        </NavLink>
      </div>

      <div className="mt-20 w-[1300px] m-auto mt-4 " >{children}</div>
      
      <div className="mt-5 w-[100%] text-center bg-green-500 p-5 text-white text-xl text-bold font-semibold">Made by MatiN</div>

    </>
  );
}

export default Layout;
