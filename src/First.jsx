import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";

const First = () => {
  return (
    <>
      <div className="h-screen ">
        <Header />

        <div className="flex flex-col md:flex-row  mt-[60px]">
  <div className="w-full md:w-[20%] min-w-[200px]">
    <LeftSideBar />
  </div>
<div className="w-full md:w-[75%] flex-grow">  
    <Outlet />
  </div>
</div>

      </div>
    </>
  );
};

export default First;