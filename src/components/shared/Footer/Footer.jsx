import React from 'react';
import CTA from './../../basic/CTA/CTA';
import FooterLinks from './../../basic/FooterLinks/FooterLinks';
import Copyright from './../../basic/Copyright/Copyright';
import FooterLargeImage from './../../basic/FooterLargeImage/FooterLargeImage';

const Footer = () => {
    return (
        <footer className='bg-linear-to-tl from-zinc-800 via-gray-700 to-slate-800 pt-6'>
        <section className='w-9/12 mx-auto pt'>
        <CTA />
        </section>
        <section className='w-9/12 mx-auto'>
        <FooterLinks />
        </section>
        <section className='w-9/12 mx-auto border-t rounded-full border-slate-500/70'>
        </section>
        <section className='w-9/12 mx-auto'>
            <Copyright />
        </section>
        <section className='w-9/12 mx-auto'>
          <div>
            <FooterLargeImage />
          </div>  
        </section>
            
        </footer>
    );
};

export default Footer;