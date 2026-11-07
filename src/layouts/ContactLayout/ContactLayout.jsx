import React from 'react';
import Hero from './../../components/basic/Hero/Hero';

const ContactLayout = () => {
    return (
        <section className='w-full min-h-screen flex flex-col items-center'>
            <main className='w-full lg:w-10/12 flex-1 px-3 sm:px-5 lg:px-0'>
            {/* hero section */}
                <section className='w-full'>
                    <Hero
                    title='contact us'
                    paragraph=''
                    button={false}
                     />
                </section>
                <section className='basic'>
                    <div className='col-span-1 lg:col-span-12 py-2 flex flex-col items-center justify-center text-center gap-4 px-24'>
                    <h2 className='text-4xl font-extrabold text-zinc-900/50'>get in touch with us</h2>
                    <p className='text-xl text-zinc-700/60 font-light'>you can directly contact our team for inform us any news queries just fill up form given below. besides, you can request a meeting schedule for any specific purposes as well.</p>
                    </div>
                </section>
            </main>
        </section>
    );
};

export default ContactLayout;