import React from 'react';
import { NavLink } from 'react-router';

const PrimaryNav = () => {
    return (
        <div className='w-full flex justify-end space-x-3.5'>
            <NavLink
            className={({isActive})=>
            isActive ?
            `text-pink-500 font-bold` :
            ``
            } 
            to={'/'}
            >
            home
            </NavLink>

            <NavLink
            className={({isActive})=>
            isActive ?
            `text-pink-500 font-bold` :
            ``
            }  
            to={'/all-news'}
            >
            all news
            </NavLink>

            <NavLink
            className={({isActive})=>
            isActive ?
            `text-pink-500 font-bold` :
            ``
            }  
            to={'/tech&sci'}
            >
            tech & sci
            </NavLink>

            <NavLink
            className={({isActive})=>
            isActive ?
            `text-pink-500 font-bold` :
            ``
            }  
            to={'/well-being'}
            >
            well-being
            </NavLink>

            <NavLink
            className={({isActive})=>
            isActive ?
            `text-pink-500 font-bold` :
            ``
            }  
            to={'/sports'}
            >
            sports
            </NavLink>

            <NavLink
            to={`/auth/dashboard`}
            className={({isActive})=>
            isActive ?
            `text-pink-500 font-bold` :
            ``
            } 
            >
            dashboard
            </NavLink>

            <NavLink
            className={({isActive})=>
            isActive ?
            `text-pink-500 font-bold` :
            ``
            } 
             to={'/contact'}
             >
             contact
             </NavLink>
        </div>
    );
};

export default PrimaryNav;