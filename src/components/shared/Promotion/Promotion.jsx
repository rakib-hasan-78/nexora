import React from 'react';
import classRoom from '../../../assets/class.png';
import swimming from '../../../assets/swimming.png';
import playGround from '../../../assets/playground.png';;
const Promotion = () => {
    return (
        <div className='w-11/12 py-4 flex flex-col items-center justify-center space-y-3.5 '>
            <div className='w-full h-auto transition duration-300 ease-in-out hover:scale-105'>
                <img src={classRoom} alt="class-room" />
            </div>
            <div className='w-full h-auto transition duration-300 ease-in-out hover:scale-105'>
                <img src={swimming} alt="swimming" />
            </div>
            <div className='w-full h-auto transition duration-300 ease-in-out hover:scale-105'>
                <img src={playGround} alt="playground" />
            </div>
        </div>
    );
};

export default Promotion;