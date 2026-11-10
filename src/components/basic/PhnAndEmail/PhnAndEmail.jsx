
import React from "react";
import { IoCallOutline, IoMailOutline } from "react-icons/io5";

const PhnAndEmail = () => {
  return (
    <div className="w-full flex flex-col 2xs:flex-row flex-wrap items-start 2xs:items-center gap-3 2xs:gap-x-4 sm:gap-x-6 sm:gap-y-3">

      {/* Phone */}
      <a
        href="tel:+8801707018553"
        className="flex items-center gap-2 2xs:gap-2.5 sm:gap-3 min-w-0 text-xs 2xs:text-sm sm:text-base hover:text-blue-500 transition-colors duration-300"
      >
        <IoCallOutline className="text-base 2xs:text-lg sm:text-xl shrink-0" />
        <span className="min-w-0 break-all">
          +880 1707018553
        </span>
      </a>

      {/* Email */}
      <a
        href="mailto:contact@nexora.com"
        className="flex items-center gap-2 2xs:gap-2.5 sm:gap-3 min-w-0 text-xs 2xs:text-sm sm:text-base hover:text-blue-500 transition-colors duration-300"
      >
        <IoMailOutline className="text-base 2xs:text-lg sm:text-xl shrink-0" />
        <span className="min-w-0 break-all">
          contact@nexora.com
        </span>
      </a>

    </div>
  );
};

export default PhnAndEmail;
