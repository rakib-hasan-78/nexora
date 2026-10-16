import React from "react";
import Hero from "./../../components/basic/Hero/Hero";
import backgroundImage from "../../assets/all news.webp";

const AllNewsLayout = () => {
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
        <div className="w-full mt-16 py-4 grid grid-cols-12 gap-5 items-center-safe">
          <aside className="col-span-3 py-2 bg-amber-200">
            <h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
              consectetur.
            </h1>
          </aside>
          <section className="col-span-6 py-3 border">
            <h3>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              magnam quod incidunt quibusdam amet.
            </h3>
          </section>
          <aside className="col-span-3 py-2 bg-amber-200">
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing.</h3>
          </aside>
        </div>
      </main>
    </section>
  );
};

export default AllNewsLayout;
