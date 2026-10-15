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

                <div className=" flex items-center justify-between w-11/12 mx-auto">
                    <h2 className='3xs:text-sm lg:text-2xl font-bold text-slate-300 3xs:w-8/12 lg:w-auto'>{title}</h2>
                    <Link>
                    <span className='flex items-center gap-2 text-slate-200 font-light 3xs:text-xs lg:text-base'>
                    see all
                    <BsArrowRight />
                    </span>
                    </Link>
                </div>

                <div className=' w-full h-auto grid 3xs:grid-cols-1 lg:grid-cols-2  lg:gap-4 lg:px-6 lg:py-4'>
                    {newsData.map(data=>(
                        <Card key={data.id} data={data} />
                    ))}
                </div>

                </div>
        </div>
    );
};

export default MiddleContent;