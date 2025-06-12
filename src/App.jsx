
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Pages/Contact'
import First from "./First"
import Dashboard from './Dashboard'
import Support from './Support'
import Resoursec from './Resoursec'
import Archive from './Archive'
import Setting from './Setting'

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
     element:<Contact/>
      },
      {
     path:"/support",
     element:<Support/>
      }
      ,{
        path:"/Resoursec",
        element:<Resoursec/>
         }

         ,{
          path:"/Archive",
          element:<Archive/>
           }
           ,{
            path:"/Setting",
            element:<Setting/>
             }
    ]
  }
])


function App() {

  return (
    <>
     <RouterProvider router={router}/>

    </>
  )
}

export default App
