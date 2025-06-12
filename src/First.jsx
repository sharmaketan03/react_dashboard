import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";

const First = () => {
  return (
    <>
      <div className="h-screen ">
        <Header />

        <div className="flex md:gap-[5%]">
          <div>
            <LeftSideBar />
          </div>

          <div className="">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default First;