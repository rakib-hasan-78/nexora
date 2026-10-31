import React from 'react';
import Hero from './../../components/basic/Hero/Hero';
import backgroundImage from "../../assets/techSciHero.webp";

const TechAndSciLayout = () => {
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
            </main>
        </section>
    );
};

export default TechAndSciLayout;