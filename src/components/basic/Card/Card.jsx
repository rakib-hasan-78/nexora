import React from "react";
import demoImage from "../../../assets/defaultNews.jpg";
import { CiBookmark, CiShare2 } from "react-icons/ci";
import { Link } from "react-router";
import Rating from './../Rating/Rating';
import { MdRemoveRedEye } from "react-icons/md";
const Card = ({ data }) => {
  const { title, thumbnail_url, author, details, rating, total_view } = data;
  const date = new Date(author.published_date);
  return (
    <div className="w-full h-125  flex flex-col items-center justify-center px-2 ">
      {/* card header */}
      <div className="w-full flex items-center justify-between glass-effect rounded-b-none">
        <div className="3xs:w-10/12 lg:w-7/12 flex items-center justify-start space-x-2 z-30">
          <div className="w-1/5 rounded-full overflow-hidden">
            <img
              src={author.img || demoImage}
              onError={(event) => (event.currentTarget.src = demoImage)}
              alt={title}
            />
          </div>
          <div className="6/12 3xs:text-xs lg:text-base">
            <p>{author.name}</p>
            <p>{date.toLocaleDateString("en-GB")}</p>
          </div>
        </div>
        <div className="3xs:w-2/12 lg:w-3/12 flex 3xs:flex-col lg:flex-row  3xs:items-start lg:items-center justify-end z-30 3xs:-space-y-4 lg:space-y-0 ">
          <button className="btn btn-circle bg-transparent border-none shadow-none text-stone-300 cursor-pointer">
            <CiBookmark />
          </button>
          <button className="btn btn-circle bg-transparent border-none shadow-none text-stone-300 cursor-pointer">
            <CiShare2 />
          </button>
        </div>
      </div>
      {/* card body */}
      <div className="w-full flex flex-col items-center justify-start content-start  bg-violet-500/5 backdrop-blur-md  shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-linear-to-tl before:from-fuchsia-900/5 before:via-transparent before:to-rose-700/10 p-3 text-slate-200 rounded-t-none rounded-2xl border border-white/30">
      {/* title */}
        <div className="w-full z-30">
            <h3 className="font-bold line-clamp-2 pr-10 3xs:text-md lg:text-xl">{title}</h3>
        </div>
        {/* image */}
        <div className="my-2 rounded-xl overflow-hidden z-30">
            <img src={thumbnail_url || demoImage } onError={(event)=>event.currentTarget.src = demoImage} alt={title} referrerPolicy="no-referrer"  />
        </div>
        {/* description */}
        <div className="z-30">
            <p className="line-clamp-3 font-light 3xs:text-sm lg:text-base">
                {details}
            </p>
        </div>
        {/* link button */}
        <div className="w-full lg:py-3 font-semibold z-30">
        <Link>
        <span className="text-secondary/80 hover:text-secondary/90 ease-in-out delay-75 transition-all 3xs:text-sm lg:text-base">
            read more
        </span>
        </Link>
        </div>
        {/* divider */}
        <div className="w-full mt-0.5 border-t border-t-white/30"></div>
        {/* rating & reads */}
        <div className="w-full flex items-center justify-between my-1.5">
            <div className="flex items-center space-x-1.5">
                <Rating className='3xs:rating-xs lg:rating-sm' rating={rating.number} />
                <span>{rating.number}</span>
            </div>
            <div className="flex items-center justify-end space-x-2 3xs:text-xs lg:text-base">
                <span>
                    <MdRemoveRedEye />
                </span>
                <span >
                    {total_view}
                </span>
            </div>
        </div>
      </div>

    </div>
  );
};

export default Card;
