import React, { use } from "react";

import Slide from "./../../components/basic/Slide/Slide";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { data } from "../../../public/allData/allData";
import { Suspense } from "react";
import SliderSkeleton from "../../components/Skeletons/SliderSkeleton/SliderSkeleton";
import DisplayNewsSection from "./../../components/shared/DisplayNewsSection/DisplayNewsSection";
import HomeLeftBar from "./../../components/shared/HomeLeftBar/HomeLeftBar";
import addSection from "../../../src/assets/bg.png";
import MainContent from './../../components/shared/MainContent/MainContent';
import classroom from '../.././assets/class.png';
import AsideLogin from './../../components/shared/AsideLogin/AsideLogin';

const HomeLayout = () => {
  const newsData = use(data);
  const sliderData = newsData.filter((data) => data.tags.includes("politics"));
  const trendyNews = newsData.filter((data) => data.others.is_trending);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      {/* sliders */}
      <section className="3xs:w-full lg:w-10/12 grid grid-cols-12 gap-4">
        <div className="3xs:col-span-12 lg:col-span-6 rounded-2xl shadow-2xl">
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
              {sliderData.map((data) => (
                <SwiperSlide key={data.id}>{<Slide data={data} />}</SwiperSlide>
              ))}
            </Swiper>
          </Suspense>
        </div>
        {/*  */}
        <div className="3xs:col-span-12 lg:col-span-6 border bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 rounded-xl shadow-2xl flex flex-col items-center justify-start p-3">
          <DisplayNewsSection
            sectionTitle={"trendy news"}
            newsData={trendyNews}
          />
        </div>
      </section>
      <div className="3xs:w-full lg:w-10/12 my-5 py-2 grid grid-cols-12 items-start gap-3">
        {/* left aside */}
        <aside className="3xs:col-span-12 lg:col-span-4 min-h-full  flex flex-wrap items-center justify-start gap-3 py-8">
          <AsideLogin />
          <HomeLeftBar />
          <div className="w-11/12">
          <img src={classroom} alt="class-room" />
          </div>
          <div className="3xs:w-full lg:w-10/12 overflow-hidden rounded-2xl shadow-2xl">
          <img src={addSection} alt="add-section" />
          </div>
        </aside>
        <section className="3xs:col-span-12 lg:col-span-8 py-8">
          <MainContent />
        </section>
      </div>
    </div>
  );
};

export default HomeLayout;
