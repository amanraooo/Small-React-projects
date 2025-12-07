import React from "react";
import { FaQuoteLeft, FaQuoteRight, FaGem } from "react-icons/fa";

const Card = (props) => {
  let reviews = props.reviews;
  return (
    <div className="flex flex-col md:relative">
      <div className="absolute top-[-7rem] z-[10] mx-auto">
        <img
          className="aspect-square rounded-full w-[140px] h-[140px] z-[25] hover:shadow-xl object-cover hover:scale-105 hover:rotate-1"
          src={reviews.image}
        />
        {/* <div className="w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-10] left-[10px] hover:shadow-lg"></div> */}
        <div
          className="w-[140px] h-[140px] rounded-full absolute top-[-6px] left-[10px]
    bg-gradient-to-r from-blue-600 to-red-700
    shadow-[0_0_20px_rgba(0,119,255,0.4),0_0_30px_rgba(198,40,40,0.3)]
    z-[-10]"
        ></div>
      </div>

      <div className="text-center mt-7">
        <p className="font-['Orbitron'] font-bold text-2xl capitalize tracking-wider">
          {reviews.name}
        </p>

        <p className="text-violet-300 uppercase text-sm"> {reviews.job}</p>
      </div>

      <div className="text-[#C62828] mx-auto mt-5 ">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-4 text-slate-500 font-['Montserrat'] ">
        <p> {reviews.text}</p>
      </div>

      <div className="text-[#C62828] mx-auto mt-5 ">
        <FaQuoteRight />
      </div>
    </div>
  );
};
export default Card;
