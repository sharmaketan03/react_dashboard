
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Pages/Contact'
import First from "./First"
import Home from './Component/Home'
import Support from './Support'
const router = createBrowserRouter([
  {
    path:"/",
    element:<First/>,
    children:[
      {
     index:true,
     element:<Home/>
      },
      {
     path:"/contact",
     element:<Contact/>
      },
      {
     path:"/",
     element:<Support/>
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
