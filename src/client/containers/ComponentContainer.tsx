import React, {useEffect, useState} from 'react';
import Programs from '../components/Programs';
import Residents from '../components/Residents';
import ResidentInfo from '../components/ResidentInfo';
import { useDataContext } from '../contexts/DataContext';
import DataProvider from '../contexts/DataContext';
import Navbar from '../components/Navbar';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const ComponentContainer = () => {

  const {fetchResidents, fetchPrograms, residents} = useDataContext();
  // upon load, we want to fetch programs (update programs state then utilize programs array)
  useEffect(() => {
    fetchResidents();
    fetchPrograms();
  }, [])

  useEffect(() => {
    // fetchPrograms();
    // fetchResidents();
    console.log(residents);
  }, [residents])

  // contains all state (maybe do class component)
  // Upon load, invoke fetchAuthentication
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Programs />,
    },
    {
      path: '/resident/:residentId',
      element: <ResidentInfo />
      // errorElement: <NotFoundPage />
    },
    {
      path: '/program/:programId',
      element: <Residents />,
    },
  ])

  return (
    <div>
      {/* <Navbar/> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default ComponentContainer;