import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {
  const { gif, loading, fetchData } = useGif();
  function clickHandler() {
    fetchData();
  }

  return (
    <div className="w-1/2  bg-green-300 rounded-lg border border-green-600 flex flex-col items-center gap-y-6 mt-[15px]">
      <h1 className="text-2xl underline uppercase font-bold mt-3 ">
        A Random Gif
      </h1>

      {loading ? (
        <Spinner />
      ) : (
        <img className="my-auto mx-auto" src={gif} alt="gif" width="450" />
      )}

      <button
        onClick={clickHandler}
        className="w-fit bg-green-100 text-lg py-2 rounded-lg px-2 hover:bg-green-200 my-auto mb-4"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
