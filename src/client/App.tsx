import React from 'react';
import DataProvider from './contexts/DataContext';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
// import ComponentContainer from './containers/ComponentContainer';
import Programs from './components/Programs';
import Residents from './components/Residents';
import ResidentInfo from './components/Resident';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Programs />,
    },
    {
      path: '/residentinfo/:residentId',
      element: <ResidentInfo />
      // errorElement: <NotFoundPage />
    },
    {
          path: '/residents/:programId',
          element: <Residents />
          // errorElement: <NotFoundPage />
    }
    ,
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