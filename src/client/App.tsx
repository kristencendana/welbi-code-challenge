import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Programs from './pages/Programs';
import ResidentInfo from './pages/ResidentInfo';
import ProgramInfo from './pages/ProgramInfo';
import Residents from './pages/Residents';
import DataProvider from './contexts/DataContext';
import { useDataContext } from './contexts/DataContext';
// import ComponentContainer from './containers/ComponentContainer';

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
    // {
    //   path: '/',
    //   element: <ComponentContainer />,
    // },
    // {
    //   path: '/',
    //   element: <Programs />,
    // },
    // {
    //   path: '/allresidents',
    //   element: <Navbar />,
    // },
    // {
    //   path: '/resident/:residentId',
    //   element: <ResidentInfo />
    //   // errorElement: <NotFoundPage />
    // },
    // {
    //   path: '/allresidents',
    //   element: <Residents />,
    // },
    // {
    //   path: '/program/:programId',
    //   element: <Residents />,
    // },
  ])
  

  return (
    <DataProvider>
      <div className="app">
        <a href="/">Welbi</a>
        <h1>Hello</h1>
        {/* <Navbar/> */}
        <RouterProvider router={router} />
        {/* <ComponentContainer/> */}
      </div>
    </DataProvider>
    
  )
}

export default App;