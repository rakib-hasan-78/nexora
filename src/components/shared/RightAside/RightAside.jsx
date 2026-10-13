import React from 'react';
import edClass from '../../../assets/class.png';
import swimming from '../../../assets/swimming.png';
import playground from '../../../assets/playground.png';
import AsideLogin from './../AsideLogin/AsideLogin';
import addSection from '../../../assets/bg.png';
const RightAside = () => {
    return (
        <div className='w-full flex flex-col space-y-6 justify-between '>
            <div>
                <AsideLogin />
            </div>
            <div>
                <img src={edClass} alt="edClass" />
            </div>
            <div>
                <img src={swimming} alt="swimming" />
            </div>
            <div>
                <img src={playground} alt="playground" />
            </div>
            <div className='rounded-xl overflow-hidden'>
                <img src={addSection} alt="addSection" />
            </div>
        </div>
    );
};

export default RightAside;