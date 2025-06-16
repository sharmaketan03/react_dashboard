import React from 'react'
import { FiArchive, FiClipboard } from "react-icons/fi";
import { HiOutlineArrowLeft } from "react-icons/hi";

const SupportTicket2 = () => {
  return (
    <div className=" bg-white shadow-md rounded-lg w-[98%] mx-auto mt-[10%] ">
    {/* Header Section */}
    <div className="flex justify-between items-center border-b pb-4 mb-6">
      <div className="flex items-center gap-2">
        <a href="/support"><HiOutlineArrowLeft className="text-xl text-gray-500 cursor-pointer border-[2px] h-[25px] w-[25px] rounded-full" /></a>

        <div>
          <h1 className="text-2xl font-semibold">Support Ticket #10010</h1>
          <p className="text-sm text-gray-500">
            Created: May 15, 2025, 03:24 PM | Claimed by:{" "}
            <span className="text-blue-500 hover:underline cursor-pointer">
              Edit
            </span>
          </p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
          <FiArchive />
          Archive
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
          <FiClipboard />
          Ticket Log
        </button>
      </div>
    </div>

    {/* Status Bar */}
    <div className="flex justify-between items-center">
      <div
        className="flex-1 py-2 px-4 bg-gray-200 text-white rounded-l-lg text-center font-semibold"
      >
        Open
      </div>
      <div
        className="flex-1 py-2 px-4 bg-gray-300 text-gray-600 text-center"
      >
        Working
      </div>
      <div
        className="flex-1 py-2 px-4 bg-orange-500 text-gray-600 text-center"
      >
        On-site Technician
      </div>
      <button className="flex-1 py-2 px-4 bg-gray-400 text-gray-600 rounded-r-lg text-center" >
        Resolved
      </button>
    </div>
    <div className="flex min-h-screen w-[98%] mt-[20px]">
    <div className="max-w-lg  p-6 border rounded-lg shadow-lg bg-white">
      <div className="mb-4">
        <h1 className="text-xl font-bold">Sterling Infotech</h1>
        <button className="text-blue-500 hover:underline float-right">Edit Ticket</button>
        <p>Client Site - 345-9610 Aliquam Rd</p>
        <p>Paul Cox</p>
        <p>468342798</p>
        <p className="text-blue-500 hover:underline">anshu@sterlinginfotech.com</p>
        <button className="text-blue-500 hover:underline">Edit Contact</button>
      </div>

      <div className="border-t my-4"></div>

      <div className="mb-4">
        <div className="flex justify-between mb-2">
          <span>Sites</span>
          <span className="text-blue-500 hover:underline">Client Site</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Asset</span>
          <span className="text-blue-500 hover:underline">test - #34534</span>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        <button className="px-4 py-2 border rounded-lg bg-gray-100">WARRANTY</button>
        <button className="px-4 py-2 border rounded-lg bg-yellow-200">OUT OF WARRANTY</button>
        <button className="px-4 py-2 border rounded-lg bg-gray-100">FOC</button>
      </div>

      <div className="flex gap-2 mb-4">
        <button className="px-4 py-2 border rounded-lg bg-gray-100">PARTS REQUIRED</button>
        <button className="px-4 py-2 border rounded-lg bg-yellow-200">NO PARTS</button>
      </div>

      <div className="flex justify-between mb-4">
        <span>Invoice Number</span>
        <span className="font-medium">MFG-9888</span>
      </div>

      <div className="border-t my-4"></div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Title</label>
        <select className="w-full px-4 py-2 border rounded-lg">
          <option>Event - 25th Aug</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea
          className="w-full px-4 py-2 border rounded-lg"
          rows="4"
          placeholder="Enter description here..."
        ></textarea>
      </div>
    </div>


    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg bg-white">
      {/* Total Time Section */}
      <div className=" ">
      <div className="mb-6 ">
        <h1 className="text-lg font-bold">Total Time</h1>
        {/* <div className="flex items-center justify-between"> */}
          <span className="text-xl text-green-500 font-semibold">0hrs 30mins</span> <br />
          <button className="text-blue-500 hover:underline">View Time</button>
        {/* </div> */}
        
        <div className="flex gap-4 mt-4">
          <button className="flex items-center gap-2 px-2 py-2 border rounded-lg hover:bg-blue-200">
            <span>▶ Start Timer</span>
          </button>
          <button className="flex items-center gap-2 px-2 py-1 bg-gray-100 border rounded-lg hover:bg-gray-200">
            ⏹ 
          </button>
          <button className="flex items-center gap-2 px-2 py-1 bg-gray-100 border rounded-lg hover:bg-blue-200">
            ➕ Add Time
          </button>
        </div>
        </div>
      </div>

      {/* Technicians Section */}
      <div className="mb-6">
        <h1 className="text-lg font-bold">Technicians</h1>
        <div className="flex gap-4 mt-4">
          <button className="px-4 py-2 bg-blue-100 border rounded-lg hover:bg-blue-200">
            ➕ Add Technician
          </button>
          <button className="px-4 py-2 bg-orange-100 border rounded-lg hover:bg-orange-200 text-orange-600">
            🚩 Onsite Technician Required
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span>User1</span>
          <button className="text-red-500 hover:underline">🗑️</button>
        </div>
      </div>

      {/* Comments / Updates Section */}
      <div className="border-t pt-6">
        <h1 className="text-lg font-bold mb-2">Comments / Updates</h1>
        <textarea
          className="w-full px-4 py-2 border rounded-lg mb-4"
          rows="4"
          placeholder="Start typing..."
        ></textarea>
        <h2 className="text-sm font-medium mb-2">Save As:</h2>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 border rounded-lg hover:bg-blue-200">
            📞 Phone
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 border rounded-lg hover:bg-blue-200">
            ✉️ Email
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-100 border rounded-lg hover:bg-blue-200">
            📄 File
          </button>
        </div>
      </div>
    </div>
   
  </div>


  </div>
  )
}

export default SupportTicket2;