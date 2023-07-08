import React, { useState } from "react";
import Cart from "@/components/Cart/Cart";
import Link from "next/link";
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  const [cart, setCart] = useState(false);
  return (
    <header className="shadow-2xl">
      <div className="mx-auto max-w-7xl py-5 flex justify-between items-center">
        <h3 className="text-3xl">
          My<span className="text-orange-500 font-bold ">SHOP</span>
        </h3>
        <nav>
          <ul className="flex gap-5">
            <li>
              <Link
                href="/"
                className="text-white font-medium hover:text-orange-500 duration-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white font-medium hover:text-orange-500 duration-500"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white font-medium hover:text-orange-500 duration-500"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-white font-medium hover:text-orange-500 duration-500"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-5">
          <button>
            <FaUserAlt className="text-2xl text-white hover:text-orange-500 duration-700" />
          </button>
          <button>
            <AiOutlineHeart className="text-white hover:text-orange-500 duration-700 text-2xl cursor-pointer" />
          </button>
          <button>
            <AiOutlineShoppingCart
              onClick={() => setCart(true)}
              className="text-white hover:text-orange-500 duration-700 text-2xl cursor-pointer"
            />
          </button>
        </div>
        <Cart cart={cart} setCart={setCart} />
      </div>
      
    </header>
  );
};

export default Header;
