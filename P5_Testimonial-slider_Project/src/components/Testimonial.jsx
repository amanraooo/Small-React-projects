import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  let reviews = props.reviews;

  const [index, setIndex] = useState(0);

  function LeftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  function RightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  function SurpriseMeHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center mt-10 p-10 tranisition-all duration-700 hover:shadow-xl rounded-md">
      <Card reviews={reviews[index]} />

      <div className="flex text-3xl mt-10 gap-3 text-yellow-500 font-bold text-center mx-auto">
        <button
          onClick={LeftShiftHandler}
          className="cursor-pointer hover:text-yellow-600"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={RightShiftHandler}
          className="cursor-pointer hover:text-yellow-600"
        >
          <FiChevronRight />
        </button>
      </div>

      <div className="mt-5">
        <button
          onClick={SurpriseMeHandler}
          className="bg-yellow-500 text-white font-semibold text-lg px-10 py-2 rounded-md
             shadow-[0_4px_15px_rgba(255,215,0,0.4),0_2px_5px_rgba(0,0,0,0.1)]
             hover:shadow-[0_6px_20px_rgba(255,223,0,0.5),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-yellow-600
             transition-all duration-300"
        >
          Surprise me
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
