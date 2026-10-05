import React from 'react';
import { IoArrowForward } from "react-icons/io5";
const CTA = () => {
    return (
        <div className='w-full flex flex-wrap items-center justify-between py-8'>
            <div className='w-5/12 flex items-center justify-start py-7'>
                <h3 className='font-bold text-5xl text-slate-300 pt-6'>newsletter</h3>
            </div>
            <div className='w-5/12 border-amber-50 py-6 flex flex-col space-y-2.5'>
                <h4 className='text-slate-200'>subscribe to newsletter</h4>
                <form action="#">
                    <div className='w-full border border-white bg-slate-200 rounded-full flex items-center justify-between px-1'>
                    <input 
                    className='w-10/12 p-3 border-none outline-none focus:outline-none focus:ring-0 text-primary/50 placeholder-primary/35 font-light' 
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