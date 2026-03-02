import React from "react";
import logo from "../../assets/Frame 3.png"

export default function Navbar() {
  return (
    <nav className="w-full bg-[#f3f4f6] border-b border-gray-200 ">
      <div className=" mx-auto lg:px-31 md:px-16 px-4 h-16 flex items-center justify-between">
        
        {/* Left Section - Logo */}
        <div className="flex items-center gap-14">
          <div className=" rounded-full  flex items-center justify-center gap-2">
            <span className="text-white font-bold text-sm w-8 h-8"><img src={logo} alt="" /></span>
             <span className="text-[18px]  text-gray-800 red_hat font-bold">
            QuickHire
          </span>
          </div>
         
             <div className="flex items-center gap-8 Epilogue font-medium">
          <a
            href="/joblistings"
            className="text-gray-600 text-[15px] font-medium hover:text-gray-900 transition"
          >
            Find Jobs
          </a>
          <a
            href="#"
            className="text-gray-600 text-[15px] font-medium hover:text-gray-900 transition"
          >
            Browse Companies
          </a>
          <a
            href="/AdminJobs"
            className="text-gray-600 text-[15px] font-medium hover:text-gray-900 transition"
          >
           Dashboard
          </a>
        </div>
        </div>

        {/* Middle Section - Links */}
     

        {/* Right Section - Auth Buttons */}
        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-blue-600 text-[15px] font-medium hover:underline Epilogue "
          >
            Login
          </a>

          <button className="bg-[#4640DE] hover:bg-blue-700 text-white text-[14px] Epilogue  font-medium px-5 py-2  transition">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}