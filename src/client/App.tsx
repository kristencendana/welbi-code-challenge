import React from 'react';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Programs from './pages/Programs';
import ResidentInfo from './pages/ResidentInfo';
import ProgramInfo from './pages/ProgramInfo';
import Residents from './pages/Residents';
import DataProvider from './contexts/DataContext';

const App = () => {
// navbar wrapper for create browser router pathing
  const NavbarWrapper = () => {
    return (
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    )
  }
// routes for pages
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavbarWrapper />,
      children: [
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
          path: '/allresidents',
          element: <Residents />,
        },
        {
          path: '/program/:programId',
          element: <ProgramInfo />,
        },
      ]
    },
  ])
  
// adding useContext data provider
  return (
    <DataProvider>
      <div className="app">
        <RouterProvider router={router} />
      </div>
    </DataProvider>
    
  )
}

export default App;