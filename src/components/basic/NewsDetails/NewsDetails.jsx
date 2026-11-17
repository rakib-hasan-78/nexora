
import { Suspense, use } from "react";
import { format } from "date-fns";
import { Link, useLoaderData, useNavigate } from "react-router";

import demoImage from "../../../assets/defaultNews.jpg";
import user from "../../../assets/user.png";

import NewsCardSkeleton from "../../Skeletons/NewsCardSkeleton/NewsCardSkeleton";
import HomeLeftBar from "../../shared/HomeLeftBar/HomeLeftBar";
import Card from "./../Card/Card";

import { data } from "../../../../public/allData/allData";

const NewsDetails = () => {
  const navigate = useNavigate();
  const articleData = useLoaderData();

  const {
    image_url,
    title,
    author,
    details,
    tags = [],
  } = articleData;

  const mainData = use(data);

  // Related news based on common tags
  const relatedTaggedNews = mainData
    .filter(
      (item) =>
        item.id !== articleData.id &&
        item?.tags?.some((tag) => tags.includes(tag))
    )
    .slice(0, 4);

  return (
    <div className="w-full flex flex-col items-center">

      <main className="w-full lg:w-10/12 flex-1 px-3 2xs:px-4 xs:px-5 sm:px-6 lg:px-0">

        {/* Main content */}
        <section className="w-full py-5 2xs:py-6 sm:py-8">

          {/* Article and sidebar */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-5 xlg:gap-6 items-start">

            {/* News details */}
            <div className="col-span-1 lg:col-span-8 w-full min-w-0 flex flex-col gap-3 sm:gap-4">

              {/* News image */}
              <figure className="w-full aspect-video rounded-lg 2xs:rounded-xl overflow-hidden shadow-xl">
                <img
                  className="w-full h-full object-cover"
                  src={image_url || demoImage}
                  onError={(event) => {
                    event.currentTarget.src = demoImage;
                  }}
                  alt={title}
                />
              </figure>

              {/* Article details */}
              <article className="w-full min-w-0">

                {/* Article title and published date */}
                <div className="w-full mt-3 2xs:mt-4 sm:mt-6 px-1 2xs:px-2 sm:px-4 lg:px-5">

                  <h1 className="font-semibold text-xl 2xs:text-2xl xs:text-3xl sm:text-4xl lg:text-3xl xlg:text-4xl leading-snug">
                    {title}
                  </h1>

                  {/* Published date */}
                  <p className="w-full text-xs 2xs:text-sm text-black/45 py-3">
                    Published:
                    <span className="px-2">
                      {format(
                        new Date(author.published_date),
                        "dd MMMM yyyy"
                      )}
                    </span>
                  </p>

                </div>

                {/* Article description */}
                <div className="w-full px-1 2xs:px-2 sm:px-4 lg:px-5 pt-2">

                  {/* Author information */}
                  <div className="w-full border border-x-0 border-slate-600/40 py-3 flex items-center gap-3">

                    <figure className="w-8 h-8 2xs:w-9 2xs:h-9 rounded-full shrink-0 overflow-hidden">
                      <img
                        className="w-full h-full object-cover rounded-full"
                        src={author.img || user}
                        onError={(event) => {
                          event.currentTarget.src = user;
                        }}
                        alt={author.name}
                      />
                    </figure>

                    <span className="text-xs 2xs:text-sm sm:text-base text-stone-600/70">
                      {author.name}
                    </span>

                  </div>

                  {/* Article content */}
                  <div className="w-full pt-5 2xs:pt-6 sm:pt-7">

                    <p className="text-sm 2xs:text-base sm:text-lg leading-relaxed font-light whitespace-pre-line">
                      {details}
                    </p>

                  </div>

                </div>

              </article>

            </div>

            {/* Sidebar */}
            <aside className="col-span-1 lg:col-span-4 w-full min-w-0 py-2 lg:sticky lg:top-5 lg:h-fit">

              <Suspense fallback={<NewsCardSkeleton />}>
                <HomeLeftBar />
              </Suspense>

            </aside>

          </div>

          {/* Related tags */}
          <div className="w-full flex flex-col 2xs:flex-row 2xs:flex-wrap items-start 2xs:items-center gap-2 px-1 2xs:px-2 sm:px-4 lg:px-5 mt-6 sm:mt-8">

            <h5 className="uppercase font-extrabold italic text-gray-800/50 text-xs 2xs:text-sm shrink-0">
              Related tags:
            </h5>

            <div className="w-full 2xs:w-auto flex flex-wrap gap-2 font-extralight text-pink-700 lowercase italic text-xs 2xs:text-sm">

              {tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}

            </div>

          </div>

          {/* Return to all news */}
          <div className="w-full lg:w-8/12 px-1 2xs:px-2 sm:px-4 lg:px-5 mt-6 sm:mt-8">

            <button
              onClick={()=>navigate(-1)}
              className="btn btn-secondary w-full 2xs:w-10/12 sm:w-8/12 lg:w-6/12 py-5 2xs:py-6 uppercase font-bold text-xs 2xs:text-sm sm:text-base"
            >
              Return
            </button>

          </div>

        </section>

        {/* Related news section */}
        <section className="w-full mt-6 sm:mt-8 lg:mt-10 px-1 2xs:px-2 sm:px-4 lg:px-0">

          <h2 className="text-xl 2xs:text-2xl sm:text-3xl font-semibold text-mauve-800/80 capitalize">
            Related news
          </h2>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-3 2xs:gap-4 sm:gap-5 mt-4">

            {relatedTaggedNews.map((news) => (
              <Card
                key={news.id}
                styleClass="w-full bg-gradient-to-r from-stone-700 via-slate-600 to-zinc-700 rounded-xl 2xs:rounded-2xl border border-white/5"
                data={news}
              />
            ))}

          </div>

        </section>

      </main>

    </div>
  );
};

export default NewsDetails;
