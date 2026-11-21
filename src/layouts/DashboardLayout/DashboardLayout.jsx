
import React from 'react';
import demo from '../../assets/swimming.png';

const DashboardLayout = () => {
  return (
    <div className="w-full min-h-screen">

      <main className="w-11/12 2xs:w-10/12 mx-auto py-5 2xs:py-6 sm:py-8">

        {/* Profile cover and overlapping section */}
        <section className="
          relative w-full
          mb-24 3xs:mb-28 2xs:mb-32 xs:mb-36 sm:mb-40
        ">

          {/* Profile cover photo */}
          <div className="
            relative w-full
            h-40
            3xs:h-44
            2xs:h-52
            xs:h-60
            sm:h-72
            md:h-80
            lg:h-96
            xlg:h-100
            xl:h-110
            rounded-xl
            border border-white/10
            overflow-hidden
            shadow-2xl
          ">

            <img
              className="
                absolute inset-0
                w-full h-full
                object-cover
                blur-md scale-110
              "
              src={demo}
              alt="Profile cover"
            />

            {/* Cover overlay */}
            <div className="
              absolute inset-0
              bg-gray-700/20
              backdrop-blur-3xl
              border border-white/10
              shadow-2xl
            "></div>

          </div>

          {/* User profile section */}
          <div className="
            w-full
            h-20
            3xs:h-24
            2xs:h-28
            xs:h-32
            sm:h-36
            absolute bottom-0 left-0
            translate-y-1/2
            sm:translate-y-2/3
            z-20
          ">

            <div className="
              w-full h-full
              flex items-center
              gap-2 2xs:gap-3 sm:gap-5
            ">

              {/* Profile picture */}
              <div className="
                w-16 h-16
                3xs:w-20 3xs:h-20
                2xs:w-24 2xs:h-24
                xs:w-28 xs:h-28
                sm:w-32 sm:h-32
                xl:w-36 xl:h-36
                shrink-0
                rounded-full
                border-2 sm:border-4
                border-blue-500
                overflow-hidden
                shadow-xl
              ">

                <img
                  className="w-full h-full object-cover"
                  src={demo}
                  alt="User profile"
                />

              </div>

              {/* User information */}
              <div className="
                flex-1 min-w-0
                flex flex-col
                3xs:flex-row
                items-start 3xs:items-center
                justify-between
                gap-1 3xs:gap-2
                px-1 2xs:px-2 sm:px-4
              ">

                <div className="min-w-0">
                  <h2 className="
                    text-sm
                    3xs:text-base
                    2xs:text-lg
                    xs:text-xl
                    sm:text-2xl
                    font-bold
                    truncate
                  ">
                    User Name
                  </h2>

                  <p className="
                    text-[10px]
                    3xs:text-xs
                    2xs:text-sm
                    text-gray-500
                    truncate
                  ">
                    @username
                  </p>
                </div>

                {/* Edit profile button */}
                <button className="
                  shrink-0
                  px-2 py-1
                  3xs:px-3 3xs:py-1.5
                  2xs:px-4 2xs:py-2
                  sm:px-5 sm:py-2
                  text-[10px]
                  3xs:text-xs
                  2xs:text-sm
                  font-medium
                  rounded-lg
                  bg-blue-600
                  text-white
                  hover:bg-blue-700
                  transition-colors
                ">
                  Edit Profile
                </button>

              </div>

            </div>

          </div>

        </section>

        {/* Dashboard content */}
        <section className="w-full">

          {/* Add your dashboard components here */}

        </section>

      </main>

    </div>
  );
};

export default DashboardLayout;
