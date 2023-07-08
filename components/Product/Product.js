import { CONTEXT } from "@/context/ContextProvider";
import Link from "next/link";
import React, { useContext } from "react";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
// import StarRating from "../StarRating/StarRating";

const Product = ({id, title, thumbnail, price }) => {
  const { setAddCart } = useContext(CONTEXT);
  return (
    <div className=" group duration-700  relative ">
      <div className="bg-[#091a2b]  h-80">
        <div>
          <img
            src={thumbnail}
            alt=""
            className="h-52 object-cover p-5 mx-auto"
          />
        </div>
        <div className=" px-2 pt-2">
          <div className="p-2 flex-grow">
            <p className=" text-base text-white font-bold">
              {title.length > 25 ? title.slice(0, 25) + "..." : title}
            </p>
            {/* <StarRating star={rating} /> */}
            <h3 className="text-teal-500 font-semibold text-lg ">${price}</h3>
          </div>
        </div>
        <div className="absolute top-0 invisible w-full group-hover:top-full group-hover:visible duration-700  bg-[#091a2b] z-50">
          <hr />
          <div className="flex justify-around   p-2">
            <div>
              <button>
                <AiOutlineShoppingCart className="text-2xl text-white" />
              </button>
            </div>
            <div>
              <Link href={`/${id}`}>
                <AiOutlineHeart className="text-2xl text-white" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
