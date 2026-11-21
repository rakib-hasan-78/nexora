import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../pages/Root/Root";
import Home from "../pages/Home/Home";
import AllNews from "../pages/AllNews/AllNews";
import TechAndSci from "../pages/TechAndSci/TechAndSci";
import WellBeing from "../pages/WellBeing/WellBeing";
import Sports from "../pages/Sports/Sports";
import Contact from "../pages/Contact/Contact";
import NewsDetails from "../components/basic/NewsDetails/NewsDetails";
import Authentication from "../pages/Authentication/Authentication";
import CustomData from "../CustomHooks/CustomData/CustomData";
import Dashboard from './../pages/Dashboard/Dashboard';




const router = createBrowserRouter([

  {
    path: "/",
    Component: Root,
    errorElement: (
      <p>
        error... <button type="button">return</button>{" "}
      </p>
    ),
    children: [
      {
        index: true,
        Component: Home,
      },
      { path: "all-news", Component: AllNews },
      {
        path: "tech&sci",
        Component: TechAndSci,
      },
      {
        path: "well-being",
        Component: WellBeing,
      },
      {
        path: "sports",
        Component: Sports,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "news/:id",
        element: <NewsDetails />,
        loader: ({ params }) => {
          return fetch("/data/news.json")
            .then((res) => res.json())
            .then((data) => data.find((item) => item.id === params.id));
        },
        handle: {
          handleFooter: false,
          marqueeNews: false,
        },
      },
    ],
  },

  //**  routes based on authentication

  {
    path: "/auth",
    Component:Authentication,
    children:[
        {
            index:true,
            element: <p>auth</p>
        },
        {
            path:'login',
            element: <p>auth login</p>

        },
        {
            path:'register',
            element: <p>auth reg</p>
        },
        {
            path:'dashboard',
            element: 
            <CustomData>
              <Dashboard />
            </CustomData>
        }
    ]
  },
]);

export default router;
