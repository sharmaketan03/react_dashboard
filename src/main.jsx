import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Clients from './Clients.jsx'
import Users from './Users.jsx'
import Othermodal from './Othermodal.jsx'
createRoot(document.getElementById('root')).render(
 <StrictMode>
    <Users/>
   
 </StrictMode>

 
)
