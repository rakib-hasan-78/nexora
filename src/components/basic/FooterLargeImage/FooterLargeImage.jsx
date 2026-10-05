import React from 'react';
import footerImage from '../../../assets/new-Photoroom.png';

const FooterLargeImage = () => {
    return (
        <div className='w-full flex items-end justify-center overflow-hidden'>
            <div className='w-2/6'>
                <img src={footerImage} alt="footer-large-image" />            
            </div>

        </div>
    );
};

export default FooterLargeImage;