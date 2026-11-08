import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full min-w-0 flex items-center justify-center">
      <form className="w-full min-w-0 flex flex-col gap-4" action="#">
        {/* Name */}
        <div className="w-full min-w-0">
          <legend className="fieldset-legend text-zinc-300">your name</legend>

          <input
            type="text"
            className="glass-effect w-full min-w-0"
            placeholder="Type here"
          />
        </div>

        {/* Email */}
        {/* Email */}
        <div className="w-full min-w-0">
          <legend className="fieldset-legend text-zinc-300">your email</legend>

          <label className="glass-effect flex items-center gap-2 w-full min-w-0 px-3 py-2">
            <svg
              className="h-[1em] shrink-0 opacity-50"
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
              className="flex-1 w-full min-w-0 bg-transparent outline-none"
              type="email"
              placeholder="mail@site.com"
              required
            />
          </label>

          <div className="validator-hint hidden text-zinc-300">Enter valid email address</div>
        </div>

        {/* Message */}
        <div className="w-full min-w-0">
          <legend className="fieldset-legend text-zinc-300">your message</legend>

          <textarea
            className="glass-effect w-full min-w-0 min-h-32"
            placeholder="Write your message here..."
          ></textarea>
        </div>

        {/* Terms and conditions */}
        <div className="w-full flex items-center gap-2">
          <input
            type="checkbox"
            defaultChecked
            className="checkbox checkbox-secondary shrink-0"
          />

          <span className="text-zinc-300">accept T&C</span>
        </div>

        {/* Submit button */}
        <div className="w-full">
          <button type="submit" className="w-full primary-bg-gradient p-3 border-0 rounded-xl cursor-pointer font-bold uppercase text-zinc-100 hover:text-zinc-200 ease-in-out delay-150 transition-all ">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
