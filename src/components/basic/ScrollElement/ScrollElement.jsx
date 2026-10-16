import React from "react";
import ScrollNews from "./../ScrollNews/ScrollNews";

const ScrollElement = () => {
  return (
    <div className="w-full flex items-start rounded-xl">
      <div
        className="primary-bg-gradient 3xs:w-4/12 lg:w-2/12 3xs:py-2  lg:py-3.5 uppercase text-slate-200 rounded-l-xl flex items-center justify-end
           3xs:font-medium lg:font-black 3sx:text-xs sm:text-md lg:text-2xl  3xs:pr-1 lg:pr-4 3xs:space-x-1 lg:space-x-3"
      >
        <h1>latest</h1>
        <span className="relative flex 3xs:size-2 lg:size-4">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75"></span>
          <span className="relative inline-flex 3xs:size-2 lg:size-4 rounded-full bg-secondary"></span>
        </span>
      </div>
      <div className="3xs:w-8/12 lg:w-10/12">
        <ScrollNews />
      </div>
    </div>
  );
};

export default ScrollElement;
