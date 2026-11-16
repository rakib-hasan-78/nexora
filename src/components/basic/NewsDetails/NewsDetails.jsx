import React, { Suspense } from "react";
import { format } from "date-fns";
import imageDemo from "../../../assets/demo-card-thumbnail.png";
import user from "../../../assets/user.png";
import NewsCardSkeleton from "../../Skeletons/NewsCardSkeleton/NewsCardSkeleton";
import HomeLeftBar from "../../shared/HomeLeftBar/HomeLeftBar";
import { Link } from "react-router";


const NewsDetails = () => {
  const nowDate = "2025-04-22T17:00:00.000Z";
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <main className="w-10/12 mx-auto flex-1">
        {/* main content */}
        <section className="w-full flex 3xs:flex-col lg:flex-row flex-wrap items-start justify-between">
          {/* news details  */}
          <div className="3xs:w-full lg:w-8/12 py-2 flex flex-col space-y-2">
            {/* image */}
            <figure className="w-full h-112 rounded-xl overflow-hidden shadow-2xl">
              <img src={imageDemo} />
            </figure>
            {/* article in detail */}
            <article className="w-full">
              {/* title */}
              <div className="w-full mt-6 px-6 pt-4">
                <h1 className="font-semibold text-4xl">
                  Bangladesh–Malaysia labour migration: Can the new initiative
                  break the cycle of exploitation?
                </h1>
                {/* published date */}
                <p className="w-full text-xs text-black/45 py-3">
                  published :
                  <span className="px-2">
                    {format(new Date(nowDate), "dd MMMM yyyy")}
                  </span>
                </p>
              </div>
              {/* article description */}
              <div className="w-full p-6">
                {/* author */}
                <div className="w-full border border-x-0 border-slate-600/40 py-2 flex items-center space-x-3">
                  <figure className="w-8 h-8 rounded-full">
                    <img src={user} alt="" />
                  </figure>
                  <span className="text-sm text-stone-600/60">
                    abdullah heel ma'ruf al baqi
                  </span>
                </div>
                {/* details */}
                <div className="w-full pt-7">
                  <p className="text-lg pr-1.5 font-light">
                    It is encouraging that labour migration from Bangladesh to
                    Malaysia is likely to resume at the end of this month.
                    However, given the history of repeated suspensions, a more
                    important question is whether this renewed initiative will
                    import HomeLeftBar from './../../shared/HomeLeftBar/HomeLeftBar';
address the structural problems that have long plagued the
                    recruitment process. Malaysia has suspended labour
                    recruitment from Bangladesh several times: first in the
                    1990s, then between 2008 and 2012, again from 2019 to 2022,
                    and most recently in May 2024. The recurring allegations
                    behind these suspensions include corruption in recruitment,
                    exorbitant migration costs, indebtedness, unemployment and
                    severe exploitation of migrant workers. To address these
                    problems, particularly excessive migration costs and the
                    resulting indebtedness, both governments have repeatedly
                    experimented with alternative recruitment mechanisms. In
                    2012, Bangladesh and Malaysia signed a memorandum of
                    understanding (MoU) to recruit workers through a
                    government-to-government (G2G) mechanism. Despite
                    considerable interest among prospective migrants, only a
                    small number could migrate because of limited institutional
                    capacity and delays in the recruitment process on both
                    sides. The initiative failed to achieve its target of
                    recruiting 30,000 workers.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <aside className="3xs:w-full lg:w-3/12 py-2 lg:sticky lg:top-5 lg:h-fit min-w-0">
            <Suspense fallback={<NewsCardSkeleton/>} >
            <HomeLeftBar />
            </Suspense>
          </aside>
          <div className="w-full flex space-x-1.5 px-6">
            <h5 className="uppercase font-extrabold italic text-gray-800/50">related tags: </h5>
            <div className="w-auto flex space-x-1.5 font-extralight text-pink-700 lowercase italic">
              <span>labu</span>
              <span>labu</span>
              <span>labu</span>
              <span>labu</span>
            </div>
          </div>
          {/* returning to check all the news */}
          <div className="3xs:w-full lg:w-7/12 p-6">
          <Link
          to={'/all-news'}
          className="btn btn-secondary 3xs:w-10/12 lg:w-6/12 py-6 uppercase font-bold text-lg"
           type="button"
           >
            return to all news
           </Link>
          </div>
        </section>
        {/*  */}
      </main>
    </div>
  );
};

export default NewsDetails;



