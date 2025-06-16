import React, { useState } from "react";
import { LuPencil } from "react-icons/lu";

import { Link } from "react-router-dom"
import Dashboardonsite from "./Dashboard-onsite";




const Dashboard = () => {

  const [ticket , setTicket]=useState(true)
  const [client , setClient]=useState(false)

  function Ticket(){
      setTicket(true)
      setClient(false)
  }
  function Client(){
    setTicket(false)
      setClient(true)
  }
  
  
 
       
  return (
    <>

    
      <div className="w-[92%] m-auto">

  

  
    

        <h1 className="text-2xl mt-[4%] font-bold mb-6">Dashboard</h1>
        <div>
          <div className="p-6 bg-white  border border-gray-300 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">My Tickets</h2>
            <div> 
              <table className="min-w-full text-sm text-left border-collapse">
                <thead >
                  <tr className="bg-sky-100 text-gray-700 text-xs">
                    <th className="px-4 py-3 font-semibold" onClick={()=>Ticket()}>Ticket No.</th>
                    <th className="px-4 py-3 font-semibold"  onClick={()=>Client()} >Client Name</th>
                    <th className="px-4 py-3 font-semibold" >Client Site</th>
                    <th className="px-4 py-3 font-semibold">Asset</th>
                    <th className="px-4 py-3 font-semibold" >Job Title</th>
                    <th className="px-4 py-3 font-semibold">Age</th>
                    <th className="px-4 py-3 font-semibold">Technicians</th>
                    <th className="px-4 py-3 font-semibold">Status</th>
                    <th className="px-4 py-3 font-semibold"></th>
                  </tr>
                </thead>
                 
                {
                 ticket?(
                 <tbody className="text-gray-700 ">
                  <tr className="border-t border-gray-300 leading-8">
                    <td className="px-4 py-3">10005</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">sterling</td>
                    <td className="px-4 py-3">Testing1</td>
                    <td className="px-4 py-3">Event - 22th Aug</td>
                    <td className="px-4 py-3">252 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      <span className="bg-[#629C44] w-[120px] leading-8 text-white px-7  rounded-md text-xs block text-center">
                    <Link to={"/dasboardonsite"}>On-site Technician</Link>
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                     <Link to={"/dasboardonsite"}> <LuPencil /> </Link>
                      </button>
                    </td>
                  </tr>

                  <tr className="border-t  border-gray-300 ">
                    <td className="px-4 py-3">10003</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">261 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      <span className="bg-[#629C44] w-[120px] leading-8 text-white px-7 rounded-md text-xs block text-center">
                        <Link  to={"/dasboardonsitetech"}> On-site Technician </Link>
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                  <Link  to={"/dasboardonsitetech"}>    <LuPencil />  </Link> 
                      </button>
                    </td>
                  </tr>
                  
                  <tr className="border-t  border-gray-300 h-8">
                    <td className="px-4 py-6">10002</td>
                    <td className="px-4 py-6">Sterling Infotech</td>
                    <td className="px-4 py-6">Client Site</td>
                    <td className="px-4 py-6">test</td>
                    <td className="px-4 py-6">Event - 25th Aug</td>
                    <td className="px-4 py-6">261 Days</td>
                    <td className="px-4 py-6">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="">
                      <span className="bg-yellow-400 w-[80px] text-white  py-2 rounded-md text-10  block text-center">
                        <Link to={"/dasboardwork"}>  Working </Link>
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                      <Link to={"/dasboardwork"}> <LuPencil />  </Link>
                      </button>
                    </td>
                  </tr>

                  <tr className="border-t  border-gray-300">
                    <td className="px-4 py-3">10001</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">280 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className=" ">
                      <span className="bg-yellow-400 w-[50px] text-white px-2 py-1 rounded-md text-10 block text-center">
                         <Link to={"/dasboardopen"}>Open</Link>
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                        <Link to={"/dasboardopen"}>  <LuPencil />       </Link>
                      </button>
                    </td>
                  </tr>
                </tbody>):
                
                  client?(
                    <tbody>
                      <tr className="border-t  border-gray-300">
                    <td className="px-4 py-3">10001</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">280 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className=" ">
                      <span className="bg-yellow-400 w-[50px] text-white px-2 py-1 rounded-md text-10 block text-center">
                        Open
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                        <LuPencil />
                      </button>
                    </td>
                  </tr>


                   <tr className="border-t  border-gray-300 h-8">
                    <td className="px-4 py-6">10002</td>
                    <td className="px-4 py-6">Sterling Infotech</td>
                    <td className="px-4 py-6">Client Site</td>
                    <td className="px-4 py-6">test</td>
                    <td className="px-4 py-6">Event - 25th Aug</td>
                    <td className="px-4 py-6">261 Days</td>
                    <td className="px-4 py-6">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="">
                      <span className="bg-yellow-400 w-[80px] text-white  py-2 rounded-md text-10  block text-center">
                        Working
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                     <LuPencil />
                      </button>
                    </td>
                  </tr>

                   <tr className="border-t  border-gray-300 ">
                    <td className="px-4 py-3">10003</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">261 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      <span className="bg-[#629C44] w-[120px] leading-8 text-white px-7 rounded-md text-xs block text-center">
                        On-site Technician
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <a href="/SupportTicket2">
                      <button className="p-1 border rounded hover:bg-gray-100">
                    <LuPencil />
                      </button></a>
                    </td>
                  </tr>

                   <tr className="border-t border-gray-300 leading-8">
                    <td className="px-4 py-3">10005</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">sterling</td>
                    <td className="px-4 py-3">Testing1</td>
                    <td className="px-4 py-3">Event - 22th Aug</td>
                    <td className="px-4 py-3">252 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      <span className="bg-[#629C44] w-[120px] leading-8 text-white px-7  rounded-md text-xs block text-center">
                       <Link to={"/dasboard-onsite"}>On-site Technician</Link> 
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                    <LuPencil />
                      </button>
                    </td>
                  </tr>
                    </tbody>
                  ):two?(
                   <tbody className="text-xs">
                        <tr className="border-t  border-gray-300 ">
                    <td className="px-4 py-3">10003</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">261 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      <span className="bg-[#629C44] w-[120px] leading-8 text-white px-7 rounded-md text-xs block text-center">
                        On-site Technician
                      </span>
                    </td>
                    <td className="px-4 py-3">
                    <a href="/SupportTicket2">
                      <button className="p-1 border rounded hover:bg-gray-100">
                    <LuPencil />
                      </button></a>
                    </td>
                  </tr>
             
             <tr className="border-t  border-gray-300 h-8">
                    <td className="px-4 py-6">10002</td>
                    <td className="px-4 py-6">Sterling Infotech</td>
                    <td className="px-4 py-6">Client Site</td>
                    <td className="px-4 py-6">test</td>
                    <td className="px-4 py-6">Event - 25th Aug</td>
                    <td className="px-4 py-6">261 Days</td>
                    <td className="px-4 py-6">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="">
                      <span className="bg-yellow-400 w-[80px] text-white  py-2 rounded-md text-10  block text-center">
                        Working
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                     <LuPencil />
                      </button>
                    </td>
                  </tr>
   <tr className="border-t  border-gray-300">
                    <td className="px-4 py-3">10001</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">280 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className=" ">
                      <span className="bg-yellow-400 w-[50px] text-white px-2 py-1 rounded-md text-10 block text-center">
                        Open
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                        <LuPencil />
                      </button>
                    </td>
                  </tr>
 <tr className="border-t border-gray-300 leading-8">
                    <td className="px-4 py-3">10005</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">sterling</td>
                    <td className="px-4 py-3">Testing1</td>
                    <td className="px-4 py-3">Event - 22th Aug</td>
                    <td className="px-4 py-3">252 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      <span className="bg-[#629C44] w-[120px] leading-8 text-white px-7  rounded-md text-xs block text-center">
                        On-site Technician
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                    <LuPencil />
                      </button>
                    </td>
                  </tr>

                   </tbody>



                  ):three?(
                        <tbody>
                        <tr className="border-t  border-gray-300 ">
                    <td className="px-4 py-3">10003</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">261 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      <span className="bg-[#629C44] w-[120px] leading-8 text-white px-7 rounded-md text-xs block text-center">
                        On-site Technician
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                    <LuPencil />
                      </button>
                    </td>
                  </tr>
             
             <tr className="border-t  border-gray-300 h-8">
                    <td className="px-4 py-6">10002</td>
                    <td className="px-4 py-6">Sterling Infotech</td>
                    <td className="px-4 py-6">Client Site</td>
                    <td className="px-4 py-6">test</td>
                    <td className="px-4 py-6">Event - 25th Aug</td>
                    <td className="px-4 py-6">261 Days</td>
                    <td className="px-4 py-6">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="">
                      <span className="bg-yellow-400 w-[80px] text-white  py-2 rounded-md text-10  block text-center">
                        Working
                      </span>
                    </td>
                    <td className="px-4 py-3">
                    <a href="/SupportTicket2">
                      <button className="p-1 border rounded hover:bg-gray-100">
                    <LuPencil />
                      </button></a>
                    </td>
                  </tr>
   <tr className="border-t  border-gray-300">
                    <td className="px-4 py-3">10001</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">280 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className=" ">
                      <span className="bg-yellow-400 w-[50px] text-white px-2 py-1 rounded-md text-10 block text-center">
                        Open
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                        <LuPencil />
                      </button>
                    </td>
                  </tr>
 <tr className="border-t border-gray-300 leading-8">
                    <td className="px-4 py-3">10005</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">sterling</td>
                    <td className="px-4 py-3">Testing1</td>
                    <td className="px-4 py-3">Event - 22th Aug</td>
                    <td className="px-4 py-3">252 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      <span className="bg-[#629C44] w-[120px] leading-8 text-white px-7  rounded-md text-xs block text-center">
                        On-site Technician
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                    <LuPencil />
                      </button>
                    </td>
                  </tr>

                   </tbody>
                  ):four?(
                     <tbody>
                        <tr className="border-t  border-gray-300 ">
                    <td className="px-4 py-3">10003</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">261 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      <span className="bg-[#629C44] w-[120px] leading-8 text-white px-7 rounded-md text-xs block text-center">
                        On-site Technician
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                    <LuPencil />
                      </button>
                    </td>
                  </tr>
             
             <tr className="border-t  border-gray-300 h-8">
                    <td className="px-4 py-6">10002</td>
                    <td className="px-4 py-6">Sterling Infotech</td>
                    <td className="px-4 py-6">Client Site</td>
                    <td className="px-4 py-6">test</td>
                    <td className="px-4 py-6">Event - 25th Aug</td>
                    <td className="px-4 py-6">261 Days</td>
                    <td className="px-4 py-6">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="">
                      <span className="bg-yellow-400 w-[80px] text-white  py-2 rounded-md text-10  block text-center">
                        Working
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                     <LuPencil />
                      </button>
                    </td>
                  </tr>
   <tr className="border-t  border-gray-300">
                    <td className="px-4 py-3">10001</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">Client Site</td>
                    <td className="px-4 py-3">test</td>
                    <td className="px-4 py-3">Event - 25th Aug</td>
                    <td className="px-4 py-3">280 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className=" ">
                      <span className="bg-yellow-400 w-[50px] text-white px-2 py-1 rounded-md text-10 block text-center">
                        Open
                      </span>
                    </td>
                    <td className="px-4 py-3">
                    <a href="/SupportTicket2">
                      <button className="p-1 border rounded hover:bg-gray-100">
                    <LuPencil />
                      </button></a>
                    </td>
                  </tr>
 <tr className="border-t border-gray-300 leading-8">
                    <td className="px-4 py-3">10005</td>
                    <td className="px-4 py-3">Sterling Infotech</td>
                    <td className="px-4 py-3">sterling</td>
                    <td className="px-4 py-3">Testing1</td>
                    <td className="px-4 py-3">Event - 22th Aug</td>
                    <td className="px-4 py-3">252 Days</td>
                    <td className="px-4 py-3">
                      <div className="bg-sky-100 text-sky-700 w-8 h-8 flex items-center justify-center rounded-full font-semibold">
                        U
                      </div>
                    </td>
                    <td className="pt-[20px]">
                      <span className="bg-[#629C44] w-[120px] leading-8 text-white px-7  rounded-md text-xs block text-center">
                        On-site Technician
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <button className="p-1 border rounded hover:bg-gray-100">
                    <LuPencil />
                      </button>
                    </td>
                  </tr>

                   </tbody>
                  ):""


                }
                

                





              















                
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default Dashboard;
