import React from "react";
import { GoPlus } from "react-icons/go";
import { MdEdit } from "react-icons/md";
import { FaEye } from "react-icons/fa";

function Support() {
  return (
    <div className="  pt-[50px] w-[92%] m-auto">
      <div className="flex item-center justify-between">
        <h1 className="text-2xl font-bold mb-6">Support Tickets</h1>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
          <button className="flex items-center gap-2 px-2  border rounded text-[11px] hover:bg-blue-100">
            <GoPlus className="text-[16px]" /> Add Client
          </button>
          <button className="flex items-center gap-2 px-2  border rounded text-[11px] hover:bg-blue-100">
            <GoPlus className="text-[16px]" /> Add Site
          </button>
          <button className="flex items-center gap-2 px-2  border rounded text-[11px] hover:bg-blue-100">
            <GoPlus className="text-[16px]" /> Add Assest
          </button>
          <button className="flex items-center gap-2 px-3 py-1 border rounded text-blue-600 text-[11px] hover:bg-blue-100">
            <GoPlus className="text-[16px]" /> Add Ticket
          </button>
        </div>
      </div>

    
      <div className=" flex item-center justify-around mt-[10px] gap-6">

        <div className="p-4 bg-gray-800 text-white rounded-lg w-[250px] h-[110px] flex justify-between items-center">
          <div>
            <h2 className="text-[13px]">Open Tickets</h2>
            <h1 className="text-4xl font-bold text-blue-400 ">5</h1>
          </div>
          <span className=" border-4  border-l-blue-600 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm ">
            50%
          </span>
        </div>

        {/* Working */}
        <div className="p-4 border bg-white rounded w-[250px] h-[110px] flex justify-between items-center">
          <div>
            <h2 className="text-[13px]">Working</h2>
            <h1 className="text-4xl font-bold text-yellow-400 ">5</h1>
          </div>
          <span className=" border-4 border-gray-400 border-t-yellow-600 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm ">
            50%
          </span>
        </div>

       
        <div className="p-4 bg-white border rounded-lg w-[250px] h-[110px] flex justify-between items-center">
          <div>
            <h2 className="text-[13px]">On-site Technician</h2>
            <h1 className="text-4xl font-bold text-yellow-700 ">2</h1>
          </div>
          <span className=" border-4 border-gray-400 border-t-yellow-700 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm  bg-orange-200 mb-3">
            20%
          </span>
        </div>

        
        <div className="p-4 bg-white border rounded-lg w-[250px] h-[110px] flex justify-between items-center">
          <div>
            <h2 className="text-[13px]">Resolved</h2>
            <h1 className="text-4xl font-bold text-green-500 ">1</h1>
          </div>
          <span className=" border-4 border-gray-400 border-t-green-500 p-[7px] rounded-full h-[45px] w-[45px] font-bold text-sm   mb-3">
            10%
          </span>
        </div>
      </div>

      <div className="mt-[30px] my-8">
        <ul className="flex gap-[50px] text-[14px] py-2  border-b border-gray-300 mb-8 ml-4 font-md">
          <li>
            <a href="">Unresolved</a>
          </li>
          <li>
            <a href="">Open</a>
          </li>
          <li>
            <a href="">Working</a>
          </li>
          <li>
            <a href="">On-site-Technician</a>
          </li>
          <li>
            <a href="">Resolved</a>
          </li>
        </ul>
      </div>

      <div className=" w-full ">
        <table className="w-full border-collapse border border-gray-200">
          {/* Table Header */}
          <thead>
            <tr className="bg-blue-100 text-left text-[13px] text-xs">
              <th className="px-4 py-2 border-b border-gray-300 ">
                Ticket No.
              </th>
              <th className="px-4 py-2 border-b border-gray-300">
                Client Name
              </th>
              <th className="px-4 py-2 border-b border-gray-300">
                Client Site
              </th>
              <th className="px-4 py-2 border-b border-gray-300">Asset</th>
              <th className="px-4 py-2 border-b border-gray-300">Job Title</th>
              <th className="px-4 py-2 border-b border-gray-300">Age</th>
              <th className="px-4 py-2 border-b border-gray-300">
                Technicians
              </th>
              <th className="px-4 py-2 border-b border-gray-300">Status</th>
              <th className="px-4 py-2 border-b border-gray-300">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            <tr className="hover:bg-gray-200 text-[13px] border-b border-gray-300 text-xs">
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
                <a href="">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">
                    Open
                  </span>
                </a>
              </td>
              <td className="px-4 py-2  gap-2">
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-pen text-black p-[20px]">
                    <MdEdit />
                  </i>
                </button>
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-eye text-black p-[20px]">
                    <FaEye />
                  </i>
                </button>
              </td>
            </tr>

            {/* More Rows */}
            <tr className="hover:bg-gray-200  border-b border-gray-300 text-xs">
              <td className="px-4 py-2 p-[20px]">10009</td>
              <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
              <td className="px-4 py-2 p-[20px]">Sterling</td>
              <td className="px-4 py-2 p-[20px]">Testing1</td>
              <td className="px-4 py-2 p-[20px]"></td>
              <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
              <td className="px-4 py-2 flex gap-2 mt-[5px]">
                <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold p-[20px]">
                  AJ
                </span>
              </td>
              <td className="px-4 py-2">
                <a href="">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">
                    Open
                  </span>
                </a>
              </td>
              <td className="px-4 py-2  gap-2">
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-pen text-black p-[20px]">
                    <MdEdit />{" "}
                  </i>
                </button>
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-eye text-black p-[20px]">
                    <FaEye />
                  </i>
                </button>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr className="hover:bg-gray-200   border-b border-gray-300 text-xs">
              <td className="px-4 py-2 p-[20px]">10010</td>
              <td className="px-4 py-2 p-[20px]">Job Client Add</td>
              <td className="px-4 py-2 p-[20px]">TSC</td>
              <td className="px-4 py-2 p-[20px]">Asset 1</td>
              <td className="px-4 py-2 p-[20px]"></td>
              <td className="px-4 py-2 p-[20px]">28 Days</td>
              <td className="px-4 py-2 flex gap-2 mt-[10px]"></td>
              <td className="px-4 py-2">
                <a href="">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[30px]">
                    Open
                  </span>
                </a>
              </td>
              <td className="px-4 py-2  gap-2">
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-pen text-black p-[20px]">
                    <MdEdit />
                  </i>
                </button>
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-eye text-black p-[20px]">
                    <FaEye />
                  </i>
                </button>
              </td>
            </tr>

            {/* More Rows */}
            <tr className="hover:bg-gray-200  border-b border-gray-300 text-xs">
              <td className="px-4 py-2 p-[20px]">10009</td>
              <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
              <td className="px-4 py-2 p-[20px]">Sterling</td>
              <td className="px-4 py-2 p-[20px]">Testing1</td>
              <td className="px-4 py-2 p-[20px]"></td>
              <td className="px-4 py-2 p-[20px]">39 Days</td>
              <td className="px-4 py-2 flex gap-2 mt-[5px]"></td>
              <td className="px-4 py-2">
                <a href="">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">
                    Open
                  </span>
                </a>
              </td>
              <td className="px-4 py-2  gap-2">
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-pen text-black p-[20px]">
                    <MdEdit />{" "}
                  </i>
                </button>
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-eye text-black p-[20px]">
                    <FaEye />
                  </i>
                </button>
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr className="hover:bg-gray-200   border-b border-gray-300 text-xs">
              <td className="px-4 py-2 p-[20px]">10010</td>
              <td className="px-4 py-2 p-[20px]">Job Client Add</td>
              <td className="px-4 py-2 p-[20px]">TSC</td>
              <td className="px-4 py-2 p-[20px]">Asset 1</td>
              <td className="px-4 py-2 p-[20px]"></td>
              <td className="px-4 py-2 p-[20px]">28 Days</td>
              <td className="px-4 py-2 flex  ">
                <div>

                <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center font-bold p-1">
                  AJ
                </span>
                <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center font-bold p-1 text-white">
                  AK
                </span>
                </div>
                <div>


                <span className="w-6 h-6 bg-blue-200 rounded-full flex items-center justify-center font-bold p-1">
                  SJ
                </span>
                <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center font-bold  text-white p-1">
                  AJ
                </span>
                </div>
              </td>
              <td className="">
                <a href="">
                  <span className="bg-orange-500 text-white px-2 py-1 rounded-[4px] text-lg]">
                    On site Technician
                  </span>
                </a>
              </td>
              <td className="px-4 ">
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-pen text-black px-[20px]">
                    <MdEdit />
                  </i>
                </button>
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-eye text-black px-[20px]">
                    <FaEye />
                  </i>
                </button>
              </td>
            </tr>

            {/* More Rows */}
            <tr className="hover:bg-gray-200   border-b border-gray-300 text-xs">
              <td className="px-4 py-2 p-[20px]">10009</td>
              <td className="px-4 py-2 p-[20px]">Sterling Infotech</td>
              <td className="px-4 py-2 p-[20px]">Sterling</td>
              <td className="px-4 py-2 p-[20px]">Testing1</td>
              <td className="px-4 py-2 p-[20px]"></td>
              <td className="px-4 py-2 p-[20px]">Event - 25th Aug</td>
              <td className="px-4 py-2 flex gap-2 mt-[5px]">
                <span className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center font-bold p-[20px]">
                  AJ
                </span>
              </td>
              <td className="px-4 py-2">
                <a href="">
                  <span className="bg-blue-500 text-white px-2 py-1 rounded-[4px] text-sm p-[20px]">
                    Open
                  </span>
                </a>
              </td>
              <td className="px-4 py-2  gap-2">
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-pen text-black p-[20px]">
                    <MdEdit />{" "}
                  </i>
                </button>
                <button className="text-blue-500 hover:underline">
                  <i className="fas fa-eye text-black p-[20px]">
                    <FaEye />
                  </i>
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
