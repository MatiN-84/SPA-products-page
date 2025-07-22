import { useSelector } from "react-redux";

import Services from "../components/Services.tsx";
import MostPopular from "../components/MostPopular.tsx";

function HomePage() {
  const data = useSelector((state) => state.fetchData.items);

  return (
    <div className="relative overflow-hidden mt-20 ">
      <div className="w-35 h-35 absolute bg-[yellow] opacity-70 rounded-full -left-10 z-[-1]"></div>
      <div className="ml-5">
        <h3 className="text-[#16a34a] text-[2.5rem] ">Everything</h3>
        <p className="text-[#6b7280] text-[2.5rem]">
          you need to be good looking
        </p>
        <button className="text-[#16a34a] p-2 border-2 border-[#16a34a] rounded mt-[10px] hover:bg-[#16a34a] hover:text-white cursor-pointer transition duration-100 ease-in">
          Shop Now
        </button>
      </div>

      <div className="h-100 flex justify-end items-center">
        <img className="w-150" src="../hero_img.png" alt="hello" />
      </div>

      <Services />
      
      <MostPopular />

      <div className="mt-10 mx-auto  w-[750px]">
        <h3 className="text-[#6b7280] text-[2rem] ">
          {" "}
          Join our newsletter and get 20% off
        </h3>
        <p className="text-[#6b7280] text-[1.3rem] mt-5">
          Shop now, pay later. You'll only pay for the items you keep. Your
          payment will automatically be deducted from your card after 30 days,
          no additional charge
        </p>
        <div className="mt-4 flex border-2 border-[#6b7280] p-2 rounded w-75 m-auto">
          <input
            type="text"
            placeholder="Enter your email"
            className="border-none outline-none"
          />
          <button className="bg-[#16a34a] text-white rounded p-2 cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
