
import React from "react";

const NewsCardSkeleton = () => {

    return (

        <div className="w-full p-4 sm:p-5 rounded-xl border border-white/10 bg-white/5 flex flex-col sm:flex-row gap-4">

            {/* Image skeleton */}
            <div className="skeleton w-full sm:w-40 h-44 sm:h-32 shrink-0 rounded-lg"></div>

            {/* Content skeleton */}
            <div className="flex-1 flex flex-col gap-3">

                {/* Title */}
                <div className="skeleton h-5 w-11/12"></div>
                <div className="skeleton h-5 w-8/12"></div>

                {/* Description */}
                <div className="skeleton h-3 w-full"></div>
                <div className="skeleton h-3 w-10/12"></div>
                <div className="skeleton h-3 w-7/12"></div>

                {/* Footer */}
                <div className="flex items-center gap-3 mt-auto pt-2">

                    <div className="skeleton w-8 h-8 rounded-full"></div>

                    <div className="skeleton h-3 w-24"></div>

                </div>

            </div>

        </div>

    );
};

export default NewsCardSkeleton;
