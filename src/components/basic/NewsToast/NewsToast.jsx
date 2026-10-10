import React from 'react';
import defaultNewsImage from '../../../assets/defaultNews.jpg';

const NewsToast = ({news}) => {
    const {thumbnail_url, title} = news
    return (
        <div className='w-full flex items-center justify-start space-x-3 glass-effect cursor-pointer'>
            <div className='w-5/10 h-10 rounded overflow-hidden'>
                <img 
                src={thumbnail_url || defaultNewsImage }
                 alt={title}
                 onError={(event)=> event.currentTarget.src = defaultNewsImage}
                  />
            </div>
            <h5 className='line-clamp-1 font-light text-sm text-base-100'>
                {title}
            </h5>
        </div>
    );
};

export default NewsToast;