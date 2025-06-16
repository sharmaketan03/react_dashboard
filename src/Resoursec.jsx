import React from "react";
import { GoPlus } from "react-icons/go";

const Resoursec = () => {
  return (
    <>

   <div className="text-2xl font-bold  w-[92%] m-auto  mt-10">

  <div className="flex items-center justify-between">
    <h1 className="text-2xl font-bold mb-6">Resources</h1>

    <button className="flex items-center bg-blue-500  px-4  rounded-lg text-white text-xs py-1 font-normal ">
      <span className="text-sm"><GoPlus /></span> Add Client
    </button>
  </div>
</div>
<hr className=" bg-gray-200 w-[92%] m-auto " />
<div className=" flex w-[92%] m-auto mt-[20px] text-xs">
<button className="bg-gray-300 text-white   rounded-lg cursor-pointer w-[90px] ">
    Installation
  </button>
  <button className="py-1 px-8 rounded-lg cursor-pointer ">
    Broken Gas Filter
  </button>
</div>

      
    </>
  );
};

export default Resoursec;
