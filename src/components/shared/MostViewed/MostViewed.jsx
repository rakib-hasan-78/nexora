import React, { use } from 'react';
import { data } from '../../../../public/allData/allData';
import customSort from '../../../customSort/customSort';
import Card from '../../basic/Card/Card';

const MostViewed = () => {
    const mainData = use(data);
    const mostViewedData = customSort(mainData, 'total_view');
    return (
        <div className='w-full py-3 max-h-150 bg-gradient-to-r from-stone-700 via-slate-600 to-zinc-700 flex flex-col gap-3 rounded-xl  overflow-y-auto
  scrollbar-thin
  scrollbar-thumb-slate-400
  scrollbar-track-slate-800
  scrollbar-thumb-rounded-full
  scrollbar-track-rounded-full'>
            {
                mostViewedData.map((item)=>(
                    <Card key={item.id} data={item} />
                ))
            }
        </div>
    );
};

export default MostViewed;