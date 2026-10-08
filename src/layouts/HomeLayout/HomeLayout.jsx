import React from 'react';

import Slide from './../../components/basic/Slide/Slide';
const HomeLayout = () => {
    return (
        <div className='w-full flex flex-col justify-center items-center'>
        {/* sliders */}
            <section className='w-10/12 grid grid-cols-12 gap-2'>
                <div className='col-span-8'>
                <Slide />
                </div>
                <div className='col-span-4 bg-amber-500 py-1'></div>
            </section>
        </div>
    );
};

export default HomeLayout;