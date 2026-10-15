import React from 'react';
import AsideLoginBtn from './../../basic/AsideLoginBtn/AsideLoginBtn';

const AsideLogin = () => {
    return (
        <div className='3xs:w-full lg:w-11/12 bg-gradient-to-r from-stone-700 via-slate-600 to-zinc-700 flex flex-col items-center justify-center py-8 rounded-xl'>
            <h3 className='font-bold text-2xl text-slate-300 '>login with</h3>
            <div className='py-6'>
                <AsideLoginBtn />
            </div>
        </div>
    );
};

export default AsideLogin;