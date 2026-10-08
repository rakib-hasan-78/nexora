import React from "react";
import { Link } from "react-router";

const Slide = ({data}) => {
  const {author, title, details, thumbnail_url} =data
  return (
    <div className="relative h-[500px] overflow-hidden rounded-2xl">
      {/* GREEN PANEL */}
      <div
        className="
            absolute
            inset-y-0
            left-0
            z-20
            w-[55%]
            bg-linear-to-tl from-stone-800 via-slate-700 to-zinc-700
            [clip-path:polygon(0_0,100%_4%,100%_100%,0_100%)]
        "
      >
        <div className="flex h-full items-center px-14 rounded-2xl">
          <div className="max-w-md text-white">
            <p className="text-xs tracking-[0.2em]">
              {author.name}
            </p>

            <h2 className="mt-3 text-slate-300 text-4xl font-bold line-clamp-4">{title}</h2>

            <p className="mt-3 text-sm leading-5 line-clamp-2">
              {details}
            </p> <br />

            <Link
              className="
                        mt-10
                        rounded-full
                        bg-secondary/80
                        hover:bg-secondary
                        text-rose-200
                        hover:text-rose-100
                        ease-in-out
                        delay-150
                        px-6
                        py-3
                        text-sm
                        border
                    "
            >
            Read Details 
            </Link>
          </div>
        </div>
      </div>

      {/* IMAGE PANEL */}
      <div
        className="
            absolute
            inset-y-0
            right-0
            z-10
            w-[55%]
            overflow-hidden
            [clip-path:polygon(0_5%,100%_0,100%_100%,0_100%)]
        "
      >
        <img src={thumbnail_url} alt="" />
      </div>
    </div>
  );
};

export default Slide;
