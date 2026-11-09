
import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full min-w-0 flex items-center justify-center">

      <form className="w-full min-w-0 flex flex-col gap-3 2xs:gap-4 sm:gap-5" action="#">

        {/* Name */}
        <div className="w-full min-w-0">

          <label
            htmlFor="contact-name"
            className="fieldset-legend text-zinc-300 text-xs 2xs:text-sm sm:text-base mb-1"
          >
            your name
          </label>

          <input
            id="contact-name"
            type="text"
            className="glass-effect w-full min-w-0 p-2.5 2xs:p-3 sm:p-3.5 text-xs 2xs:text-sm sm:text-base"
            placeholder="Type here"
          />

        </div>

        {/* Email */}
        <div className="w-full min-w-0">

          <label
            htmlFor="contact-email"
            className="fieldset-legend text-zinc-300 text-xs 2xs:text-sm sm:text-base mb-1"
          >
            your email
          </label>

          <div className="relative glass-effect flex items-center gap-2 w-full min-w-0 px-2.5 2xs:px-3 sm:px-4 py-2.5 2xs:py-3 sm:py-3.5">

            <svg
              className="h-3.5 2xs:h-4 sm:h-5 shrink-0 opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>

            <input
              id="contact-email"
              className="flex-1 w-full min-w-0 bg-transparent outline-none text-xs 2xs:text-sm sm:text-base z-10"
              type="email"
              placeholder="mail@site.com"
              required
            />

          </div>

          <div className="validator-hint hidden text-zinc-300 text-xs 2xs:text-sm">
            Enter valid email address
          </div>

        </div>

        {/* Message */}
        <div className="w-full min-w-0">

          <label
            htmlFor="contact-message"
            className="fieldset-legend text-zinc-300 text-xs 2xs:text-sm sm:text-base mb-1"
          >
            your message
          </label>

          <textarea
            id="contact-message"
            className="glass-effect w-full min-w-0 min-h-28 2xs:min-h-32 sm:min-h-36 p-2.5 2xs:p-3 sm:p-3.5 text-xs 2xs:text-sm sm:text-base"
            placeholder="Write your message here..."
          ></textarea>

        </div>

        {/* Terms and conditions */}
        <div className="w-full flex items-center gap-2">

          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-secondary checkbox-xs 2xs:checkbox-sm shrink-0"
          />

          <span className="text-zinc-300 text-xs 2xs:text-sm">
            accept T&C
          </span>

        </div>

        {/* Submit button */}
        <div className="w-full">

          <button
            type="submit"
            className="w-full primary-bg-gradient p-2.5 2xs:p-3 sm:p-3.5 border-0 rounded-lg 2xs:rounded-xl cursor-pointer font-bold uppercase text-xs 2xs:text-sm sm:text-base text-zinc-100 hover:text-zinc-200 transition-all duration-300"
          >
            Submit
          </button>

        </div>

      </form>

    </div>
  );
};

export default ContactForm;
