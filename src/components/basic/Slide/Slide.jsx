import React from "react";
import demo from '../../../assets/demo-card-thumbnail.png';
const Slide = ({data}) => {
  // const {author} =data
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
            bg-[#064e49]
            [clip-path:polygon(0_0,100%_4%,100%_100%,0_100%)]
        "
      >
        <div className="flex h-full items-center px-14">
          <div className="max-w-md text-white">
            <p className="text-xs tracking-[0.2em]">
              Author: {data.author.name}
            </p>

            <h2 className="mt-3 text-4xl font-bold">CRUISE TO VICTORY</h2>

            <p className="mt-3 text-sm leading-5">
              Pop Warner is the world's largest youth football program. The
              leagues teach young people fundamental values and skills and
              foster a commitment to academic success.
            </p>

            <button
              className="
                        mt-7
                        rounded-full
                        bg-white
                        px-6
                        py-3
                        text-sm
                        text-black
                    "
            >
              Read Detail →
            </button>
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
        <img src={demo} alt="" />
      </div>
    </div>
  );
};

export default Slide;
