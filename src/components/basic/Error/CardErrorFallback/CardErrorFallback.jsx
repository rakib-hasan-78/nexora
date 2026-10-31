
import React from "react";
import { FiAlertTriangle, FiFileText } from "react-icons/fi";
const CardErrorFallback = () => {

    return (

        <div className="w-full min-h-52 relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 via-gray-900 to-zinc-900 flex flex-col items-center justify-center text-center p-6">

            {/* Decorative background */}
            <div className="absolute -top-16 -right-16 w-40 h-40 bg-red-500/10 blur-3xl rounded-full"></div>

            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-slate-400/10 blur-3xl rounded-full"></div>

            {/* Error icon */}
            <div className="relative z-10 w-12 h-12 rounded-full bg-red-500/10 border border-red-400/20 flex items-center justify-center mb-3">

                <FiAlertTriangle className="text-red-400 text-2xl" />

            </div>

            {/* Error code */}
            <h2 className="relative z-10 text-4xl sm:text-5xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-gray-300 via-slate-400 to-zinc-500">

                404

            </h2>

            {/* Message */}
            <h3 className="relative z-10 text-white font-semibold text-lg mt-2">

                Oops! Story Unavailable

            </h3>

            <p className="relative z-10 text-gray-400 text-sm max-w-sm mt-2 leading-relaxed">

                Something went wrong while displaying this news. The story is temporarily unavailable.

            </p>

            {/* Bottom indicator */}
            <div className="relative z-10 flex items-center gap-2 mt-4 text-xs text-gray-500">

                <FiFileText />

                <span>Content couldn't be displayed</span>

            </div>

        </div>

    );
};

export default CardErrorFallback;
