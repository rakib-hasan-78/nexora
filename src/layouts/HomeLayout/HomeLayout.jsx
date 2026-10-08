import React, { use } from 'react';

import Slide from './../../components/basic/Slide/Slide';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { data } from '../../../public/allData/allData';
import { Suspense } from 'react';
import SliderSkeleton from '../../components/Skeletons/SliderSkeleton/SliderSkeleton';

const HomeLayout = () => {
    const newsData = use(data);
    const sliderData = newsData.filter(data=>data.tags.includes("politics"));
    console.log('sortef data',sliderData);
    return (
        <div className='w-full flex flex-col justify-center items-center'>
        {/* sliders */}
            <section className='w-10/12 grid grid-cols-12 gap-4'>
                <div className='col-span-7 rounded-2xl shadow-2xl'>
                
                <Suspense fallback={SliderSkeleton}>
                <Swiper
                  modules={[Autoplay]}
                    slidesPerView={1}
                    loop={true}
                    speed={700}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                >

                {
                    sliderData.map((data)=>(
                    <SwiperSlide
                    key={data.id}
                    >
                    {
                    <Slide data={data} />
                    } 
                    </SwiperSlide>

                    ))
                }
                </Swiper>
                </Suspense>
                </div>
                {/*  */}
                <div className='col-span-5 border bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 rounded-xl shadow-2xl flex items-center justify-start'>
                    <div className='w-10/12 border border-white/30 bg-white/5 backdrop-blur-md rounded-xl shadow-2xl relative overflow-hidden before:absolute before:inset-0 before:bg-linear-to-tl before:from-white/5 before:via-transparent before:to-white/10 p-3 text-slate-200'>glass</div>
                </div>
            </section>
        </div>
    );
};

export default HomeLayout;

