import React from "react";
import {FaUserAlt} from "react-icons/fa"
const TopHeader = () => {
  return (
    <div className=" mx-auto max-w-7xl pt-3 flex justify-between items-center">
      <div>
        <h3 className="text-3xl">
          My<span className="text-orange-500 font-bold ">SHOP</span>
        </h3>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search Product"
          className="border border-orange-500 lg:w-96 w-full px-2 outline-none py-3"
        />
        <button className="border bg-orange-500 border-orange-500 text-white w-40 px-2 outline-none py-3">
          Search
        </button>
      </div>
      <div>
        <button>
          <FaUserAlt className="text-2xl text-white hover:text-orange-500 duration-700"/>
        </button>
      </div>
    </div>
  );
};

export default TopHeader;
