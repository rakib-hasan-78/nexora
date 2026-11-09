
import React from 'react';
import Hero from './../../components/basic/Hero/Hero';
import ContactForm from './../../components/basic/ContactForm/ContactForm';
import ContactInstruction from './../../components/basic/ContactInstruction/ContactInstruction';
import ContactMap from './../../components/basic/ContactMap/ContactMap';

const ContactLayout = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center">

      <main className="w-full lg:w-10/12 flex-1 px-3 2xs:px-4 xs:px-5 sm:px-6 lg:px-0">

        {/* Hero section */}
        <section className="w-full">
          <Hero
            title="contact us"
            paragraph=""
            button={false}
          />
        </section>

        {/* Contact section */}
        <section className="w-full max-w-5xl mx-auto py-8 2xs:py-10 xs:py-12 sm:py-14 md:py-16 lg:py-18">

          {/* Heading and description */}
          <div className="w-full flex flex-col items-center justify-center text-center gap-3 2xs:gap-3.5 sm:gap-4 mb-7 2xs:mb-8 sm:mb-10 px-1 2xs:px-2 xs:px-3">

            <h2 className="text-xl 2xs:text-2xl xs:text-3xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900/70 capitalize">
              get in touch with us
            </h2>

            <p className="text-xs 2xs:text-sm xs:text-base sm:text-base lg:text-lg xlg:text-xl text-zinc-700/70 font-light leading-relaxed max-w-4xl">
              You can directly contact our team to share news tips,
              ask questions, or discuss any enquiries. Simply fill
              out the form below. You can also request a meeting
              schedule for specific purposes.
            </p>

          </div>

          {/* Form and additional information */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-4 2xs:gap-5 sm:gap-6 lg:gap-5 xlg:gap-6 items-stretch">

            {/* Contact form */}
            <div className="col-span-1 lg:col-span-7 w-full min-w-0 border border-white/10 rounded-lg 2xs:rounded-xl p-3 2xs:p-4 xs:p-5 sm:p-6 lg:p-5 xlg:p-6 2xl:p-8 shadow-sm bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800">

              <ContactForm />

            </div>

            {/* Additional information */}
            <div className="col-span-1 lg:col-span-5 w-full min-w-0 border border-zinc-200 rounded-lg 2xs:rounded-xl p-3 2xs:p-4 xs:p-5 sm:p-6 lg:p-5 xlg:p-6 2xl:p-8 shadow-sm  bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 text-zinc-200">
            <ContactInstruction />
            </div>

          </div>

          <ContactMap />

        </section>

      </main>

    </section>
  );
};

export default ContactLayout;
