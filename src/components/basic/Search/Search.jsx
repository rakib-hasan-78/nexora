import React from "react";
import { RxCross1 } from "react-icons/rx";
import { IoSearchOutline } from "react-icons/io5";

const Search = ({ newsData, searchNews, setSearchNews }) => {


  return (
    <>
      <div className="w-full h-auto bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 rounded-xl shadow-2xl border border-white/15">
        <div className="w-auto border btn-glass flex flex-col items-center space-y-3.5 py-6">
          <div className="text-2xl text-slate-200 font-semibold z-10">
            <h3>search news here</h3>
          </div>
          <div className="w-10/12 border flex items-center justify-center z-10 py-2 space-x-1.5 rounded-2xl mt-5 shadow-2xl glass mb-4 border-white/20">
            <IoSearchOutline className="text-2xl" />
            <input
              value={searchNews}
              className="relative border w-10/12 py-2 border-none outline-0"
              type="text"
              name="text"
              onChange={(e) => setSearchNews(e.target.value)}
            />
            {searchNews && (
              <RxCross1
                onClick={() => setSearchNews("")}
                className="text-2xl cursor-pointer hover-3d hover:p-0.5 transition-all delay-75 hover:bg-gray hover:font-bold ease-in-out rotate-180 text-slate-200"
              />
            )}
          </div>
        </div>
      </div>
      {
        searchNews &&
      <div className="aura w-full mt-6 text-gray-700/90">
        <div className="card bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 rounded-xl shadow-2xl border border-white/80">
          <div className="card-body">
            <p className="text-red-400 font-bold">{`total ${newsData.length}`}</p>
          </div>
        </div>
      </div>

      }
    </>
  );
};

export default Search;
