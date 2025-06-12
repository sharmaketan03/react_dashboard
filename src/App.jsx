
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactComponent from './ContactComponent'
import First from "./First"
import AssestComponent from "./AssetsComponent"
import Dashboard from './Dashboard'
import Resoursec from './Resoursec'
import Archive from './Archive'
import Setting from './Setting'
import Support from './Support'
const router = createBrowserRouter([
  {
    path:"/",
    element:<First/>,
    children:[
      {
     index:true,
     element:<Dashboard/>
      },
      {
     path:"/contact",
     element:<ContactComponent/>
      },
      {
     path:"/assets",
     element:<AssestComponent/>
      },
      {
     path:"/resoursec",
     element:<Resoursec/>
      },
      {
     path:"/setting",
     element:<Setting/>
      },
      {
     path:"/support",
     element:<Support/>
      },
      {
     path:"/archive",
     element:<Archive/>
      },
    ]
  }
])


function App() {

  return (
    <>
     <RouterProvider router={router}/>

    </>
  );
}

export default App
