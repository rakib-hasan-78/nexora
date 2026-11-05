import React from 'react';
import { NavLink } from 'react-router';

const PrimaryNav = () => {
    return (
        <div className='w-full flex justify-end space-x-3.5'>
            <NavLink to={'/'}>home</NavLink>
            <NavLink to={'/all-news'}>all news</NavLink>
            <NavLink to={'/tech&sci'}>tech & sci</NavLink>
            <NavLink to={'/well-being'}>well-being</NavLink>
            <NavLink to={'/sports'}>sports</NavLink>
            <NavLink>dashboard</NavLink>
            <NavLink to={'/contact'}>contact</NavLink>
        </div>
    );
};

export default PrimaryNav;