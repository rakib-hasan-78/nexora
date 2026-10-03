import React from "react";
import { Link } from "react-router";
import Logo from "./../../basic/Logo/Logo";
import Slogan from "./../../basic/Slogan/Slogan";
import NewsDate from "../../basic/NewsDate/NewsDate";
import ScrollElement from './../../basic/ScrollElement/ScrollElement';

const Header = () => {
  return (
    <div className="w-full flex flex-col items-center content-center">
    {/* first half of header */}
      <div className="3xs:max-w-full 3xl:max-w-7xl">
        {/**** logo ****/}
        <div className="w-full 3xs:h-16 2xs:h-20 sm:h-24 md:h-28 3xl:h-36 flex justify-center">
          <Link
          to={'/'}
           className="w-full flex justify-center">
            <Logo />
          </Link>
        </div>
        {/* company slogan */}
        <div className="3xs:-my-2.5 2xs:-my-4 2xl:-my-7">
          <Slogan />
        </div>
        <div className="my-8 text-center text-primary/70 font-extrabold">
          <NewsDate />
        </div>
      </div>
      {/* second half of header */}
      {/* marquee */}
      <div className="w-9/12 flex items-center border-slate-700/60  shadow-2xl">
        <ScrollElement />
      </div>  
    </div>
  );
};

export default Header;
