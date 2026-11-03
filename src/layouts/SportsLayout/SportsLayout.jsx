import React from "react";
import Hero from "./../../components/basic/Hero/Hero";
import sportsHeroBG from "../../assets/hero-sports-bg.webp";
import Search from "./../../components/basic/Search/Search";
import useNewsListing from "../../CustomHooks/useNewsListing/useNewsListing";
import customDataFilter from "../../components/customDataFilter/customDataFilter";
import { data } from "../../../public/allData/allData";
import { dataLoadHandler, searchHandler } from "../../utilities/reusableFunctions";
import { displayDataHandler } from './../../utilities/reusableFunctions';
const SportsLayout = () => {
    const {
    searchNews,
    setSearchNews,
    isLoading,
    setIsLoading,
    dataShow,
    setDataShow,
        } = useNewsListing()
    const sportsData = customDataFilter(data, 'sports');
    const searchSportsData = searchHandler(sportsData, searchNews);
    const displaySportsData = displayDataHandler(searchSportsData, dataShow);
    const loadMoreHandler =()=>{
        dataLoadHandler(setIsLoading,displaySportsData, searchSportsData, setDataShow )
    }
  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <main className="w-full lg:w-10/12 flex-1 px-3 sm:px-5 lg:px-0">
        {/* hero section */}
        <section className="w-full">
          <Hero 
          height="min-h-screen lg:min-h-126" 
          bgImage={sportsHeroBG} 
          title="Sports"
          paragraph="Discover the grit, the strategy, and the unforgettable journeys of the local sports icons who turned ordinary roads into arenas of historic triumph."
          button={false}
          />
        </section>
        <div className="basic">
          {/* main content body */}
          <section className="col-span-1 lg:col-span-9 min-w-0 py-3 flex flex-col items-center">
            {/* search component */}
            <div className="w-full min-w-0">
              <Search 
              newsData={searchSportsData}
              searchNews={searchNews}
              setSearchNews={setSearchNews}
               />
            </div>
            {
              <div className="news-card-bg">
                {/* content title */}
                <div className="w-full py-6">
                  <h2 className="text-slate-300/80 font-bold text-center text-3xl">
                    Nexora News: sports
                    <span className="text-pink-600">()</span>
                  </h2>
                </div>
                {/* news card contents */}

              </div>
            }
          </section>
        </div>
      </main>
    </section>
  );
};

export default SportsLayout;
