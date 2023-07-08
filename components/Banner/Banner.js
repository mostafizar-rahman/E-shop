import Image from "next/image";
import Home1 from "../../assets/images/home1.webp";
import Home2 from "../../assets/images/home2.webp";
import Home3 from "../../assets/images/home3.webp";
import Home4 from "../../assets/images/home4.webp";
import { AiFillCalendar } from "react-icons/ai";
import { FiRefreshCcw } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";

const Banner = () => {
  return (
    <section className=" grid gap-5 xl:grid-cols-[27%_50%_20%] lg:grid-cols-[40%_60%] sm:grid-cols-1  container ">
      <div className="row-span-2">
        <Image src={Home2} className="w-full xl:h-[700px] h-[600px] hidden md:block object-cover" />
      </div>
      <div>
        <Image src={Home1} className="w-full h-[600px]" />
      </div>
      <div className="hidden xl:block">
        <div>
          <Image src={Home3}  className="w-full h-full" />
        </div>
        <div>
          <Image src={Home4}  className="w-full h-full" />
        </div>
      </div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  col-span-2  gap-5">
        <div className="flex items-center space-x-5 bg-[#091a2b] text-white px-3 py-3 min-h-[100px]">
          <AiFillCalendar className="text-3xl" />
          <div>
            <h2 className="text-lg font-semibold">SUPPORT 24/7</h2>
            <i>We support online 24hrs</i>
          </div>
        </div>
        <div className="flex items-center space-x-5 bg-[#091a2b] text-white px-3 py-3 min-h-[100px]">
          <FiRefreshCcw className="text-3xl" />
          <div>
            <h2 className="text-lg font-semibold">FREE RETURN</h2>
            <i>30 days money back guarantee</i>
          </div>
        </div>
        <div className="flex items-center space-x-5 bg-[#091a2b] text-white px-3 py-3 min-h-[100px]">
          <FaTelegramPlane className="text-3xl" />
          <div>
            <h2 className="text-lg font-semibold">FREE SHIPPING</h2>
            <i>Free shipping on all order</i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
