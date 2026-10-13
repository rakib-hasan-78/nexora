import React, { use } from 'react';
import { data } from '../../../../public/allData/allData';

const MainContent = () => {
    const mainData = use(data);
    const sciTechData = mainData.filter(item=>
        item.tags.some(tag=>
        ["technology","science"].includes(tag)
        )
    ).slice(0,3)
    

    return (
        <div className='w-full flex flex-col bg-green-500'>
            {sciTechData.length}
        </div>
    );
};

export default MainContent;