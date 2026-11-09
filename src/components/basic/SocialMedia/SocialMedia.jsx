import React from 'react';
import { Link } from 'react-router';
import { FaFacebookF, FaXTwitter, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa6";

const SocialMedia = () => {
    return (
              <div className="flex items-center 3xs:space-x-1.5 lg:space-x-3 mt-2">
            <Link className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-800 border border-slate-500 hover:border-slate-800 inset-0 shadow-md ease-in-out delay-150">
                <FaFacebookF />
            </Link>
            <Link className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-800 border border-slate-500 hover:border-slate-800 inset-0 shadow-md ease-in-out delay-150">
                <FaXTwitter />
            </Link>
            <Link className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-800 border border-slate-500 hover:border-slate-800 inset-0 shadow-md ease-in-out delay-150">
                <FaInstagram />
            </Link>
            <Link className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-800 border border-slate-500 hover:border-slate-800 inset-0 shadow-md ease-in-out delay-150">
                <FaTiktok />
            </Link>
            <Link className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-800 text-slate-200 transition-all hover:bg-slate-200 hover:text-slate-800 border border-slate-500 hover:border-slate-800 inset-0 shadow-md ease-in-out delay-150">
                <FaYoutube />
            </Link>
        </div>
    );
};

export default SocialMedia;