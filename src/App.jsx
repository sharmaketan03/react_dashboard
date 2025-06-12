
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import First from './First';
import './App.css';
import Dashboard from './Dashboard';
import AssetsComponent from './AssetsComponent';
import ContactsComponent from './ContactComponent';


const router = createBrowserRouter([
  {
    path: "/",
    element: <First/>,
     children: [
      { index: true, element: <Dashboard /> },
      { path: "/Assets", element:<AssetsComponent/> },
      { path: "/Contact", element:<ContactsComponent/> },
    
  
    ],
  },
]);




function App() {

  return (
    <>
     <RouterProvider router={router}/>

    </>
  );

}

export default App;
