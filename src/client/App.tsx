import React, {useEffect} from 'react';
import Navbar from './components/Navbar';
// import ComponentContainer from './containers/ComponentContainer';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Programs from './components/Programs';
import ResidentInfo from './components/ResidentInfo';
import Residents from './components/Residents';
import DataProvider from './contexts/DataContext';
import { useDataContext } from './contexts/DataContext';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Programs />,
    },
    // {
    //   path: '/allresidents',
    //   element: <Navbar />,
    // },
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
      element: <Residents />,
    },
  ])

  return (
    <DataProvider>
      <div className="app">
        <header>Welbi</header>
        <Navbar/>
        <RouterProvider router={router} />
        {/* <ComponentContainer/> */}
      </div>
    </DataProvider>
    
  )
}

export default App;