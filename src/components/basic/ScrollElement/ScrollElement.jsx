import React from "react";
import ScrollNews from "./../ScrollNews/ScrollNews";

const ScrollElement = () => {
  return (
    <div className="w-full flex items-start rounded-xl">
      <div
        className="primary-bg-gradient w-2/12 py-3.5 uppercase text-slate-200 rounded-l-xl flex items-center justify-end
            font-black text-2xl pr-4 space-x-3"
      >
        <h1>latest</h1>
        <span class="relative flex size-4">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
          <span class="relative inline-flex size-4 rounded-full bg-secondary"></span>
        </span>
      </div>
      <div className="w-10/12">
        <ScrollNews />
      </div>
    </div>
  );
};

export default ScrollElement;
