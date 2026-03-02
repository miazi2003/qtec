import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from '@/app/layouts/MainLayout';
import HomePage from '@/features/home/pages/HomePage';
import JobListingsPage from '@/features/jobs/pages/JobListingsPage';
import JobDetailsPage from '@/features/jobs/pages/JobDetailsPage';
import AdminJobsPage from '@/features/admin/pages/AdminJobsPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />, 
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/JobListings",
        element: <JobListingsPage></JobListingsPage>
      },
      {
        path: "/jobs/:job_id",
        element: <JobDetailsPage />
      },
      {
        path : "/AdminJobs",
         element: <AdminJobsPage/>
      }

     
    ]
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
