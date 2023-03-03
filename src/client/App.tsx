import React from 'react';
import DataProvider from './contexts/DataContext';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from './components/Navbar';
// import ComponentContainer from './containers/ComponentContainer';
import ProgramsList from './components/ProgramsList';
import ResidentsList from './components/ResidentsList';

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProgramsList />
      // errorElement: <NotFoundPage />
    },
    {
      path: '/residents',
      element: <ResidentsList />
      // errorElement: <NotFoundPage />
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