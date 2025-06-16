
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
import Dashboardonsite from "./Dashboard-onsite"
import DashboardOnsiteTechninc from "./DashboardOnsiteTechninc"
import DashboardWorking from "./DashboardWorking"
import DashboardOpen from "./DashboardOpen"
import Users from "./Users"
import Clients from "./Clients"
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
     path:"/clients",
     element:<Clients/>
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
     path:"/dasboardonsite",
     element:<Dashboardonsite/>
      },{
     path:"/dasboardonsitetech",
     element:<DashboardOnsiteTechninc/>
      },{
     path:"/dasboardwork",
     element:<DashboardWorking/>
      },{
     path:"/dasboardopen",
     element:<DashboardOpen/>
      }
      ,{
     path:"/users",
     element:<Users/>
      }
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
