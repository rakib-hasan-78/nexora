import React from 'react';
import { IoArrowForward } from "react-icons/io5";
const CTA = () => {
    return (
        <div className='w-full flex 3xs:flex-col lg:flex-row flex-wrap items-center justify-between py-8'>
            <div className='3xs:w-full lg:w-5/12 flex items-center justify-start py-7'>
                <h3 className='font-bold 3xs:text-3xl lg:text-5xl text-slate-300 lg:pt-6'>newsletter</h3>
            </div>
            <div className='3xs:w-full  lg:w-5/12 border-amber-50 lg:py-6 flex flex-col space-y-2.5'>
                <h4 className='text-slate-200 3xs:text-xs lg:text-base'>subscribe to newsletter</h4>
                <form action="#">
                    <div className='w-full border border-white bg-slate-200 rounded-full flex items-center justify-between lg:px-1'>
                    <input 
                    className='3xs:w-11/12 lg:w-10/12 p-3 border-none outline-none focus:outline-none focus:ring-0 text-primary/50 placeholder-primary/35 font-light' 
                    type="email"
                    placeholder='your email here'
                     />
                    <button 
                    className='bg-linear-to-tl from-zinc-800 via-gray-700 to-slate-800 rounded-full border btn-circle p-3.5 text-slate-200 cursor-pointer'
                    type='submit'>
                    <IoArrowForward />
                    </button>
                    </div>
                </form>
            </div>
            <div className='w-full border-t rounded-full border-slate-500/70 mt-6'>
            </div>
        </div>
    );
};

export default CTA;