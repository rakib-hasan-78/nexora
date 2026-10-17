import React from "react";
import { Link } from "react-router";
import { BiLogoFacebook, BiLogoYoutube } from "react-icons/bi";
import { BsTwitterX, BsInstagram, BsTiktok } from "react-icons/bs";
const SocialBtn = () => {
  return (
    <div className="w-11/12 bg-gradient-to-r from-stone-700 via-slate-600 to-zinc-700 py-3 flex flex-wrap justify-end rounded-xl">
      <div className="w-full font-bold text-slate-300 py-3 text-2xl">
        <h3 className="text-center">find us on</h3>
      </div>
      <div className="w-full py-4 flex flex-wrap items-center justify-center space-y-2">
        {/* facebook */}
        <Link className="w-10/12 delay-75 transition-all hover:w-11/12 hover:aura hover:text-violet-600/50">
          <div className="w-full flex items-center glass rounded-xl border border-white/10 py-1.5 px-2 space-x-2.5">
            <span className="h-8 w-8 btn-glass hover:glass-effect rounded-full flex items-center justify-center">
              <BiLogoFacebook className="text-xl shrink-0" />
            </span>
            <div className="flex text-stone-200">
              <span>facebook</span>
            </div>
          </div>
        </Link>
        {/* twitter */}
        <Link className="w-10/12 delay-75 transition-all hover:w-11/12 hover:aura hover:text-violet-600/50">
          <div className="w-full flex items-center glass rounded-xl border border-white/10 py-1.5 px-2 space-x-2.5">
            <span className="h-8 w-8 btn-glass hover:glass-effect rounded-full flex items-center justify-center">
              <BsTwitterX className="shrink-0 text-sm" />
            </span>
            <div className="flex text-stone-200">
              <span>X handle</span>
            </div>
          </div>
        </Link>
        {/* instagram */}
        <Link className="w-10/12 delay-75 transition-all hover:w-11/12 hover:aura hover:text-violet-600/50">
          <div className="w-full flex items-center glass rounded-xl border border-white/10 py-1.5 px-2 space-x-2.5">
            <span className="h-8 w-8 btn-glass hover:glass-effect rounded-full flex items-center justify-center">
              <BsInstagram className="text-sm shrink-0" />
            </span>
            <div className="flex text-stone-200">
              <span>instagram</span>
            </div>
          </div>
        </Link>
        {/* tiktok */}
        <Link className="w-10/12 delay-75 transition-all hover:w-11/12 hover:aura hover:text-violet-600/50">
          <div className="w-full flex items-center glass rounded-xl border border-white/10 py-1.5 px-2 space-x-2.5">
            <span className="h-8 w-8 btn-glass hover:glass-effect rounded-full flex items-center justify-center">
              <BsTiktok className="text-sm shrink-0" />
            </span>
            <div className="flex text-stone-200">
              <span>tiktok</span>
            </div>
          </div>
        </Link>
        {/* youtube */}
        <Link className="w-10/12 delay-75 transition-all hover:w-11/12 hover:aura hover:text-violet-600/50">
          <div className="w-full flex items-center glass rounded-xl border border-white/10 py-1.5 px-2 space-x-2.5">
            <span className="h-8 w-8 btn-glass hover:glass-effect rounded-full flex items-center justify-center">
              <BiLogoYoutube className="text-xl shrink-0" />
            </span>
            <div className="flex text-stone-200">
              <span>youtube</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SocialBtn;
