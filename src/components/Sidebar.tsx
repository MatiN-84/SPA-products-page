import React from "react";
import categories from "../Constants/categories";
import { createQueryObject } from "../helpers/helper";

interface Query {
  category?: string;
  search?: string;
  priceRange?: number;
  [key: string]: string | number | undefined;
}

interface SidebarProps {
  setQuery: React.Dispatch<React.SetStateAction<Query>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  query: Query;
}

const Sidebar: React.FC<SidebarProps> = ({ setQuery, search, setSearch, query }) => {
  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.toLowerCase().trim();
    setSearch(value);
    setQuery((prevQuery) =>
      createQueryObject(prevQuery, {
        ...prevQuery,
        search: value,
      })
    );
  };

  return (
    <div className="fixed p-2">
      <div>
        <input
          className="bg-[#efeff0] rounded p-3"
          type="text"
          placeholder="Search"
          onChange={searchHandler}
          value={search}
        />
      </div>

      <div className="mt-5">
        <h2 className="text-[1.5rem] text-[#075985]">Category</h2>
        <ul>
          {categories.map((item) => (
            <li
              key={item}
              className={
                (item.toLowerCase() === query.category ||
                (item.toLowerCase() === "all" && !query.category)
                  ? "border-red-700 border-b-2"
                  : "") +
                " hover:ml-6 cursor-pointer text-[#155e75] text-[1.1rem] mt-[5px] ml-2 transition-all w-40 p-1"
              }
              onClick={(e) =>
                setQuery((prevQuery) =>
                  createQueryObject(prevQuery, {
                    ...prevQuery,
                    category: (e.target as HTMLLIElement).innerText.toLowerCase(),
                  })
                )
              }
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-5">
        <h2 className="text-[1.5rem] text-[#075985]">Price</h2>
        <p className="text-[#e11d48] text-[1.3rem]">
          ${query.priceRange ?? 1000}
        </p>
        <input
          type="range"
          name="price"
          min="0"
          max="1000"
          value={query.priceRange ?? 1000}
          onChange={(e) =>
            setQuery((prevQuery) =>
              createQueryObject(prevQuery, {
                ...prevQuery,
                priceRange: Number(e.target.value),
              })
            )
          }
        />
      </div>

      <div>
        <button className="rounded transition font-bold border-[0.2rem] border-[#e11d48] text-[#6b7280] p-2 hover:bg-[#e11d48] hover:text-white cursor-pointer mt-5">
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
