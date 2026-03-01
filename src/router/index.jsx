import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import JobListings from '../pages/JobListings';
import DetailJob from '../pages/DetailsJob';
import AdminJobs from '../dashboard/AdminJobs';

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
        path: "/jobs/:job_id",
        element: <DetailJob />
      },
      {
        path : "/AdminJobs",
         element: <AdminJobs/>
      }

     
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
