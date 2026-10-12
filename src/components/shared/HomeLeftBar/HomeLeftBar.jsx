import React, { useState } from 'react';
import MostViewed from './../MostViewed/MostViewed';
import TopRated from '../TopRated/TopRated';


const HomeLeftBar = () => {
    const [tab, setTab] = useState('mostRead');
    
    return (
        <div className='w-10/12 min-h-full bg-gradient-to-r from-stone-700 via-slate-600 to-zinc-700 gap-3 rounded-xl  flex flex-col py-6'>
            <div className='w-full flex items-center justify-start px-1.5'>
                <button onClick={()=>setTab('mostRead')} className='btn'>most viewed news</button>
                <button onClick={()=>setTab('topRated')} className='btn'>top rated news</button>
            </div>
            {
                tab === 'mostRead'&&
                <MostViewed />
            }
            {
                tab==='topRated'&&
                <TopRated />
            }           
        </div>
    );
};

export default HomeLeftBar;