


// import { MdEdit } from "react-icons/md";

// import React from 'react';

// import { useState } from 'react';
// import { GoPlus } from 'react-icons/go';

// import { FaEye } from "react-icons/fa";
// import { LuPencil } from "react-icons/lu";
// import { FiArrowRight } from 'react-icons/fi';
// import { IoIosArrowForward } from "react-icons/io";

// import Portal from './Portal';

// function Support() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isClickOpen, setIsClickOpen] = useState(false);
//   const [isShowOpen, setIsShowOpen] = useState(false);

//     const openModal = () => setIsModalOpen(true);
//      const closeModal = () => setIsModalOpen(false);

//      const openClick = () => setIsClickOpen(true);
//       const closeclick = () => setIsClickOpen(false);
     
//       const openShow = () => setIsShowOpen(true);
//       const closeShow = () => setIsShowOpen(false);

//         const [isPortalOpen, setPortalOpen] = useState(false);
      
//         const togglePortal = () => {
//           setPortalOpen(!isPortalOpen);
//         };
      
//         const closePortal = () => {
//           setPortalOpen(false);
//         }
      
//         const [isOpen, setIsOpen] = useState(false);
//   const handleClick = () => {
//     setIsOpen(!isOpen);
//   }

//   return (

//     <div className="  pt-[50px] w-[92%] m-auto">
//       <div className="flex item-center justify-between">
        
//         <h1 className="text-2xl font-bold mb-6">Support Tickets</h1>


//         {/* Buttons */}
//         <div className="flex gap-4 mb-6">
//           <button className="flex items-center gap-2 px-2  border rounded text-[11px] hover:bg-blue-100">
//             <GoPlus className="text-[16px]" /> Add Client
//           </button>
//           <button className="flex items-center gap-2 px-2  border rounded text-[11px] hover:bg-blue-100">
//             <GoPlus className="text-[16px]" /> Add Site
//           </button>
//           <button className="flex items-center gap-2 px-2  border rounded text-[11px] hover:bg-blue-100">
//             <GoPlus className="text-[16px]" /> Add Assest
//           </button>
//           <button className="flex items-center gap-2 px-3 py-1 border rounded text-blue-600 text-[11px] hover:bg-blue-100">
//             <GoPlus className="text-[16px]" /> Add Ticket
//           </button>
//         </div>
//       </div>

    
//       <div className=" flex item-center justify-around mt-[10px] gap-6">

//         <div className="p-4 bg-gray-800 text-white rounded-lg w-[250px] h-[110px] flex justify-between items-center">
//           <div>
//             <h2 className="text-[13px]">Open Tickets</h2>
//             <h1 className="text-4xl font-bold text-blue-400 ">5</h1>

//       {/* Buttons */}
//       <div className="flex gap-4 mb-6">
//         <button className="flex items-center gap-2 px-2 py-2 border rounded-lg text-black-600 hover:bg-blue-100"  onClick={openModal}>
//           <GoPlus /> Add Client
         
//         </button>

//         {isModalOpen && (
//         <div
//         className="fixed inset-0  bg-opacity-3 flex justify-center items-center z-50 p-[60px]"


//           onClick={closeModal}
//         >
//           <div
//             className="bg-white p-6 rounded-lg w-[45%] shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-center border-b pb-2 mb-5">
//               <h2 className="text-xl font-bold">Add Client</h2>
//               <button
//                 className="text-gray-900 text-[30px] hover:text-gray-900 text-lg "
//                 onClick={closeModal}
//               >
//                 &times;
//               </button>
//             </div>
//             <form>
//               <div className="mb-4">
//                 <label className="block mb-1 text-gray-700">Company Name</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                   placeholder="Enter company name"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 text-gray-700">ABN</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                   placeholder="Enter ABN"
//                 />
//               </div>
//               <div className="mb-4">
//                 <label className="block mb-1 text-gray-700">Address</label>
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                   placeholder="Enter a location"
//                 />
//               </div>
//               <div className="flex items-center gap-2 mb-4 mt-[20px]">
//                 <input
//                   type="checkbox"
//                   id="single-site"
//                   className="w-4 h-4"
//                 />
//                 <label
//                   htmlFor="single-site"
//                   className="text-gray-800 font-bold text-[14px]"
//                 >
//                   Single site company? Set as default site
//                 </label>
//               </div>
//               <div className="flex gap-4 mt-[30px]">
//                 <button
//                   type="button"
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   Add Client
//                 </button>
//                 <button
//                   type="button"
//                   className="text-gray-500 hover:text-gray-700"
//                   onClick={closeModal}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}


//         <button className="flex items-center gap-2 px-2 py-2 border rounded-lg text-black-600 hover:bg-blue-100"  >
//           <GoPlus /> Add Site
//         </button>
//         <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-black-600 hover:bg-blue-100" onClick={openClick}>
//           <GoPlus /> Add Asset
//         </button>

//         {isClickOpen && (
//         <div
//           className="fixed inset-0  bg-opacity-50 flex justify-center items-center z-50"
//           onClick={closeclick}
//         >
//           <div
//             className="bg-white p-6 rounded-lg w-[80%] shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* Header */}
//             <div className="flex justify-between items-center border-b pb-2 mb-5">
//               <h2 className="text-xl font-bold">Add Asset</h2>
//               <button
//                 className="text-gray-900 text-[30px] hover:text-gray-900 text-lg"
//                 onClick={closeclick}
//               >
//                 &times;
//               </button>
//             </div>  

//             {/* Form */}
//             <form>
//               {/* Select Client and Site */}
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <select
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                 >
//                   <option>Select Client</option>
//                   <option>Client 1</option>
//                   <option>Client 2</option>
//                 </select>
//                 <select
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                 >
//                   <option>Select Site</option>
//                   <option>Site 1</option>
//                   <option>Site 2</option>
//                 </select>
//               </div>

//               {/* Machine Name and Serial Number */}
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                   placeholder="Type Machine Name"
//                 />
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                   placeholder="Type Serial Number"
//                 />
//               </div>

//               {/* Type Options */}
//               <div className="grid grid-cols-5 gap-4 mb-4">
//                 <div className="flex items-center col-span-1">
//                   <input type="checkbox" id="select-all" className="w-4 h-4" />
//                   <label htmlFor="select-all" className="ml-2">Select All</label>
//                 </div>
//                 <button className="bg-blue-100 px-3 py-2 rounded">Sedan</button>
//                 <button className="bg-blue-100 px-3 py-2 rounded">SUV</button>
//                 <button className="bg-blue-100 px-3 py-2 rounded">
//                   Hatchback
//                 </button>
//                 <button className="bg-blue-100 px-3 py-2 rounded">Utility</button>
//               </div>

//               {/* Make and Model */}
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                   placeholder="Make (e.g., Toyota)"
//                 />
//                 <input
//                   type="text"
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                   placeholder="Model (e.g., Corolla)"
//                 />
//               </div>

//               {/* Action Buttons */}
//               <div className="flex gap-4 mt-4">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   Add Asset
//                 </button>
//                 <button
//                   type="button"
//                   className="text-gray-500 hover:text-gray-700"
//                   onClick={closeclick}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}

        
//         <button className="flex items-center gap-2 px-3 py-2 border rounded-lg text-blue-600 hover:bg-blue-100"  onClick={openShow}>
//           <GoPlus /> Add Ticket
//         </button>


//         {isShowOpen && (
//         <div
//           className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50 p-[180px] "
//           onClick={closeShow}
//         >
//           <div
//             className="bg-white p-6 rounded-lg w-[45%] shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <div className="flex justify-between items-center border-b pb-2 mb-5">
//               <h2 className="text-xl font-bold">Add Support Ticket</h2>
//               <button
//                 className="text-gray-900 text-[30px] hover:text-gray-900"
//                 onClick={closeShow}
//               >
//                 &times;
//               </button>
//             </div>
//             <form>
//               {/* Client Dropdown */}
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Client <span className="text-blue-500">(required)</span>
//                 </label>
//                 <select
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                 >
//                   <option>Select</option>
//                 </select>
//               </div>

//               {/* Site and Asset Dropdown */}
//               <div className="grid grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Site <span className="text-blue-500">(required)</span>
//                   </label>
//                   <select
//                     className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                   >
//                     <option>Select</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700">
//                     Asset <span className="text-blue-500">(required)</span>
//                   </label>
//                   <select
//                     className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                   >
//                     <option>Select</option>
//                   </select>
//                 </div>
//               </div>

//               {/* Requester Dropdown */}
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Select Requester <span className="text-blue-500">(required)</span>
//                 </label>
//                 <select
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                 >
//                   <option>Select</option>
//                 </select>
//                 <button className="text-blue-600 text-sm mt-1">
//                   New Requester?
//                 </button>
//               </div>

//               {/* Description */}
//               <div className="mb-4">
//                 <label className="block text-sm font-medium text-gray-700">
//                   Description of Issue
//                 </label>
//                 <textarea
//                   className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"
//                   rows="4"
//                   placeholder="Enter issue description"
//                 ></textarea>
//               </div>

//               {/* Buttons */}
//               <div className="flex gap-4  mt-6">
//                 <button
//                   type="submit"
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                   Add Ticket
//                 </button>
//                 <button
//                   type="button"
//                   className="text-gray-500 hover:text-gray-700"
//                   onClick={closeShow}
//                 >
//                   Cancel
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}


//       </div>
//       </div>

//       {/* Ticket Summary */}
//       <div className=" flex item-center justify-around mt-[50px] gap-6">
//         {/* Open Tickets */}
//         <div className="p-4 bg-gray-800 text-white rounded-lg w-[230px] h-[150px]">
//           <h2 className="text-lg">Open Tickets</h2>
//           <div className="flex items-center justify-around mt-4">
//             <span className="text-4xl font-bold text-blue-400 ">5</span>
//             <span className="text-blue-400 border-4 - 8px p-[12px] rounded-full h-[60px] w-[60px] font-bold ">50%</span>

//           </div>
//           <span className=" border-4  border-l-blue-600 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm ">
//             50%
//           </span>
//         </div>

//         {/* Working */}

//         <div className="p-4 border bg-white rounded w-[250px] h-[110px] flex justify-between items-center">
//           <div>
//             <h2 className="text-[13px]">Working</h2>
//             <h1 className="text-4xl font-bold text-yellow-400 ">5</h1>
//           </div>
//           <span className=" border-4 border-gray-400 border-t-yellow-600 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm ">
//             50%
//           </span>
//         </div>

       
//         <div className="p-4 bg-white border rounded-lg w-[250px] h-[110px] flex justify-between items-center">
//           <div>
//             <h2 className="text-[13px]">On-site Technician</h2>
//             <h1 className="text-4xl font-bold text-yellow-700 ">2</h1>

       
//           </div>
//           <span className=" border-4 border-gray-400 border-t-yellow-700 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm  bg-orange-200 mb-3">
//             20%
//           </span>
//         </div>


        
//         <div className="p-4 bg-white border rounded-lg w-[250px] h-[110px] flex justify-between items-center">
//           <div>
//             <h2 className="text-[13px]">Resolved</h2>
//             <h1 className="text-4xl font-bold text-green-500 ">1</h1>

       
//           </div>
//           <span className=" border-4 border-gray-400 border-t-green-500 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm   mb-3">
//             10%
//           </span>
//         </div>
//       </div>

//       <div className="mt-[30px] my-8">
//         <ul className="flex gap-[50px] text-[14px] py-2  border-b border-gray-300 mb-8 ml-4 font-md">
//           <li>
//             <a href="">Unresolved</a>
//           </li>
//           <li>
//             <a href="">Open</a>
//           </li>
//           <li>
//             <a href="">Working</a>
//           </li>
//           <li>
//             <a href="">On-site-Technician</a>
//           </li>
//           <li>
//             <a href="">Resolved</a>
//           </li>
//         </ul>
//       </div>


//       <div className=" w-full ">
//         <table className="w-full border-collapse border border-gray-200">
//           {/* Table Header */}
//           <thead>
//             <tr className="bg-blue-100 text-left text-[13px] text-xs">
//               <th className="px-4 py-2 border-b border-gray-300 ">
//                 Ticket No.
//               </th>
//               <th className="px-4 py-2 border-b border-gray-300">
//                 Client Name
//               </th>
//               <th className="px-4 py-2 border-b border-gray-300">
//                 Client Site
//               </th>
//               <th className="px-4 py-2 border-b border-gray-300">Asset</th>
//               <th className="px-4 py-2 border-b border-gray-300">Job Title</th>
//               <th className="px-4 py-2 border-b border-gray-300">Age</th>
//               <th className="px-4 py-2 border-b border-gray-300">
//                 Technicians
//               </th>
//               <th className="px-4 py-2 border-b border-gray-300">Status</th>
//               <th className="px-4 py-2 border-b border-gray-300">Actions</th>
//             </tr>
//           </thead>

//           {/* Table Body */}
//           <tbody>
//             <tr className="hover:bg-gray-200 text-[13px] border-b border-gray-300 text-xs">
//               <td className="px-4 py-2 p-[20px]">10010</td>
//               <td className="px-4 py-2 p-[20px]">Job Client Add</td>
//               <td className="px-4 py-2 p-[20px]">TSC</td>
//               <td className="px-4 py-2 p-[20px]">Asset 1</td>
//               <td className="px-4 py-2 p-[20px]"></td>
//               <td className="px-4 py-2 p-[20px]">28 Days</td>
//               <td className="px-4 py-2 flex gap-2 mt-[10px]">
//                 <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
//                   AJ
//                 </span>
//                 <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold p-[20px]">
//                   U
//                 </span>
//               </td>
//               <td className="px-4 py-2">
//                 <a href="">
//                   <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">
//                     Open
//                   </span>
//                 </a>
//               </td>
//               <td className="px-4 py-2  gap-2">
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-pen text-black p-[20px]">
//                     <MdEdit />
//                   </i>
//                 </button>
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-eye text-black p-[20px]">
//                     <FaEye />
//                   </i>
//                 </button>
//               </td>
//             </tr>

//             {/* More Rows */}
//             <tr className="hover:bg-gray-200  border-b border-gray-300 text-xs">
//               <td className="px-4 py-2 p-[20px]">10009</td>
//               <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
//               <td className="px-4 py-2 p-[20px]">Sterling</td>
//               <td className="px-4 py-2 p-[20px]">Testing1</td>
//               <td className="px-4 py-2 p-[20px]"></td>
//               <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
//               <td className="px-4 py-2 flex gap-2 mt-[5px]">
//                 <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold p-[20px]">
//                   AJ
//                 </span>
//               </td>
//               <td className="px-4 py-2">
//                 <a href="">
//                   <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">
//                     Open
//                   </span>
//                 </a>
//               </td>
//               <td className="px-4 py-2  gap-2">
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-pen text-black p-[20px]">
//                     <MdEdit />{" "}
//                   </i>
//                 </button>
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-eye text-black p-[20px]">
//                     <FaEye />
//                   </i>
//                 </button>
//               </td>
//             </tr>
//           </tbody>

//           <tbody>
//             <tr className="hover:bg-gray-200   border-b border-gray-300 text-xs">
//               <td className="px-4 py-2 p-[20px]">10010</td>
//               <td className="px-4 py-2 p-[20px]">Job Client Add</td>
//               <td className="px-4 py-2 p-[20px]">TSC</td>
//               <td className="px-4 py-2 p-[20px]">Asset 1</td>
//               <td className="px-4 py-2 p-[20px]"></td>
//               <td className="px-4 py-2 p-[20px]">28 Days</td>
//               <td className="px-4 py-2 flex gap-2 mt-[10px]"></td>
//               <td className="px-4 py-2">
//                 <a href="">
//                   <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">
//                     Open
//                   </span>
//                 </a>
//               </td>
//               <td className="px-4 py-2  gap-2">
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-pen text-black p-[20px]">
//                     <MdEdit />
//                   </i>
//                 </button>
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-eye text-black p-[20px]">
//                     <FaEye />
//                   </i>
//                 </button>
//               </td>
//             </tr>

//             {/* More Rows */}
//             <tr className="hover:bg-gray-200  border-b border-gray-300 text-xs">
//               <td className="px-4 py-2 p-[20px]">10009</td>
//               <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
//               <td className="px-4 py-2 p-[20px]">Sterling</td>
//               <td className="px-4 py-2 p-[20px]">Testing1</td>
//               <td className="px-4 py-2 p-[20px]"></td>
//               <td className="px-4 py-2 p-[20px]">39 Days</td>
//               <td className="px-4 py-2 flex gap-2 mt-[5px]"></td>
//               <td className="px-4 py-2">
//                 <a href="">
//                   <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">
//                     Open
//                   </span>
//                 </a>
//               </td>
//               <td className="px-4 py-2  gap-2">
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-pen text-black p-[20px]">
//                     <MdEdit />{" "}
//                   </i>
//                 </button>
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-eye text-black p-[20px]">
//                     <FaEye />
//                   </i>
//                 </button>
//               </td>
//             </tr>
//           </tbody>

//           <tbody>
//             <tr className="hover:bg-gray-200   border-b border-gray-300 text-xs">
//               <td className="px-4 py-2 p-[20px]">10010</td>
//               <td className="px-4 py-2 p-[20px]">Job Client Add</td>
//               <td className="px-4 py-2 p-[20px]">TSC</td>
//               <td className="px-4 py-2 p-[20px]">Asset 1</td>
//               <td className="px-4 py-2 p-[20px]"></td>
//               <td className="px-4 py-2 p-[20px]">28 Days</td>
//               <td className="px-4 py-2 flex  ">
//                 <div>

//                 <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center font-bold p-1">
//                   AJ
//                 </span>
//                 <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center font-bold p-1 text-white">
//                   AK
//                 </span>
//                 </div>
//                 <div>


//                 <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center font-bold p-1">
//                   SJ
//                 </span>
//                 <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center font-bold  text-white p-1">
//                   AJ
//                 </span>
//                 </div>
//               </td>
//               <td className="">
//                 <a href="">
//                   <span className="bg-orange-500 text-white px-2 py-1 rounded-[4px] text-lg]">
//                     On site Technician
//                   </span>
//                 </a>
//               </td>
//               <td className="px-4 ">
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-pen text-black px-[20px]">
//                     <MdEdit />
//                   </i>
//                 </button>
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-eye text-black px-[20px]">
//                     <FaEye />
//                   </i>
//                 </button>
//               </td>
//             </tr>

//             {/* More Rows */}
//             <tr className="hover:bg-gray-200   border-b border-gray-300 text-xs">
//               <td className="px-4 py-2 p-[20px]">10009</td>
//               <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
//               <td className="px-4 py-2 p-[20px]">Sterling</td>
//               <td className="px-4 py-2 p-[20px]">Testing1</td>
//               <td className="px-4 py-2 p-[20px]"></td>
//               <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
//               <td className="px-4 py-2 flex gap-2 mt-[5px]">
//                 <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold p-[20px]">
//                   AJ
//                 </span>
//               </td>
//               <td className="px-4 py-2">
//                 <a href="">
//                   <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">
//                     Open
//                   </span>
//                 </a>
//               </td>
//               <td className="px-4 py-2  gap-2">
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-pen text-black p-[20px]">
//                     <MdEdit />{" "}
//                   </i>
//                 </button>
//                 <button className="text-blue-500 hover:underline">
//                   <i className="fas fa-eye text-black p-[20px]">
//                     <FaEye />
//                   </i>
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>






//       <div className=" w-full">
//   <table className="w-full border-collapse border border-gray-200">
//     {/* Table Header */}
//     <thead>
//       <tr className="bg-blue-100 text-left text-[14px]">
//         <th className="px-4 py-2 border-b border-gray-300 ">Ticket No.</th>
//         <th className="px-4 py-2 border-b border-gray-300">Client Name</th>
//         <th className="px-4 py-2 border-b border-gray-300">Client Site</th>
//         <th className="px-4 py-2 border-b border-gray-300">Asset</th>
//         <th className="px-4 py-2 border-b border-gray-300">Job Title</th>
//         <th className="px-4 py-2 border-b border-gray-300">Age</th>
//         <th className="px-4 py-2 border-b border-gray-300">Technicians</th>
//         <th className="px-4 py-2 border-b border-gray-300">Status</th>
//         <th className="px-4 py-2 border-b border-gray-300">Actions</th>
//       </tr>
//     </thead>

//     {/* Table Body */}
//     <tbody>
//       <tr className="hover:bg-gray-200 text-sm">
//         <td className="px-4 py-2 p-[20px]">10010</td>
//         <td className="px-4 py-2 p-[20px]">Job Client Add</td>
//         <td className="px-4 py-2 p-[20px]">TSC</td>
//         <td className="px-4 py-2 p-[20px]">Asset 1</td>
//         <td className="px-4 py-2 p-[20px]"></td>
//         <td className="px-4 py-2 p-[20px]">28 Days</td>
//         <td className="px-4 py-2 flex gap-2 mt-[10px]">
//           <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
//             AJ
//           </span>
//           <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold p-[20px]">
//             U
//           </span>
//         </td>
//         <td className="px-4 py-2">
//           <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">Open</span></a>
//         </td>
//         <td className="px-4 py-2  gap-2">
//         <button className="p-1 border rounded hover:bg-gray-100 cursor-pointer" onClick={togglePortal}>
//                     <LuPencil />
//                       </button> 
                      

//                       {isPortalOpen && (
//                         <div className="para_list">
//         <div
//           className="fixed inset-0 bg-opacity-50 flex justify-center items-center z-50"
          
//           onClick={closePortal}
//         >

          
//           <div
//             className="bg-white rounded-lg shadow-lg p-6 w-[30%] max-w-lg max-h-[90%] overflow-y-auto relative top-[30px] left-[476px]"
//             onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//           >

//             <form>
//               {/* Sites */}
            

//               <IoIosArrowForward className='text-2xl cursor-pointer'  onClick={closePortal} />
//               <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-md">
                
//       {/* Header */}
//       <div className="flex justify-between items-center border-b pb-2">
        
//         <div>
//           <h2 className="text-xl font-semibold">Ticket 10010</h2>
//           <p className="text-gray-500 text-sm">May 15, 2025</p>
//         </div>
//         <button className="text-blue-500 text-sm font-medium hover:underline">
//           View full details
//         </button>
//       </div>

//       {/* Content */}
//       <div className="flex items-center gap-4 mt-4">
//         {/* Profile Icon */}
//         <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 text-xl font-semibold">
//           Jc
//         </div>

//         {/* Info */}
//         <div className="flex-1">
//           <h3 className="text-lg font-medium">Job client add</h3>
//           <p className="text-gray-500 text-sm">TSC - total</p>
//           <p className="text-gray-400 text-sm">-</p>
//         </div>

//         {/* Edit Button */}
//         <button className="p-2 bg-gray-100 rounded hover:bg-gray-200">
//           <LuPencil className="text-gray-500" />
//         </button>
//       </div>
//     </div>

//     <div className="mb-6 mt-[20px]">
//                 <label className="block text-gray-700 font-bold">Sites</label>
//                <hr />
//               </div>

//               {/* Asset */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 font-bold">Asset</label>
//                 <hr />
//               </div>

//               {/* Primary Contact */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 font-bold">Primary Contact</label>
//                 <hr />
//               </div>

//               {/* Phone */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 font-bold">Phone</label>
//                 <hr />
//               </div>

//               {/* Email */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 font-bold">Email</label>
//                 <hr />
//               </div>

//               {/* Ticket Title */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 font-bold">Ticket Title</label>
//                 <hr />
//               </div>

//               {/* Description */}
//               <div className="mb-6">
//                 <label className="block text-gray-700 font-bold">Description</label>
//                 <textarea
//                   className="border border-gray-300 rounded w-full p-2 "
//                   rows="4"
//                   placeholder="Enter description"
//                 ></textarea>
//               </div>

//               {/* Action Buttons */}
//               <div className="flex justify-end space-x-4">
//                 <button
//                   type="button"
//                   className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
//                   onClick={closePortal}
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="button"
//                   className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                   onClick={closePortal}
//                 >
//                   Save
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//         </div>
//       )}



                      
                      
//       <br />
//      <a href="/SupportTicket">
//   <button
//     className="p-1 border rounded hover:bg-gray-100 mt-[10px] cursor-pointer"
//   >
//     <FiArrowRight />
//   </button>
// </a>

          
//         </td>

//       </tr>

//       {/* More Rows */}
//       <tr className="hover:bg-gray-200 text-sm">
//         <td className="px-4 py-2 p-[20px]">10009</td>
//         <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
//         <td className="px-4 py-2 p-[20px]">Sterling</td>
//         <td className="px-4 py-2 p-[20px]" >Testing1</td>
//         <td className="px-4 py-2 p-[20px]"></td>
//         <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
//         <td className="px-4 py-2 flex gap-2 mt-[5px]">
//           <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold p-[20px]">
//             AJ
//           </span>
//         </td>
//         <td className="px-4 py-2">
//          <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">Open</span></a> 
//         </td>
//         <td className="px-4 py-2  gap-2">
//         <button className="p-1 border rounded hover:bg-gray-100 cursor-pointer " onClick={togglePortal}>
//                     <LuPencil />
//                       </button> <br />
//                       <a href="/SupportTicket">
//   <button
//     className="p-1 border rounded hover:bg-gray-100 mt-[10px] cursor-pointer"
//   >
//     <FiArrowRight />
//   </button>
// </a>
//         </td>
//       </tr>
//     </tbody>


//     <tbody>
//       <tr className="hover:bg-gray-200 text-sm">
//         <td className="px-4 py-2 p-[20px]">10010</td>
//         <td className="px-4 py-2 p-[20px]">Job Client Add</td>
//         <td className="px-4 py-2 p-[20px]">TSC</td>
//         <td className="px-4 py-2 p-[20px]">Asset 1</td>
//         <td className="px-4 py-2 p-[20px]"></td>
//         <td className="px-4 py-2 p-[20px]">28 Days</td>
//         <td className="px-4 py-2 flex gap-2 mt-[10px]">
          
//         </td>
//         <td className="px-4 py-2">
//           <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">Open</span></a>
//         </td>
//         <td className="px-4 py-2  gap-2">
//         <button className="p-1 border rounded hover:bg-gray-100 cursor-pointer" onClick={togglePortal}>
//                     <LuPencil />
//                       </button> <br />
//                       <a href="/SupportTicket">
//   <button
//     className="p-1 border rounded hover:bg-gray-100 mt-[10px] cursor-pointer"
//   >
//     <FiArrowRight />
//   </button>
// </a>
//         </td>
//       </tr>

//       {/* More Rows */}
//       <tr className="hover:bg-gray-200 text-sm">
//         <td className="px-4 py-2 p-[20px]">10009</td>
//         <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
//         <td className="px-4 py-2 p-[20px]">Sterling</td>
//         <td className="px-4 py-2 p-[20px]" >Testing1</td>
//         <td className="px-4 py-2 p-[20px]"></td>
//         <td className="px-4 py-2 p-[20px]">39 Days</td>
//         <td className="px-4 py-2 flex gap-2 mt-[5px]">
          
//         </td>
//         <td className="px-4 py-2">
//          <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">Open</span></a> 
//         </td>
//         <td className="px-4 py-2  gap-2">
//         <button className="p-1 border rounded hover:bg-gray-100 cursor-pointer" onClick={togglePortal}>
//                     <LuPencil />
//                       </button> <br />
//                       <a href="/SupportTicket">
//   <button
//     className="p-1 border rounded hover:bg-gray-100 mt-[10px] cursor-pointer"
//   >
//     <FiArrowRight />
//   </button>
// </a>
//         </td>
//       </tr>
//     </tbody>



//     <tbody>
//       <tr className="hover:bg-gray-200 text-sm">
//         <td className="px-4 py-2 p-[20px]">10010</td>
//         <td className="px-4 py-2 p-[20px]">Job Client Add</td>
//         <td className="px-4 py-2 p-[20px]">TSC</td>
//         <td className="px-4 py-2 p-[20px]">Asset 1</td>
//         <td className="px-4 py-2 p-[20px]"></td>
//         <td className="px-4 py-2 p-[20px]">28 Days</td>
//         <td className="px-4 py-2 flex gap-2 mt-[10px]">
//           <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
//             AJ
//           </span>
//           <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center font-bold p-[17px] text-white">
//   AK
// </span>

//         </td>

//         <td className="px-4 py-2 flex gap-2 ">
//           <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold ">
//             SJ
//           </span>
//           <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center font-bold p-[17px] text-white">
//   AJ
// </span>

//         </td>
//         <td className="">
//           <a href=""><span className="bg-orange-500 text-white px-2 py-1 rounded-[4px] text-lg]">On site Technician</span></a>
//         </td>
//         <td className="px-4 py-2  gap-2">
//         <button className="p-1 border rounded hover:bg-gray-100 cursor-pointer" onClick={togglePortal}>
//                     <LuPencil />
//                       </button><br />
//                       <a href="/SupportTicket">
//   <button
//     className="p-1 border rounded hover:bg-gray-100 mt-[10px] cursor-pointer"
//   >
//     <FiArrowRight />
//   </button>
// </a>
//         </td>
//       </tr>

//       {/* More Rows */}
//       <tr className="hover:bg-gray-200 text-sm">
//         <td className="px-4 py-2 p-[20px]">10009</td>
//         <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
//         <td className="px-4 py-2 p-[20px]">Sterling</td>
//         <td className="px-4 py-2 p-[20px]" >Testing1</td>
//         <td className="px-4 py-2 p-[20px]"></td>
//         <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
//         <td className="px-4 py-2 flex gap-2 mt-[5px]">
//           <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold p-[20px]">
//             AJ
//           </span>
//         </td>
//         <td className="px-4 py-2">
//          <a href=""><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">Open</span></a> 
//         </td>
//         <td className="px-4 py-2  gap-2">
//         <button className="p-1 border rounded hover:bg-gray-100 cursor-pointer" onClick={togglePortal}>
//                     <LuPencil />
//                       </button><br />
//                       <a href="/SupportTicket">
//   <button
//     className="p-1 border rounded hover:bg-gray-100 mt-[10px] cursor-pointer"
//   >
//     <FiArrowRight />
//   </button>
// </a>
//         </td>
//       </tr>
//     </tbody>

//   </table>
// </div>



//     </div>
  
// export default Support;






import React, { useState } from 'react';
import { MdEdit } from "react-icons/md";
import { GoPlus } from 'react-icons/go';
import { FaEye } from "react-icons/fa";
import { LuPencil } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";

// Assuming 'Portal' is a component you have in './Portal.js'
// If not, you will need to create or remove it.
// import Portal from './Portal'; 

function Support() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isClickOpen, setIsClickOpen] = useState(false);
    const [isShowOpen, setIsShowOpen] = useState(false);
    const [isPortalOpen, setPortalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const openClick = () => setIsClickOpen(true);
    const closeClick = () => setIsClickOpen(false);

    const openShow = () => setIsShowOpen(true);
    const closeShow = () => setIsShowOpen(false);

    const togglePortal = () => setPortalOpen(!isPortalOpen);
    const closePortal = () => setPortalOpen(false);

    return (
        <div className="pt-[50px] w-[92%] m-auto">
            {/* ======================= Header ======================= */}
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">Support Tickets</h1>

                {/* Header Buttons */}
                <div className="flex gap-4">
                    <button onClick={openModal} className="flex items-center gap-2 px-2 border rounded text-[11px] hover:bg-blue-100">
                        <GoPlus className="text-[16px]" /> Add Client
                    </button>
                    <button className="flex items-center gap-2 px-2 border rounded text-[11px] hover:bg-blue-100">
                        <GoPlus className="text-[16px]" /> Add Site
                    </button>
                    <button onClick={openClick} className="flex items-center gap-2 px-2 border rounded text-[11px] hover:bg-blue-100">
                        <GoPlus className="text-[16px]" /> Add Asset
                    </button>
                    <button onClick={openShow} className="flex items-center gap-2 px-3 py-1 border rounded text-blue-600 text-[11px] hover:bg-blue-100">
                        <GoPlus className="text-[16px]" /> Add Ticket
                    </button>
                </div>
            </div>

            {/* ======================= Modals ======================= */}

            {/* Add Client Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50" onClick={closeModal}>
                    <div className="bg-white p-6 rounded-lg w-[45%] shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center border-b pb-2 mb-5">
                            <h2 className="text-xl font-bold">Add Client</h2>
                            <button className="text-gray-900 text-[30px] hover:text-gray-700" onClick={closeModal}>&times;</button>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Company Name</label>
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none" placeholder="Enter company name" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">ABN</label>
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none" placeholder="Enter ABN" />
                            </div>
                            <div className="mb-4">
                                <label className="block mb-1 text-gray-700">Address</label>
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none" placeholder="Enter a location" />
                            </div>
                            <div className="flex items-center gap-2 mb-4 mt-[20px]">
                                <input type="checkbox" id="single-site" className="w-4 h-4" />
                                <label htmlFor="single-site" className="text-gray-800 font-bold text-[14px]">Single site company? Set as default site</label>
                            </div>
                            <div className="flex gap-4 mt-[30px]">
                                <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Client</button>
                                <button type="button" className="text-gray-500 hover:text-gray-700" onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Asset Modal */}
            {isClickOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeClick}>
                    <div className="bg-white p-6 rounded-lg w-[80%] shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center border-b pb-2 mb-5">
                            <h2 className="text-xl font-bold">Add Asset</h2>
                            <button className="text-gray-900 text-[30px] hover:text-gray-700" onClick={closeClick}>&times;</button>
                        </div>
                        <form>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"><option>Select Client</option></select>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"><option>Select Site</option></select>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none" placeholder="Type Machine Name" />
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none" placeholder="Type Serial Number" />
                            </div>
                            <div className="grid grid-cols-5 gap-4 mb-4">
                                <div className="flex items-center col-span-1">
                                    <input type="checkbox" id="select-all" className="w-4 h-4" />
                                    <label htmlFor="select-all" className="ml-2">Select All</label>
                                </div>
                                <button className="bg-blue-100 px-3 py-2 rounded">Sedan</button>
                                <button className="bg-blue-100 px-3 py-2 rounded">SUV</button>
                                <button className="bg-blue-100 px-3 py-2 rounded">Hatchback</button>
                                <button className="bg-blue-100 px-3 py-2 rounded">Utility</button>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none" placeholder="Make (e.g., Toyota)" />
                                <input type="text" className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none" placeholder="Model (e.g., Corolla)" />
                            </div>
                            <div className="flex gap-4 mt-4">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Asset</button>
                                <button type="button" className="text-gray-500 hover:text-gray-700" onClick={closeClick}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Add Ticket Modal */}
            {isShowOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeShow}>
                    <div className="bg-white p-6 rounded-lg w-[45%] shadow-lg" onClick={(e) => e.stopPropagation()}>
                        <div className="flex justify-between items-center border-b pb-2 mb-5">
                            <h2 className="text-xl font-bold">Add Support Ticket</h2>
                            <button className="text-gray-900 text-[30px] hover:text-gray-700" onClick={closeShow}>&times;</button>
                        </div>
                        <form>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Client <span className="text-blue-500">(required)</span></label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"><option>Select</option></select>
                            </div>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Site <span className="text-blue-500">(required)</span></label>
                                    <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"><option>Select</option></select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Asset <span className="text-blue-500">(required)</span></label>
                                    <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"><option>Select</option></select>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Select Requester <span className="text-blue-500">(required)</span></label>
                                <select className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none"><option>Select</option></select>
                                <button className="text-blue-600 text-sm mt-1">New Requester?</button>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Description of Issue</label>
                                <textarea className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200 focus:outline-none" rows="4" placeholder="Enter issue description"></textarea>
                            </div>
                            <div className="flex gap-4 mt-6">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add Ticket</button>
                                <button type="button" className="text-gray-500 hover:text-gray-700" onClick={closeShow}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            
            {/* ======================= Ticket Summary Cards ======================= */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                <div className="p-4 bg-gray-800 text-white rounded-lg flex justify-between items-center">
                    <div>
                        <h2 className="text-[13px]">Open Tickets</h2>
                        <h1 className="text-4xl font-bold text-blue-400">5</h1>
                    </div>
                    <span className="border-4 border-l-blue-600 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm flex items-center justify-center">50%</span>
                </div>
                <div className="p-4 border bg-white rounded-lg flex justify-between items-center">
                    <div>
                        <h2 className="text-[13px]">Working</h2>
                        <h1 className="text-4xl font-bold text-yellow-400">5</h1>
                    </div>
                    <span className="border-4 border-gray-300 border-t-yellow-500 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm flex items-center justify-center">50%</span>
                </div>
                <div className="p-4 bg-white border rounded-lg flex justify-between items-center">
                    <div>
                        <h2 className="text-[13px]">On-site Technician</h2>
                        <h1 className="text-4xl font-bold text-yellow-700">2</h1>
                    </div>
                    <span className="border-4 border-gray-300 border-t-yellow-700 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm flex items-center justify-center">20%</span>
                </div>
                <div className="p-4 bg-white border rounded-lg flex justify-between items-center">
                    <div>
                        <h2 className="text-[13px]">Resolved</h2>
                        <h1 className="text-4xl font-bold text-green-500">1</h1>
                    </div>
                    <span className="border-4 border-gray-300 border-t-green-500 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm flex items-center justify-center">10%</span>
                </div>
            </div>

            {/* ======================= Tabs and Table ======================= */}
            <div className="mt-8">
                <ul className="flex gap-8 text-[14px] py-2 border-b border-gray-300 mb-8 ml-4 font-medium">
                    <li><a href="#" className="text-blue-600">Unresolved</a></li>
                    <li><a href="#" className="hover:text-blue-600">Open</a></li>
                    <li><a href="#" className="hover:text-blue-600">Working</a></li>
                    <li><a href="#" className="hover:text-blue-600">On-site-Technician</a></li>
                    <li><a href="#" className="hover:text-blue-600">Resolved</a></li>
                </ul>
            </div>

            <div className="w-full overflow-x-auto">
                <table className="w-full border-collapse border border-gray-200 text-xs">
                    <thead>
                        <tr className="bg-blue-100 text-left">
                            <th className="px-4 py-3 border-b border-gray-300">Ticket No.</th>
                            <th className="px-4 py-3 border-b border-gray-300">Client Name</th>
                            <th className="px-4 py-3 border-b border-gray-300">Client Site</th>
                            <th className="px-4 py-3 border-b border-gray-300">Asset</th>
                            <th className="px-4 py-3 border-b border-gray-300">Job Title</th>
                            <th className="px-4 py-3 border-b border-gray-300">Age</th>
                            <th className="px-4 py-3 border-b border-gray-300">Technicians</th>
                            <th className="px-4 py-3 border-b border-gray-300">Status</th>
                            <th className="px-4 py-3 border-b border-gray-300">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="hover:bg-gray-100 border-b border-gray-300">
                            <td className="px-4 py-3">10010</td>
                            <td className="px-4 py-3">Job Client Add</td>
                            <td className="px-4 py-3">TSC</td>
                            <td className="px-4 py-3">Asset 1</td>
                            <td className="px-4 py-3"></td>
                            <td className="px-4 py-3">28 Days</td>
                            <td className="px-4 py-3 flex gap-1 items-center">
                                <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold">AJ</span>
                                <span className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center font-bold">U</span>
                            </td>
                            <td className="px-4 py-3"><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px]">Open</span></td>
                            <td className="px-4 py-3 flex gap-2">
                                <button className="p-2 border rounded hover:bg-gray-200" onClick={togglePortal}><LuPencil /></button>
                                <button className="p-2 border rounded hover:bg-gray-200"><FaEye /></button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 border-b border-gray-300">
                            <td className="px-4 py-3">10009</td>
                            <td className="px-4 py-3">Sterling Infotech</td>
                            <td className="px-4 py-3">Sterling</td>
                            <td className="px-4 py-3">Testing1</td>
                            <td className="px-4 py-3">Event - 25th Aug</td>
                            <td className="px-4 py-3">39 Days</td>
                            <td className="px-4 py-3 flex gap-1 items-center">
                                <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold">AJ</span>
                            </td>
                            <td className="px-4 py-3"><span className="bg-blue-500 text-white px-2 py-1 rounded-[4px]">Open</span></td>
                            <td className="px-4 py-3 flex gap-2">
                                <button className="p-2 border rounded hover:bg-gray-200"><LuPencil /></button>
                                <button className="p-2 border rounded hover:bg-gray-200"><FaEye /></button>
                            </td>
                        </tr>
                        <tr className="hover:bg-gray-100 border-b border-gray-300">
                            <td className="px-4 py-3">10008</td>
                            <td className="px-4 py-3">Job Client Add</td>
                            <td className="px-4 py-3">TSC</td>
                            <td className="px-4 py-3">Asset 1</td>
                            <td className="px-4 py-3"></td>
                            <td className="px-4 py-3">28 Days</td>
                            <td className="px-4 py-3 flex -space-x-4">
                                <span className="w-8 h-8 bg-blue-300 border-2 border-white rounded-full flex items-center justify-center font-bold">AJ</span>
                                <span className="w-8 h-8 bg-red-300 border-2 border-white rounded-full flex items-center justify-center font-bold">SK</span>
                                <span className="w-8 h-8 bg-yellow-300 border-2 border-white rounded-full flex items-center justify-center font-bold">MJ</span>
                                <span className="w-8 h-8 bg-gray-300 border-2 border-white rounded-full flex items-center justify-center font-bold">+2</span>
                            </td>
                            <td className="px-4 py-3"><span className="bg-orange-500 text-white px-2 py-1 rounded-[4px]">On-site</span></td>
                            <td className="px-4 py-3 flex gap-2">
                                <button className="p-2 border rounded hover:bg-gray-200"><LuPencil /></button>
                                <button className="p-2 border rounded hover:bg-gray-200"><FaEye /></button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* ======================= Side Panel / Portal ======================= */}
            {isPortalOpen && (
                <div className="fixed inset-0 z-40" onClick={closePortal}>
                    <div 
                        className="fixed top-0 right-0 h-full bg-white shadow-lg w-[35%] max-w-lg p-6 overflow-y-auto transform transition-transform duration-300 ease-in-out"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-start items-center mb-4">
                             <button onClick={closePortal} className="p-2 rounded-full hover:bg-gray-200">
                                <IoIosArrowForward className='text-2xl cursor-pointer' />
                             </button>
                        </div>
                        
                        <div className="bg-white rounded-lg p-4 w-full">
                            <div className="flex justify-between items-center border-b pb-3">
                                <div>
                                    <h2 className="text-xl font-semibold">Ticket 10010</h2>
                                    <p className="text-gray-500 text-sm">May 15, 2025</p>
                                </div>
                                <button className="text-blue-500 text-sm font-medium hover:underline">View full details</button>
                            </div>

                            <div className="flex items-center gap-4 mt-4">
                                <div className="flex justify-center items-center w-12 h-12 rounded-full bg-blue-100 text-blue-500 text-xl font-semibold">JC</div>
                                <div className="flex-1">
                                    <h3 className="text-lg font-medium">Job client add</h3>
                                    <p className="text-gray-500 text-sm">TSC - total</p>
                                </div>
                                <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
                                    <LuPencil className="text-gray-500" />
                                </button>
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-gray-700 font-bold mb-2">Details</label>
                            <hr />
                            {/* Add more form fields or details here */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Support;




