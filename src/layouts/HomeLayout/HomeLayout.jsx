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
            <section className='w-10/12 grid grid-cols-12 gap-2'>
                <div className='col-span-8'>
                
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
                <div className='col-span-4 bg-amber-500 py-1'></div>
            </section>
        </div>
    );
};

export default HomeLayout;

