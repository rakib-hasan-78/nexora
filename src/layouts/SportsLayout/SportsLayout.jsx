import React, { lazy, Suspense } from "react";
import Hero from "./../../components/basic/Hero/Hero";
import sportsHeroBG from "../../assets/hero-sports-bg.webp";
import Search from "./../../components/basic/Search/Search";
import useNewsListing from "../../CustomHooks/useNewsListing/useNewsListing";
import customDataFilter from "../../components/customDataFilter/customDataFilter";
import { data } from "../../../public/allData/allData";
import { dataLoadHandler, searchHandler } from "../../utilities/reusableFunctions";
import { displayDataHandler } from './../../utilities/reusableFunctions';
import ErrorBoundary from "../../components/basic/Error/ErrorBoundary/ErrorBoundary";
import CardErrorFallback from "../../components/basic/Error/CardErrorFallback/CardErrorFallback";
import NewsCardSkeleton from "../../components/Skeletons/NewsCardSkeleton/NewsCardSkeleton";
import HomeLeftBar from './../../components/shared/HomeLeftBar/HomeLeftBar';
import AsideLogin from './../../components/shared/AsideLogin/AsideLogin';
const Card = lazy(()=>import('./../../components/basic/Card/Card'));
const Promotion = lazy(()=>import('./../../components/shared/Promotion/Promotion'));
import EmptyContent from './../../components/basic/EmptyContent/EmptyContent';


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
             searchSportsData.length > 0 ? 
              <div className="news-card-bg">
                {/* content title */}
                <div className="w-full py-6">
                  <h2 className="text-slate-300/80 font-bold text-center text-3xl">
                    Nexora News: sports {''}
                    <span className="text-pink-600">({searchSportsData.length})</span>
                  </h2>
                </div>
                {/* news card contents */}
                {
                  displaySportsData.map(news=>(
                    <ErrorBoundary
                    key={news.id}
                    fallback={ <CardErrorFallback/> }
                    >
                    <Suspense 
                    fallback={<NewsCardSkeleton/>}
                    >
                    <div className="w-full lg:w-[calc(50%-7px)]">
                      <Card data={news} />
                    </div>

                    </Suspense>
                    </ErrorBoundary>
                  ))
                }
              </div>
              :
              <div className="animate-fade-in">
                <EmptyContent title={searchNews} />
              </div>
            }
            {/* dynamic load more button compo */}
            <div className="w-full py-10 flex items-center justify-center">
              {
                searchSportsData.length>8 &&
                <button
                onClick={loadMoreHandler}
                className="btn btn-secondary 3xs:w-10/12 lg:w-4/12" 
 
                type="button">
                {
                  isLoading ? 
                  <>
                    <span className="loading loading-spinner loading-sm"></span>
                    <span>loading...</span>
                  </> :
                  displaySportsData.length < searchSportsData.length ?
                  'load more' :
                  'load less'
                }
                </button>
              }
            </div>
          </section>
          {/* right bar aside */}
          <aside className="col-span-1 lg:col-span-3 py-2 lg:sticky lg:top-5 lg:h-fit min-w-0">
            <Suspense fallback={<NewsCardSkeleton/>}>
              <HomeLeftBar classname={'w-full'} />
              <AsideLogin className={'lg:w-full my-1'} />
              <Promotion />
            </Suspense>
          </aside>
        </div>
      </main>
    </section>
  );
};

export default SportsLayout;
