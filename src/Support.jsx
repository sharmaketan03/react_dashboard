import React from 'react';
import { GoPlus } from 'react-icons/go';
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";

function Support() {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="flex item-center justify-between">
      <h1 className="text-2xl font-bold mb-6">Support Tickets</h1>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-black-600 hover:bg-blue-100">
          <GoPlus /> Add Client
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-black-600 hover:bg-blue-100">
          <GoPlus /> Add Site
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-black-600 hover:bg-blue-100">
          <GoPlus /> Add Asset
        </button>
        <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-blue-600 hover:bg-blue-100">
          <GoPlus /> Add Ticket
        </button>
      </div>
      </div>

      {/* Ticket Summary */}
      <div className=" flex item-center justify-around mt-[50px] gap-6">
        {/* Open Tickets */}
        <div className="p-4 bg-gray-800 text-white rounded-lg w-[220px] h-[150px]">
          <h2 className="text-lg">Open Tickets</h2>
          <div className="flex items-center justify-around mt-4">
            <span className="text-4xl font-bold text-blue-400 ">5</span>
            <span className="text-blue-400 border-4 - 8px p-[12px] rounded-full h-[60px] w-[60px] font-bold mb-[40px]">50%</span>
          </div>
        </div>

        {/* Working */}
        <div className="p-4 bg-white border rounded-lg w-[220px] h-[150px]">
          <h2 className="text-lg text-gray-800">Working</h2>
          <div className="flex items-center justify-around mt-4 ">
            <span className="text-4xl font-bold text-yellow-500">1</span>
            <span className="text-yellow-400 border-4 - 8px p-[12px] rounded-full h-[60px] w-[60px] font-bold mb-[40px]">10%</span>
          </div>  
        </div>

        {/* On-site Technician */}
        <div className="p-4 bg-white border rounded-lg w-[220px] h-[180px]">
          <h2 className="text-lg text-gray-800">On-site Technician</h2>
          <div className="flex items-center justify-around mt-4">
            <span className="text-4xl font-bold text-orange-500">2</span>
            <span className="text-orange-400 border-4 - 8px p-[12px] rounded-full h-[60px] w-[60px] font-bold mt-[40px]">20%</span>
          </div>
        </div>

        {/* Resolved */}
        <div className="p-4 bg-white border rounded-lg w-[220px] h-[150px]">
          <h2 className="text-lg text-gray-800">Resolved</h2>
          <div className="flex items-center justify-around mt-4">
            <span className="text-4xl font-bold text-green-500">1</span>
            <span className="text-green-400 border-4 - 8px p-[12px] rounded-full h-[60px] w-[60px] font-bold mb-[40px]">10%</span>
          </div>
        </div>
      </div>



      <div className="mt-[70px] ">
        <ul className='flex gap-[70px] '>
          <li><a href="">Unresolved</a></li>
          <li><a href="">Open</a></li>
          <li><a href="">Working</a></li>
          <li><a href="">On-site-Technician</a></li>
          <li><a href="">Resolved</a></li>
        </ul>
      </div>






      <div className="p-6">
  <table className="w-full border-collapse border border-gray-200">
    {/* Table Header */}
    <thead>
      <tr className="bg-blue-100 text-left">
        <th className="px-4 py-2 border-b border-gray-300">Ticket No.</th>
        <th className="px-4 py-2 border-b border-gray-300">Client Name</th>
        <th className="px-4 py-2 border-b border-gray-300">Client Site</th>
        <th className="px-4 py-2 border-b border-gray-300">Asset</th>
        <th className="px-4 py-2 border-b border-gray-300">Job Title</th>
        <th className="px-4 py-2 border-b border-gray-300">Age</th>
        <th className="px-4 py-2 border-b border-gray-300">Technicians</th>
        <th className="px-4 py-2 border-b border-gray-300">Status</th>
        <th className="px-4 py-2 border-b border-gray-300">Actions</th>
      </tr>
    </thead>

    {/* Table Body */}
    <tbody>
      <tr className="hover:bg-gray-200">
        <td className="px-4 py-2 p-[20px]">10010</td>
        <td className="px-4 py-2 p-[20px]">Job Client Add</td>
        <td className="px-4 py-2 p-[20px]">TSC</td>
        <td className="px-4 py-2 p-[20px]">Asset 1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">28 Days</td>
        <td className="px-4 py-2 flex gap-2 mt-[10px]">
          <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
            AJ
          </span>
          <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold p-[20px]">
            U
          </span>
        </td>
        <td className="px-4 py-2">
          <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">Open</span></a>
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /></i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>

      {/* More Rows */}
      <tr className="hover:bg-gray-200">
        <td className="px-4 py-2 p-[20px]">10009</td>
        <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
        <td className="px-4 py-2 p-[20px]">Sterling</td>
        <td className="px-4 py-2 p-[20px]" >Testing1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
        <td className="px-4 py-2 flex gap-2 mt-[5px]">
          <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold p-[20px]">
            AJ
          </span>
        </td>
        <td className="px-4 py-2">
         <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">Open</span></a> 
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /> </i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>
    </tbody>


    <tbody>
      <tr className="hover:bg-gray-200">
        <td className="px-4 py-2 p-[20px]">10010</td>
        <td className="px-4 py-2 p-[20px]">Job Client Add</td>
        <td className="px-4 py-2 p-[20px]">TSC</td>
        <td className="px-4 py-2 p-[20px]">Asset 1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">28 Days</td>
        <td className="px-4 py-2 flex gap-2 mt-[10px]">
          
        </td>
        <td className="px-4 py-2">
          <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">Open</span></a>
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /></i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>

      {/* More Rows */}
      <tr className="hover:bg-gray-200">
        <td className="px-4 py-2 p-[20px]">10009</td>
        <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
        <td className="px-4 py-2 p-[20px]">Sterling</td>
        <td className="px-4 py-2 p-[20px]" >Testing1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">39 Days</td>
        <td className="px-4 py-2 flex gap-2 mt-[5px]">
          
        </td>
        <td className="px-4 py-2">
         <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">Open</span></a> 
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /> </i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>
    </tbody>



    <tbody>
      <tr className="hover:bg-gray-200">
        <td className="px-4 py-2 p-[20px]">10010</td>
        <td className="px-4 py-2 p-[20px]">Job Client Add</td>
        <td className="px-4 py-2 p-[20px]">TSC</td>
        <td className="px-4 py-2 p-[20px]">Asset 1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">28 Days</td>
        <td className="px-4 py-2 flex gap-2 mt-[10px]">
          <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
            AJ
          </span>
          <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center font-bold p-[17px] text-white">
  AK
</span>

        </td>

        <td className="px-4 py-2 flex gap-2 ">
          <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
            SJ
          </span>
          <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center font-bold p-[17px] text-white">
  AJ
</span>

        </td>
        <td className="">
          <a href=""><span className="bg-orange-500 text-white px-2 py-1 rounded-[4px] text-sm  h-[30px]">On site Technician</span></a>
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /></i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>

      {/* More Rows */}
      <tr className="hover:bg-gray-200">
        <td className="px-4 py-2 p-[20px]">10009</td>
        <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
        <td className="px-4 py-2 p-[20px]">Sterling</td>
        <td className="px-4 py-2 p-[20px]" >Testing1</td>
        <td className="px-4 py-2 p-[20px]"></td>
        <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
        <td className="px-4 py-2 flex gap-2 mt-[5px]">
          <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold p-[20px]">
            AJ
          </span>
        </td>
        <td className="px-4 py-2">
         <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">Open</span></a> 
        </td>
        <td className="px-4 py-2  gap-2">
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-pen text-black p-[20px]"><MdEdit /> </i>
          </button>
          <button className="text-blue-500 hover:underline">
            <i className="fas fa-eye text-black p-[20px]"><FaEye /></i>
          </button>
        </td>
      </tr>
    </tbody>

  </table>
</div>


    </div>
    

    
  );
}

export default Support;
