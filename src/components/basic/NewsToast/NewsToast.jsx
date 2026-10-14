import React from 'react';
import defaultNewsImage from '../../../assets/defaultNews.jpg';

const NewsToast = ({news}) => {
    const {thumbnail_url, title} = news
    return (
        <div className='w-full flex items-center justify-start space-x-3 glass-effect cursor-pointer'>
            <div className='3xs:w-4/10 lg:w-5/10 3xs:h-6 lg:h-10 3xs:rounded-full lg:rounded overflow-hidden'>
                <img 
                src={thumbnail_url || defaultNewsImage }
                 alt={title}
                 onError={(event)=> event.currentTarget.src = defaultNewsImage}
                  />
            </div>
            <h5 className='line-clamp-1 font-light 3xs:text-[9px] lg:text-sm text-base-100'>
                {title}
            </h5>
        </div>
    );
};

export default NewsToast;