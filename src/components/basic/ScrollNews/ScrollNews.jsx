import React, { use } from 'react';
import { data } from '../../../../public/allData/allData';
import { Marquee } from 'tiny-marquee';
import { Link } from 'react-router';
const ScrollNews = () => {
    const scrollData = use(data);
    const breakingNews = scrollData.filter(item=>item.others.is_today_pick)
    
    
    return (
        <div className='w-full h-auto bg-gradient-to-r from-zinc-700 via-stone-600 to-slate-700 rounded-r-xl 3xs:pr-2 lg:pr-4'>
            <Marquee
            autoFill={true}
            pauseOn={"hover"}
            >
            <div className='flex items-center space-x-6 3xs: font-medium lg:font-semibold 3xs:text-xs lg:text-lg 3xs:py-2.5 lg:py-4'>
                {
                breakingNews.map(
                    news=>(
                        <p
                        className='3xs:text-sm lg:text-lg text-base-200' 
                        key={news.id}>
                        <Link to={`#`}>
                        {news.title}    
                        </Link>
                        </p>
                    )
                )   
                }      
            </div>
            </Marquee>
            
        </div>
    );
};

export default ScrollNews;