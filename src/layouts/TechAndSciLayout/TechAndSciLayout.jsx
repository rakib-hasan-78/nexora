import React from 'react';
import Hero from './../../components/basic/Hero/Hero';
import backgroundImage from "../../assets/techSciHero.webp";
import Search from './../../components/basic/Search/Search';
import { data } from '../../../public/allData/allData';
import customDataFilter from '../../components/customDataFilter/customDataFilter';
import useNewsListing from '../../CustomHooks/useNewsListing/useNewsListing';
import { dataLoadHandler, displayDataHandler, searchHandler } from '../../utilities/reusableFunctions';
import ErrorBoundary from '../../components/basic/Error/ErrorBoundary/ErrorBoundary';
import CardErrorFallback from '../../components/basic/Error/CardErrorFallback/CardErrorFallback';
import { Suspense } from 'react';
import NewsCardSkeleton from '../../components/Skeletons/NewsCardSkeleton/NewsCardSkeleton';
import { lazy } from 'react';
const Card = lazy(()=>import('./../../components/basic/Card/Card'));
const Promotion = lazy(()=>import('../../components/shared/Promotion/Promotion'))
import HomeLeftBar from './../../components/shared/HomeLeftBar/HomeLeftBar';
import AsideLogin from './../../components/shared/AsideLogin/AsideLogin';

const TechAndSciLayout = () => {

    // ** custom hook for data handling 

    const {
        searchNews,
        setSearchNews,
        isLoading,
        setIsLoading,
        dataShow,
        setDataShow

        } = useNewsListing()

    // ** filter data for sci & tech
    const techAndSciData = customDataFilter(data, 'science','technology')
    // ** data interactivity for search handler 
    const searchData = searchHandler(techAndSciData, searchNews);
    // ** display data in UI 
    const displayData = displayDataHandler(searchData, dataShow);

    // load more handler 

    const loadMoreHandler =()=>{
        dataLoadHandler(setIsLoading, displayData, searchData,setDataShow)
    }
    

    return (
        <section className='w-full min-h-screen flex flex-col items-center'>
            <main className='w-full lg:w-10/12 flex-1 px-3 sm:px-5 lg:px-0'>
                {/* Hero section */}
                <section className='w-full'>
                    <Hero
                    height="min-h-screen lg:min-h-126"
                    bgImage={backgroundImage}
                    title="tec & sci"
                     paragraph={`
                            Discover the latest breakthroughs in science and technology, from groundbreaking innovations and emerging trends to the ideas shaping our digital future. Stay informed, stay curious, and explore what comes next.
                        `}
                        button={false}
                     />
                </section>
                <div className='basic'>
                    {/* main content */}
                    <section className='col-span-1 lg:col-span-9 min-w-0 py-3 flex flex-col items-center'>
                    {/* search component */}
                        <div className='w-full min-w-0'>
                        <Search
                        searchNews={searchNews}
                        setSearchNews={setSearchNews}
                        newsData={searchData}
                         />
                        </div>
                        <div className='news-card-bg'>
                        <div className='w-full py-6'>
                            <h2 className='text-slate-300/80 font-bold text-center text-3xl'>Nexora News: tech & sci <span className='text-pink-600'>({searchData.length})</span></h2>
                        </div>
                        {
                            displayData.map(news=>(
                                <ErrorBoundary
                                key={news.id}
                                fallback={<CardErrorFallback/>}
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
                        <div className='w-full py-10 flex items-center justify-center'>
                        {
                        displayData.length>=8 &&
                        <button
                        onClick={loadMoreHandler} 
                        className='btn btn-secondary 3xs:w-10/12 lg:w-4/12'>
                        {
                            isLoading ? 
                            <>
                            <span className="loading loading-spinner loading-sm"></span>
                            <span>loading...</span>
                            </>
                            :
                            dataShow < searchData.length ?
                            'load more'
                            :
                            'load less'
                        }
                        </button>

                        }
                        </div>
                        </div>
                    </section>
                    {/* left-side bar */}
                    <aside className='col-span-1 lg:col-span-3 py-2 lg:sticky lg:top-5 lg:h-fit min-w-0'>
                    <Suspense fallback={<NewsCardSkeleton/>}>
                        <HomeLeftBar classname='w-full' />
                        <AsideLogin className={'lg:w-full my-1'} />
                        <Promotion />
                    </Suspense>

                    </aside>
                </div>
            </main>
        </section>
    );
};

export default TechAndSciLayout;