
import "./App.css"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ContactComponent from './ContactComponent'
import First from "./First"
import AssestComponent from "./AssetsComponent"
import Dashboard from './Dashboard'
import Resoursec from './Resoursec'
import Archive from './Archive'
import Setting from './Setting'
import Support from './Support'
import Technicians from './Technicians'
import Jobcard from './Jobcard'
import Clients from './Clients'
import Users from './Users'
import SupportTicket from './SupportTicket'
import SupportTicket2 from './SupportTicket2'
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
      {
     path:"/jobcard",
     element:<Jobcard/>
      },
      {
     path:"/Technicians",
     element:<Technicians/>
      },
      {
     path:"/clients",
     element:<Clients/>
      },
      {
     path:"/users",
     element:<Users/>
      },
      {
      path:"/supportTicket",
      element:<SupportTicket/>
      },
      {
      path:"/supportTicket2",
      element:<SupportTicket2/>
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
