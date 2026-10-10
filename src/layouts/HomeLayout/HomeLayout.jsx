import React, { use } from 'react';

import Slide from './../../components/basic/Slide/Slide';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { data } from '../../../public/allData/allData';
import { Suspense } from 'react';
import SliderSkeleton from '../../components/Skeletons/SliderSkeleton/SliderSkeleton';
import { HiArrowLongLeft,  HiArrowLongRight  } from "react-icons/hi2";
import NewsToast from './../../components/basic/NewsToast/NewsToast';

const HomeLayout = () => {
    const newsData = use(data);
    const sliderData = newsData.filter(data=>data.tags.includes("politics"));
    console.log('sortef data',sliderData);
    return (
        <div className='w-full flex flex-col justify-center items-center'>
        {/* sliders */}
            <section className='w-10/12 grid grid-cols-12 gap-4'>
                <div className='col-span-6 rounded-2xl shadow-2xl'>
                
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
                <div className='col-span-6 border bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 rounded-xl shadow-2xl flex flex-col items-center justify-start p-3'>
                    <div className='w-full flex items-center justify-between px-4 mt-8 pb-6'>
                        <h2 className='text-slate-200 text-3xl font-bold'>
                            trendy news
                        </h2>
                        <div className='text-2xl flex items-center justify-center space-x-3'>
                            <button className='cursor-pointer text-slate-300 hover:text-gray-500 transition-all ease-in delay-100'>
                            <HiArrowLongLeft />
                            </button>
                            <button className='cursor-pointer text-slate-300 hover:text-gray-500 transition-all ease-in delay-100'>
                            <HiArrowLongRight />
                            </button>
                        </div>
                    </div>
                    <div className='grid grid-cols-2  gap-4 p-2'>
                        <NewsToast />
                        <NewsToast />
                        <NewsToast />
                        <NewsToast />
                        <NewsToast />
                        <NewsToast />
                        <NewsToast />
                        <NewsToast />

                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomeLayout;

