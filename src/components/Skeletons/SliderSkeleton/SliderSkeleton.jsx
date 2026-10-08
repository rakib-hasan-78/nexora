import React from 'react';

const SliderSkeleton = () => {
    return (
        <div className="h-[500px] w-full flex flex-col items-center justify-center bg-slate-800 rounded-2xl text-slate-400 animate-pulse">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-emerald-500 mb-3"></div>
            <p className="text-sm tracking-wider">Preparing slider stories...</p>
        </div>
    );
};

export default SliderSkeleton;