import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Contact from './Pages/Contact'
import First from "./First"
import Home from './Component/Home'
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
