import React from "react";
import Testimonial from './components/Testimonial';
import reviews from './data';

const App = () => {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-[#0A0A0A]">
      <div className="text-center">
        <h1 className="text-4xl font-bold font-['Orbitron'] text-[#FFD700]">The Justice League</h1>
        <div className="bg-gradient-to-r from-[#0077FF] to-[#C62828] h-[4px] w-1/5 mx-auto mt-2 rounded-full shadow-lg shadow-[#0077FF]/50"></div>
        <Testimonial reviews={reviews} />
      </div>
    </div>
  );
};

export default App;
