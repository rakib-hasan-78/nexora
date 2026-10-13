import React from 'react';
import AsideLoginBtn from './../../basic/AsideLoginBtn/AsideLoginBtn';

const AsideLogin = () => {
    return (
        <div className='w-full bg-gradient-to-r from-stone-700 via-slate-600 to-zinc-700 flex flex-col items-center justify-center py-6 rounded-xl'>
            <h3 className='font-bold text-xl text-slate-300 '>login with</h3>
            <div className='py-6'>
                <AsideLoginBtn />
            </div>
        </div>
    );
};

export default AsideLogin;