
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
const Card =lazy(()=> import("../../components/basic/Card/Card"));
import ErrorBoundary from './../../components/basic/Error/ErrorBoundary/ErrorBoundary';
import CardErrorFallback from "../../components/basic/Error/CardErrorFallback/CardErrorFallback";
import NewsCardSkeleton from "../../components/Skeletons/NewsCardSkeleton/NewsCardSkeleton";


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

            <main className="w-full lg:w-10/12 flex-1 px-3 sm:px-5 lg:px-0">

                {/* Hero section */}
                <section className="w-full">

                    <Hero
                        height="min-h-screen lg:min-h-126"
                        bgImage={backgroundImage}
                        title="all news"
                        paragraph={`
                            Uncovering the stories that matter. Dive deep into global politics, breaking technology breakthroughs, culture, and sports with trusted, unbiased reporting from our newsrooms.
                        `}
                        button={false}
                    />

                </section>


                {/* Main content grid */}
                <div className="basic">


                    {/* Left sidebar */}
                    <aside className="col-span-1 lg:col-span-3 py-2 lg:sticky lg:top-5 lg:h-fit min-w-0 flex flex-col items-center gap-2">
                        <Suspense 
                        fallback={ <SidebarSkeleton/> }>
                        <Categories
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />

                        <HomeLeftBar classname="w-full" />
                        
                        </Suspense>


                    </aside>


                    {/* Main news section */}
                    <section className="col-span-1 lg:col-span-6 min-w-0 py-3 flex flex-col items-center">


                        {/* Search component */}
                        <div className="w-full min-w-0">

                            <Search
                                searchNews={searchNews}
                                setSearchNews={setSearchNews}
                                newsData={search}
                            />

                        </div>


                        {/* News cards */}
                        <div className="w-full min-w-0 mt-8 md:mt-12 lg:mt-18 flex flex-col gap-3.5 bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 rounded-xl md:rounded-2xl shadow-2xl border border-white/10 p-3 sm:p-4 md:p-6">

                         <div className='w-full py-6'>
                            <h2 className='text-slate-300/80 font-bold text-center text-3xl'>Nexora News: <span className='text-pink-600'>({search.length})</span></h2>
                        </div>
                        
                            {displayData.map((news) => (
                                <ErrorBoundary 
                                key={news.id}
                                fallback={ <CardErrorFallback/>}>
                                <Suspense 
                                fallback={<NewsCardSkeleton/> }>
                                <div className="w-full min-w-0">

                                    <Card data={news} />

                                </div>

                                </Suspense>
                                </ErrorBoundary>
                            ))}

                        </div>


                        {/* Load more / Load less */}
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


                    {/* Right sidebar */}
                    <aside className="col-span-1 lg:col-span-3 py-2 lg:sticky lg:top-5 lg:h-fit min-w-0">

                        <div className="w-full flex flex-col items-center gap-3">

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
