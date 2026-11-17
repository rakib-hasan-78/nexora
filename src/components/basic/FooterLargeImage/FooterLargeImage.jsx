import React from 'react';
import footerImage from '../../../assets/new-Photoroom.png';
import { useNavigate } from 'react-router';

const FooterLargeImage = () => {
    const navigate = useNavigate()
    return (
        <div
        onClick={()=>navigate(`/`)}
         className='w-full flex items-end justify-center overflow-hidden pt-1.5'>
            <div

            className='w-2/6'>
                <img src={footerImage} alt="footer-large-image" />            
            </div>

        </div>
    );
};

export default FooterLargeImage;