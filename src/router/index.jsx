import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import JobListings from '../pages/JobListings';
import DetailJob from '../pages/DetailsJob';

// you can add additional route components or pages later

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, // MainLayout contains <Outlet />
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/JobListings",
        element: <JobListings></JobListings>
      },
      {
        path : "/jobs/:id",
         element: DetailJob
      }

     
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
