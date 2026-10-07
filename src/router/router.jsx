import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../pages/Root/Root';

const router = createBrowserRouter([
    {
        path:'/',
        Component: Root,
        errorElement: <p>error...</p>
    }
])

export default router;