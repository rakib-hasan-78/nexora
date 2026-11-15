import React from 'react';
import { format } from 'date-fns';
import imageDemo from '../../../assets/demo-card-thumbnail.png';
import user from '../../../assets/user.png';

const NewsDetails = () => {
    const nowDate = '2025-04-22T17:00:00.000Z';
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <main className='w-10/12 mx-auto flex-1'>
                {/* main content */}
                <section className='w-full flex 3xs:flex-col lg:flex-row items-center justify-between'>
                    {/* news details  */}
                    <div className='3xs:w-full lg:w-8/12 py-2 flex flex-col space-y-2'>
                        {/* image */}
                        <figure className='w-full h-112 rounded-xl overflow-hidden shadow-2xl'>
                            <img src={imageDemo} />
                        </figure>
                        {/* article in detail */}
                        <article className='w-full'>
                            {/* title */}
                            <div className='w-full mt-2 px-6 pt-4'>
                                <h1 className='font-semibold text-4xl'>
                                    Bangladesh–Malaysia labour migration: Can the new initiative break the cycle of exploitation?
                                </h1>
                                {/* published date */}
                                <p className='w-full text-xs text-black/45 py-3'>
                                   published :
                                   <span className='px-2'>
                                      {format(new Date(nowDate), 'dd MMMM yyyy')}
                                   </span>  
                                </p>
                            </div>
                            {/* article description */}
                            <div className='w-full p-6'>
                            {/* author */}
                            <div className='w-full border border-x-0 border-slate-600/40 py-2 flex items-center space-x-3'>
                            <figure className='w-8 h-8 rounded-full'>
                            <img src={user} alt="" />
                            </figure>
                            <span className='text-sm text-stone-600/60'>abdullah heel ma'ruf al baqi</span>
                            </div>
                            </div>
                        </article>
                    </div>
                    <div className='3xs:w-full lg:w-3/12 py-2 bg-amber-700'>
                        pionoo
                    </div>
                </section>
            </main>
        </div>
    );
};

export default NewsDetails;