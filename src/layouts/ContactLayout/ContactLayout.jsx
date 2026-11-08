
import React from 'react';
import Hero from './../../components/basic/Hero/Hero';
import ContactForm from './../../components/basic/ContactForm/ContactForm';

const ContactLayout = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center">

      <main className="w-full lg:w-10/12 flex-1 px-3 sm:px-5 lg:px-0">

        {/* Hero section */}
        <section className="w-full">
          <Hero
            title="contact us"
            paragraph=""
            button={false}
          />
        </section>

        {/* Contact section */}
        <section className="w-full max-w-5xl mx-auto py-10 sm:py-14 lg:py-16">

          {/* Heading and description */}
          <div className="w-full flex flex-col items-center justify-center text-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-2">

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-zinc-900/70 capitalize">
              get in touch with us
            </h2>

            <p className="text-sm sm:text-base lg:text-xl text-zinc-700/70 font-light leading-relaxed">
              You can directly contact our team to share news tips,
              ask questions, or discuss any enquiries. Simply fill
              out the form below. You can also request a meeting
              schedule for specific purposes.
            </p>

          </div>

          {/* Form and additional information */}
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">

            {/* Contact form */}
            <div className="col-span-1 lg:col-span-7 w-full min-w-0 border border-zinc-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800">
              <ContactForm />
            </div>

            {/* Additional information */}
            <div className="col-span-1 lg:col-span-5 w-full min-w-0 border border-zinc-200 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm">

              <h3 className="text-xl sm:text-2xl font-bold text-zinc-800 mb-3 capitalize">
                additional information
              </h3>

              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                Have something to share with us? We'd love to hear
                from you. Use the contact form to get in touch
                with our team.
              </p>

            </div>

          </div>

        </section>

      </main>

    </section>
  );
};

export default ContactLayout;
