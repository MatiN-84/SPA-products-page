import React from "react";
import categories from "../Constants/categories";
function Sidebar() {
  return (
    <div className=" fixed p-2 ">
      <div>
        <input
          className="bg-[#efeff0] rounded p-3"
          type="text"
          placeholder="Search"
        />
      </div>
      <div className="mt-5">
        <h2 className="text-[1.5rem] text-[#075985]">Category</h2>
        <div>
          <ul>
            {categories.map((item) => (
              <li
                className="text-[#155e75] text-[1.1rem] mt-[5px] ml-2"
                key={item}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-5">
        <h2 className="text-[1.5rem] text-[#075985]">Price</h2>
        <p className="text-[#e11d48] text-[1.3rem]">$999.99</p>
        <progress></progress>
      </div>

      <div>
        <button className="rounded transition  font-bold border-[0.2rem] border-[#e11d48] text-[#6b7280] p-2 hover:bg-[#e11d48] hover:text-white cursor-pointer mt-5">
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
