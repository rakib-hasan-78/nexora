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
                hello world
            </main>
        </section>
    );
};

export default ContactLayout;