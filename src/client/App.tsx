import React from 'react';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Programs from './pages/Programs';
import ResidentInfo from './pages/ResidentInfo';
import ProgramInfo from './pages/ProgramInfo';
import Residents from './pages/Residents';
import DataProvider from './contexts/DataContext';

const App = () => {

  const NavbarWrapper = () => {
    return (
      <div>
        <Navbar/>
        <Outlet/>
      </div>
    )
  }

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
  

  return (
    <DataProvider>
      <div className="app">
        <a href="/">Welbi</a>
        <h1>Hello</h1>
        <RouterProvider router={router} />
      </div>
    </DataProvider>
    
  )
}

export default App;