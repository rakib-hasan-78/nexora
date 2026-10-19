import React from 'react';
import classRoom from '../../../assets/class.png';
import swimming from '../../../assets/swimming.png';
import playGround from '../../../assets/playground.png';
import bgPng from '../../../assets/bg.png';
const Promotion = () => {

        const promoItems = [
        { id: 'classroom', src: classRoom, alt: 'class-room', rounded: false },
        { id: 'swimming', src: swimming, alt: 'swimming', rounded: false },
        { id: 'playground', src: playGround, alt: 'playground', rounded: false },
        { id: 'bg', src: bgPng, alt: 'bg-png', rounded: true }, // Noticed your last item has extra classes
    ];
    return (
        <div className='w-11/12 py-4 flex flex-col items-center justify-center space-y-3.5 '>
        {
            promoItems?.map(item=>(
            <div key={item.id} className={`w-full h-auto transition duration-300 ease-in-out hover:scale-105 ${item.rounded?'rounded-md overflow-hidden':''} `}>
                <img src={item.src} alt={item.alt} referrerPolicy="no-referrer"  />
            </div>

            )) 
        }
        </div>
    );
};

export default Promotion;