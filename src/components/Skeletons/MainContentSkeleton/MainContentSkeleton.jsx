import React from "react";

const MainContentSkeleton = () => {
    return (
        <div className="w-full flex flex-col gap-5">

            {[1, 2, 3].map((section) => (
                <div
                    key={section}
                    className="w-full min-w-0 rounded-xl shadow-xl border border-white/10 bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 p-4 sm:p-5 flex flex-col gap-4"
                >
                    {/* Section heading */}
                    <div className="flex items-center justify-between gap-3">
                        <div className="skeleton h-6 w-40 sm:w-52 bg-white/10" />
                        <div className="skeleton h-5 w-16 bg-white/10" />
                    </div>

                    {/* News content placeholders */}
                    {[1, 2].map((item) => (
                        <div
                            key={item}
                            className="w-full flex flex-col sm:flex-row gap-4 p-3 rounded-lg bg-white/5"
                        >
                            {/* News image */}
                            <div className="skeleton w-full sm:w-36 h-40 sm:h-28 shrink-0 rounded-lg bg-white/10" />

                            {/* News details */}
                            <div className="flex-1 flex flex-col gap-3 py-1">
                                <div className="skeleton h-4 w-11/12 bg-white/10" />
                                <div className="skeleton h-4 w-8/12 bg-white/10" />

                                <div className="skeleton h-3 w-full bg-white/10" />
                                <div className="skeleton h-3 w-10/12 bg-white/10" />

                                <div className="flex items-center gap-3 mt-auto pt-2">
                                    <div className="skeleton w-7 h-7 rounded-full bg-white/10" />
                                    <div className="skeleton h-3 w-24 bg-white/10" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}

        </div>
    );
};

export default MainContentSkeleton;