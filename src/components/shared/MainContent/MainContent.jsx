import React, { use } from 'react';
import { data } from '../../../../public/allData/allData';
import MiddleContent from './../../basic/MiddleContent/MiddleContent';

const MainContent = () => {
    // first three news for science & technology
    const mainData = use(data);
    const sciTechData = mainData.filter(item=>
        item.tags.some(tag=>
        ["technology","science"].includes(tag)
        )
    ).slice(0,2)
    

    return (
        <div className='w-full flex flex-col'>
            <MiddleContent newsData={sciTechData} />
        </div>
    );
};

export default MainContent;