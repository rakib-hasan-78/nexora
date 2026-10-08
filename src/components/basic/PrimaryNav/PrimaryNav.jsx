import React from 'react';
import { NavLink } from 'react-router';

const PrimaryNav = () => {
    return (
        <div className='w-full flex justify-end space-x-3.5'>
            <NavLink to={'/'}>home</NavLink>
            <NavLink>tech & sci</NavLink>
            <NavLink>well-being</NavLink>
            <NavLink>sports</NavLink>
            <NavLink>dashboard</NavLink>
            <NavLink>contact</NavLink>
        </div>
    );
};

export default PrimaryNav;