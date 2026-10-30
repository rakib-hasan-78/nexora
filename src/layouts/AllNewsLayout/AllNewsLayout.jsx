import React, { lazy, Suspense, use, useState } from "react";
import Hero from "./../../components/basic/Hero/Hero";
import backgroundImage from "../../assets/all news.webp";
import Categories from "./../../components/shared/Categories/Categories";
import HomeLeftBar from "./../../components/shared/HomeLeftBar/HomeLeftBar";
import AsideLogin from "./../../components/shared/AsideLogin/AsideLogin";
import SocialBtn from "./../../components/shared/SocialBtn/SocialBtn";
import SidebarSkeleton from "../../components/Skeletons/SidebarSkeleton/SidebarSkeleton";
import Search from "./../../components/basic/Search/Search";
import { data } from "../../../public/allData/allData";
import Card from "./../../components/basic/Card/Card";
import useNewsListing from "../../CustomHooks/useNewsListing/useNewsListing";
import {
  categoryHandler,
  dataLoadHandler,
  displayDataHandler,
  searchHandler,
} from "../../utilities/reusableFunctions";

const Promotion = lazy(
  () => import("../../components/shared/Promotion/Promotion"),
);

const AllNewsLayout = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const useData = use(data);
  const {
    searchNews,
    setSearchNews,
    isLoading,
    setIsLoading,
    dataShow,
    setDataShow,
  } = useNewsListing();

  // category to selected data
  const categories = categoryHandler(
    useData,
    selectedCategory,
    "others.is_today_pick",
  );

  // data get through search

  const search = searchHandler(categories, searchNews);

  // data shown to UI

  const displayData = displayDataHandler(search, dataShow);

  // data load handler

  const loadHandler = () => {
    dataLoadHandler(setIsLoading, displayData, search, setDataShow);
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <main className=" w-10/12 flex-1">
        {/* hero section */}
        <section>
          <Hero
            height={`3xs:min-h-screen lg:min-h-126`}
            bgImage={backgroundImage}
            title={"all news"}
            paragraph={`
                Uncovering the stories that matter. Dive deep into global politics, breaking technology breakthroughs, culture, and sports with trusted, unbiased reporting from our newsrooms.
                `}
            button={false}
          />
        </section>
        <div className="w-full mt-16 py-4 grid grid-cols-12 gap-5 items-start-safe">
          <aside className="col-span-3 py-2 top-0 h-fit sticky flex flex-col items-center space-y-2">
            <Categories
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <HomeLeftBar classname={`w-full`} />
          </aside>
          <section className="col-span-6 py-3 flex flex-col items-center">
            <Search
              searchNews={searchNews}
              setSearchNews={setSearchNews}
              newsData={search}
            />
            <div className="w-full mt-18 flex flex-col space-y-3.5 bg-emerald-600 bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 rounded-2xl shadow-2xl border border-white/10 p-6 ">
              {displayData.map((news) => (
                <div key={news.id} className="">
                  <Card key={news.id} data={news} />
                </div>
              ))}
            </div>
            <div className="w-full py-3 flex items-center justify-center">
              {displayData.length >= 8 && (
                <button
                  onClick={loadHandler}
                  className="btn btn-secondary"
                >
                  {isLoading ? (
                    <>
                      <span className="loading loading-spinner loading-sm"></span>
                      <span>loading...</span>
                    </>
                  ) : dataShow < search.length ? (
                    "load more"
                  ) : (
                    "load less"
                  )}
                </button>
              )}
            </div>
          </section>
          <aside className="col-span-3 py-2 h-fit top-0  sticky">
            <div className="w-full h-auto flex flex-wrap items-start justify-end space-y-3">
              <AsideLogin />
              <SocialBtn />
              <Suspense fallback={<SidebarSkeleton />}>
                <Promotion />
              </Suspense>
            </div>
          </aside>
        </div>
      </main>
    </section>
  );
};

export default AllNewsLayout;
