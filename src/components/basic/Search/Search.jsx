import React from 'react';

const Search = ({newsData,searchNews, setSearchNews}) => {
    
    return (
        <div className='w-full h-auto bg-linear-to-tl from-gray-800 via-slate-700 to-zinc-800 rounded-xl shadow-2xl border border-white/15'>
        <div className='w-auto border btn-glass flex flex-col items-center space-y-3.5 py-6'>
            <div className='text-2xl text-slate-200 font-semibold z-10'>
                <h3>search news here</h3>
            </div>
            <div className='w-10/12 border z-10'>
                <input type="text" name="text" id="#" />
            </div>
        </div>
            
        </div>
    );
};

export default Search;