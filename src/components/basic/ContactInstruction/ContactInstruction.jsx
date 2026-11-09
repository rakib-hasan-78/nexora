
import React from "react";
import { IoArrowRedoOutline } from "react-icons/io5";
import SocialMedia from './../SocialMedia/SocialMedia';

const ContactInstruction = () => {
  return (
    <div className="w-full h-full flex flex-col">

      {/* Heading and description */}
      <div className="w-full">
        <h3 className="text-lg 2xs:text-xl xs:text-2xl sm:text-2xl font-bold mb-2 2xs:mb-3 capitalize">
          additional information
        </h3>

        <p className="text-xs 2xs:text-sm xs:text-base leading-relaxed font-light">
          Have something to share with us? We'd love to hear from you. Use the
          contact form to get in touch with our team. You can share as follows:
        </p>
      </div>

      {/* Contact purposes */}
      <div className="w-full flex flex-col justify-start items-start mt-4 2xs:mt-5 sm:mt-6 gap-2 2xs:gap-2.5">

        <span className="flex items-center gap-2 2xs:gap-2.5 sm:gap-3 font-semibold text-xs 2xs:text-sm xs:text-base">
          <IoArrowRedoOutline className="shrink-0 text-sm 2xs:text-base sm:text-lg" />
          <p>publishing local news.</p>
        </span>

        <span className="flex items-center gap-2 2xs:gap-2.5 sm:gap-3 font-semibold text-xs 2xs:text-sm xs:text-base">
          <IoArrowRedoOutline className="shrink-0 text-sm 2xs:text-base sm:text-lg" />
          <p>media covering & press release.</p>
        </span>

        <span className="flex items-center gap-2 2xs:gap-2.5 sm:gap-3 font-semibold text-xs 2xs:text-sm xs:text-base">
          <IoArrowRedoOutline className="shrink-0 text-sm 2xs:text-base sm:text-lg" />
          <p>underprivileged community help.</p>
        </span>

        <span className="flex items-center gap-2 2xs:gap-2.5 sm:gap-3 font-semibold text-xs 2xs:text-sm xs:text-base">
          <IoArrowRedoOutline className="shrink-0 text-sm 2xs:text-base sm:text-lg" />
          <p>promoting reputed brand.</p>
        </span>

        <span className="flex items-center gap-2 2xs:gap-2.5 sm:gap-3 font-semibold text-xs 2xs:text-sm xs:text-base">
          <IoArrowRedoOutline className="shrink-0 text-sm 2xs:text-base sm:text-lg" />
          <p>complaint & accountability.</p>
        </span>

        <span className="flex items-center gap-2 2xs:gap-2.5 sm:gap-3 font-semibold text-xs 2xs:text-sm xs:text-base">
          <IoArrowRedoOutline className="shrink-0 text-sm 2xs:text-base sm:text-lg" />
          <p>ideation & creativity.</p>
        </span>

      </div>

      {/* Social media */}
      <div className="mt-auto pt-6 2xs:pt-8 sm:pt-10 flex flex-col gap-2 2xs:gap-3">
        <h3 className="text-base 2xs:text-lg sm:text-xl font-bold capitalize">
          find us on:
        </h3>

        <SocialMedia />
      </div>

    </div>
  );
};

export default ContactInstruction;
