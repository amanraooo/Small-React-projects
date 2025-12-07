import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
  
  const [tag , setTag] = useState('')
const {gif, loading, fetchData} = useGif();

  function clickHandler() {
    fetchData(tag);
  }

  return (
    <div className="w-1/2  bg-blue-300 rounded-lg border border-blue-600 flex flex-col items-center gap-y-6 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold mt-3 ">
         Random {tag} Gif
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img className="my-auto mx-auto" src={gif} alt="gif" width="450" />
      )}

      <input 
      className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
      onChange={(e)=>setTag(e.target.value)} 
      value={tag}/>

      <button
        onClick={clickHandler}
        className="w-fit bg-green-100 text-lg py-2 rounded-lg px-2 hover:bg-blue-200 my-auto mb-4"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
