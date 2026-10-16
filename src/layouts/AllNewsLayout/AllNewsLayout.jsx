import React from 'react';
import Hero from './../../components/basic/Hero/Hero';
import backgroundImage from '../../assets/all news.webp';

const AllNewsLayout = () => {
    return (
        <section className='w-full min-h-screen flex flex-col items-center'>
            <main className=' w-10/12 flex-1'>
                {/* hero section */}
                <Hero height={`3xs:min-h-screen lg:min-h-126`}
                bgImage={backgroundImage}
                title={'all news'}
                paragraph={`
                Uncovering the stories that matter. Dive deep into global politics, breaking technology breakthroughs, culture, and sports with trusted, unbiased reporting from our newsrooms.
                `}
                button={false}
                 />
            </main>
        </section>
    );
};

export default AllNewsLayout;