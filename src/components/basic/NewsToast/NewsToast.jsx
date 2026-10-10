import React from 'react';
import sample from '../../../assets/demo-card-thumbnail.png';
const NewsToast = () => {
    return (
        <div className='w-full flex items-center justify-start space-x-3 glass-effect cursor-pointer'>
            <div className='w-2/10 h-7 rounded overflow-hidden'>
                <img src={sample} alt="" />
            </div>
            <p className='line-clamp-1 font-light text-sm text-base-100'>Lorem ipsum dolor sit amet.</p>
        </div>
    );
};

export default NewsToast;