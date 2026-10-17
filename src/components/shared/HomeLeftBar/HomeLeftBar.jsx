import React, { useState } from "react";
import MostViewed from "./../MostViewed/MostViewed";
import addSection from "../../../assets/bg.png";

const HomeLeftBar = ({classname}) => {
  const [tab, setTab] = useState("mostRead");

  return (
    <div className={` min-h-full bg-gradient-to-r from-stone-700 via-slate-600 to-zinc-700 gap-3 rounded-xl  flex flex-col justify-between py-8 ${classname} `}>
      <div className="w-full flex items-center justify-center px-1.5">
        <button
          onClick={() => setTab("mostRead")}
          className={`border border-secondary text-red-300 rounded-l-xl p-2 border-r-0 cursor-pointer text-sm ${tab === "mostRead" && "bg-secondary border-red-300 text-slate-100 font-bold"}`}
        >
          <span className="lg:hidden">most viewed</span>
          <span className="hidden lg:inline">most viewed news</span>
        </button>
        <button
          onClick={() => setTab("topRated")}
          className={`border border-secondary text-red-300 border-l-0 p-2 rounded-r-xl cursor-pointer text-sm ${tab === "topRated" && "bg-secondary border-red-300 text-slate-100 font-bold"}`}
        >
          <span className="lg:hidden">top rated</span>
          <span className="hidden lg:inline">top rated news</span>
        </button>
      </div>
      {<MostViewed tab={tab} />}
    </div>
  );
};

export default HomeLeftBar;
