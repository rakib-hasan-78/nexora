import React from "react";
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";
import NewsToast from "./../../basic/NewsToast/NewsToast";
import useSlideContent from "../../../CustomHooks/useSlideContent/useSlideContent";

const DisplayNewsSection = ({ sectionTitle, newsData }) => {
  const 
  {
    page,
    totalPages,
    totalItems, 
    pageHandler
    } = useSlideContent(newsData, 8);

  return (
    <div>
      <div className="w-full flex items-center justify-between 3xs:px-2 lg:px-4 mt-8 pb-6">
        <h2 className="text-slate-200 3xs:text-sm lg:text-3xl 3xs:font-medium lg:font-bold">{sectionTitle}</h2>
        <div className="text-2xl flex items-center justify-center space-x-3">
        {
            page > 1 &&
          <button 
          className="cursor-pointer text-slate-300 hover:text-gray-500 transition-all ease-in delay-100"
          onClick={()=>pageHandler(page - 1)}
          >
            <HiArrowLongLeft />
          </button>

        }
        {
            page < totalPages &&
          <button className="cursor-pointer text-slate-300 hover:text-gray-500 transition-all ease-in delay-100"
          onClick={()=>pageHandler(page + 1)}
          >
            <HiArrowLongRight />
          </button>

        }
        </div>
      </div>
      <div className="grid 3xs:grid-cols-1  lg:grid-cols-2  gap-4 p-2">
      {
        totalItems.map(item=>(
            <NewsToast 
            key={item.id}
            news={item}
             />
        ))
      }
      </div>
    </div>
  );
};

export default DisplayNewsSection;
