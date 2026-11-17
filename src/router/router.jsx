import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';
import Home from '../pages/Home/Home';
import AllNews from '../pages/AllNews/AllNews';
import TechAndSci from '../pages/TechAndSci/TechAndSci';
import WellBeing from '../pages/WellBeing/WellBeing';
import Sports from '../pages/Sports/Sports';
import Contact from '../pages/Contact/Contact';
import NewsDetails from '../components/basic/NewsDetails/NewsDetails';

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
                path:'/well-being',
                Component: WellBeing,
            },
            {
                path:'/sports',
                Component:Sports,
            },
            {
                path:'/contact',
                Component: Contact,
            },
            {
                path:'/news/:id',
                element:<NewsDetails/>,
                loader: ({params})=> {
                    return fetch('/data/news.json')
                        .then(res=>res.json())
                        .then(data=>data.find(item=>item.id === params.id))
                },
                handle:{
                    handleFooter: false,
                    marqueeNews:false 
                }
            }
        ]
    }
])

export default router;