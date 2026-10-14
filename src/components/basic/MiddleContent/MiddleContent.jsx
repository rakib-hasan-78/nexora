import React from 'react';
import Card from './../Card/Card';
import { Link } from 'react-router';
import { BsArrowRight } from "react-icons/bs";


const MiddleContent = ({title,newsData}) => {
    
    return (
        <div className='w-full h-auto overflow-hidden'>
            <div className=' w-full h-full
                bg-linear-to-tl from-stone-800 via-slate-700 to-zinc-700
                py-8 shadow-2xl rounded-2xl'>

                <diV className=" flex items-center justify-between w-11/12 mx-auto">
                    <h2 className='text-2xl font-bold text-slate-300'>{title}</h2>
                    <Link>
                    <span className='flex items-center gap-2 text-slate-200 font-light'>
                    see all
                    <BsArrowRight />
                    </span>
                    </Link>
                </diV>

                <div className=' w-full h-auto grid grid-cols-2 gap-4 px-6 py-4'>
                    {newsData.map(data=>(
                        <Card key={data.id} data={data} />
                    ))}
                </div>

                </div>
        </div>
    );
};

export default MiddleContent;