import React, { useState } from 'react';
import MostViewed from './../MostViewed/MostViewed';


const HomeLeftBar = ({newsData}) => {
    const [tab, setTab] = useState('mostRead');
    
    return (
        <div className='w-full min-h-full  flex flex-col py-6'>
            <MostViewed />            
        </div>
    );
};

export default HomeLeftBar;