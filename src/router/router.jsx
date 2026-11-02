import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import AllNews from '../pages/AllNews/AllNews';
import TechAndSci from '../pages/TechAndSci/TechAndSci';
import WellBeing from '../pages/WellBeing/WellBeing';

const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <p>error...</p>,
        children: [
            {
                index:true,
                Component:Home
            },
            {   path:'all-news',
                Component: AllNews,
            },
            {
                path:'tech&sci',
                Component: TechAndSci,
            },
            {
                path:'well-being',
                Component: WellBeing,
            }
        ]
    }
])

export default router;