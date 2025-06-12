import React from "react";
import Logo from "./assets/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { MdLogout } from "react-icons/md";

const Header = () => {
  return (
    <>
      <div className="bg-[#272d34] flex items-center gap-[23%] px-[20px] text-white justify-center p-1 relative">
        <div className="w-[10%] h-[40%]">
          <img src={Logo} alt="" className="w-full h-full" />
        </div>
        <div className="ml-[20px]">
          <IoIosSearch className="text-white text-2xl absolute top-[18px] ml-2 " />
          <input
            type="text"
            className="bg-[#2a3f50] w-[400px] py-[6px]  px-[30px] rounded-[7px]"
          />
        </div>
        <div className="flex items-center text-[15px]  gap-3.5 justify-center">
          <span className="text-white">
            <h3>Welcome back,Clark Kelly!</h3>
          </span>
          <a href="">Logout</a>
          <MdLogout />
        </div>
      </div>
    </>
  );
};

export default Header;
