import React from "react";
import Logo from "./assets/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="bg-[#272d34] flex items-center gap-[23%] px-[20px] text-white justify-center p-2 f  fixed top-[0px] w-[100%]">
        <div className="w-[7%] ">
          <img src={Logo} alt="" className="w-full h-full" />
        </div>
        <div className="ml-[20px]">
          <IoIosSearch className="text-white text-2xl absolute top-[20px] ml-2 " />
          <input
            type="text"
            className="bg-[#2a3f50] w-[400px] py-[6px]  px-[30px] rounded-[7px]"
          />
        </div>
        <div className=" text-[15px] hidden md:block ">
      <div className="flex items-center  gap-3.5 justify-center">
            <span className="text-white">
            <h3>Welcome back,Clark Kelly! tanmayshukla</h3>
          </span>
          <a href="">Logout</a>
          <MdLogout />
      </div>
        </div>

        <div className="md:hidden text-black p-1 rounded-xl text-3xl bg-white">
            <a href="#">&#8801;</a>

        </div>
      </div>
    </>
  );
};

export default Header;
