import React from 'react';
import { GoPlus } from 'react-icons/go';


const Resoursec = () => {
  return (
    <div className="flex">
     
      <div className=" flex-col w-full px-[80px] pt-[60px]">
  <div className="flex justify-between items-center">
    <div>
      <h1 className="text-2xl font-bold mb-4">Resources</h1>
    </div>
    <div>
      <button className="flex items-center bg-blue-400 gap-2 px-4 py-2 rounded-lg text-white hover:bg-blue-200">
        <GoPlus /> Add Client
      </button>
    </div>
  </div>
  <hr className="mt-4 h-[1px] bg-black " />
  <div className="mt-[30px] flex  gap-[10px]">
  <button className="bg-gray-400 text-white py-2 px-4 rounded cursor-pointer">Installation</button>
  <button className=" py-2 px-4 rounded cursor-pointer">Broken Gas Filter</button>
</div>

</div>


</div>
    
    
  );
};

export default Resoursec;
