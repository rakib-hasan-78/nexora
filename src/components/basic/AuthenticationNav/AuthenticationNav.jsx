import React from 'react';
import defaultUserImage from '../../../assets/user.png';
import { Link } from 'react-router';
const AuthenticationNav = () => {
    return (
        <div className='max-w-full flex items-center space-x-6'>
            {
                <img
                className='w-7/8 h-full'
                 src={defaultUserImage} alt="user-img" />
            }
            {
                <Link
                className='link-btn primary-bg-gradient'
                >
                login
                </Link>
            }
        </div>
    );
};

export default AuthenticationNav;