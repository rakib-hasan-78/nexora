import React from 'react';

const EmptyContent = ({
      title = "",
  message = "We couldn't find anything matching your search. Try another keyword, author's name or title.",
}) => {
  return (
    <div className="w-full min-h-80 flex flex-col items-center justify-center px-4 py-12 text-center animate-[fadeIn_0.5s_ease-in-out]">

      {/* Animated illustration */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-full bg-base-200 flex items-center justify-center animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="46"
            height="46"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-base-content/50"
          >
            <circle cx="11" cy="11" r="7" />
            <path d="m20 20-4-4" />
            <path d="M8 11h6" />
          </svg>
        </div>

        <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-pink-500 animate-ping opacity-75" />
        <span className="absolute bottom-1 -left-2 w-3 h-3 rounded-full bg-secondary animate-bounce" />
      </div>

      {/* Text content */}
      <h2 className="text-2xl sm:text-3xl font-bold text-base-content mb-3">
      {
        title==='' ?
        'Content Not Found!'
        :
       `"${title}" Not found!`
        }
      </h2>

      <p className="max-w-md text-sm sm:text-base text-base-content/60 leading-relaxed">
        {message}
      </p>

      <div className="mt-6 flex items-center gap-2 text-sm text-base-content/40">
        <span className="w-8 h-px bg-base-content/20" />
        <span>Keep exploring Nexora</span>
        <span className="w-8 h-px bg-base-content/20" />
      </div>
    </div>
  );
};


export default EmptyContent;