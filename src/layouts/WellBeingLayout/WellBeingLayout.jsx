import React, { lazy, Suspense } from "react";
import Hero from "./../../components/basic/Hero/Hero";
import HeroImage from "../../assets/well-being-hero.webp";
import Search from "./../../components/basic/Search/Search";
import useNewsListing from "../../CustomHooks/useNewsListing/useNewsListing";
import customDataFilter from "../../components/customDataFilter/customDataFilter";
import { data } from "../../../public/allData/allData";
import {
  dataLoadHandler,
  displayDataHandler,
  searchHandler,
} from "../../utilities/reusableFunctions";
import ErrorBoundary from "../../components/basic/Error/ErrorBoundary/ErrorBoundary";
import CardErrorFallback from "../../components/basic/Error/CardErrorFallback/CardErrorFallback";
import NewsCardSkeleton from "../../components/Skeletons/NewsCardSkeleton/NewsCardSkeleton";
const Card = lazy(() => import("./../../components/basic/Card/Card"));
import HomeLeftBar from './../../components/shared/HomeLeftBar/HomeLeftBar';
import AsideLogin from './../../components/shared/AsideLogin/AsideLogin';
const Promotion = lazy(()=>import('./../../components/shared/Promotion/Promotion'));

const WellBeingLayout = () => {
  const {
    searchNews,
    setSearchNews,
    isLoading,
    setIsLoading,
    dataShow,
    setDataShow,
  } = useNewsListing();
  //** * integrating related data
  const wellbeingData = customDataFilter(data, "health", "entertainment");
  //** data processing for inside searching;
  const wellbeingSearchHandler = searchHandler(wellbeingData, searchNews);
  // ** display data on UI
  const wellbeingDisplayHandler = displayDataHandler(
    wellbeingSearchHandler,
    dataShow,
  );
  // ** load more data handler
  const loadMoreHandler = () => {
    dataLoadHandler(
      setIsLoading,
      wellbeingDisplayHandler,
      wellbeingSearchHandler,
      setDataShow,
    );
  };

  return (
    <section className="w-full min-h-screen flex flex-col items-center">
      <main className="w-full lg:w-10/12 flex-1 px-3 sm:px-5 lg:px-0">
        {/* hero section */}
        <section className="w-full">
          <Hero height="min-h-screen lg:min-h-126"
           bgImage={HeroImage}
           title="Nurturing Body & Mind"
           paragraph="Stay informed on everything you need to thrive in a demanding world."
           button={false}
            />
        </section>
        <div className="basic">
          {/* main body content  */}
          <section className="col-span-1 lg:col-span-9 min-w-0 py-3 flex flex-col items-center">
            {/* search component */}
            <div className="w-full min-w-0">
              <Search
                newsData={wellbeingSearchHandler}
                searchNews={searchNews}
                setSearchNews={setSearchNews}
              />
            </div>
            {searchNews.length === 0 && (
              <div className="news-card-bg">
                {/* content title */}
                <div className="w-full py-6">
                  <h2 className="text-slate-300/80 font-bold text-center text-3xl">
                    Nexora News: wellbeing{" "}
                    <span className="text-pink-600">
                      ({wellbeingSearchHandler.length})
                    </span>
                  </h2>
                </div>

                {wellbeingDisplayHandler.map((news) => (
                  <ErrorBoundary key={news.id} fallback={<CardErrorFallback />}>
                    <Suspense fallback={<NewsCardSkeleton />}>
                      <div className="w-full lg:w-[calc(50%-7px)]">
                        <Card data={news} />
                      </div>
                    </Suspense>
                  </ErrorBoundary>
                ))}
                {/* load more button  */}
                <div className="w-full py-10 flex items-center justify-center">
                  {wellbeingDisplayHandler.length >= 8 && (
                    <button
                      onClick={loadMoreHandler}
                      type="button"
                      className="btn btn-secondary 3xs:w-10/12 lg:w-4/12"
                    >
                      {isLoading ? (
                        <>
                          <span className="loading loading-spinner loading-sm"></span>
                          <span>loading....</span>
                        </>
                      ) : dataShow < wellbeingSearchHandler.length ? (
                        "load more"
                      ) : (
                        "load less"
                      )}
                    </button>
                  )}
                </div>
              </div>
            )}
          </section>
          {/* right sidebar */}
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

export default WellBeingLayout;
