import React from 'react';
import { data } from '../../../../public/allData/allData';
import MiddleContent from './../../basic/MiddleContent/MiddleContent';
import customDataFilter from '../../customDataFilter/customDataFilter';

const MainContent = () => {
    // science & technology related data
    const sciTechData = 
    customDataFilter(
        data,   
        "technology",
    "science").
    slice(0,2)
    // wellbeing filtered data
    const wellBeingData = 
    customDataFilter(
        data, 
        'health').
        slice(0,2);
    // sports news 
    const sportsDataFilter = 
    customDataFilter(
        data,
        'sports'
    ).slice(0,2)
    
    return (
        <div className='w-full flex flex-col space-y-3'>
            <MiddleContent 
            title={`science & technology`} 
            newsData={sciTechData} />

            <MiddleContent
            title={'well-being'}
            newsData={wellBeingData}
             />
             <MiddleContent 
             title={'sports'}
             newsData={sportsDataFilter}
              />
        </div>
    );
};

export default MainContent;