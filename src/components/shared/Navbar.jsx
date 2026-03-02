import React, { useState } from "react";
import logo from "../../assets/Frame 3.png";
import ham from "../../assets/hamburger.png"
export default function Navbar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent  relative z-50">

      <div className="max-w-[1440px] mx-auto lg:px-32 md:px-16 px-4 h-16 flex items-center justify-between">
        
   
        <div className="flex items-center gap-14">
          {/* Logo */}
       <a href="/">
          <div className="flex items-center justify-center gap-2 cursor-pointer">
            <span className="w-8 h-8 flex items-center justify-center">
              <img src={logo} alt="QuickHire Logo" className="w-full h-full object-contain" />
            </span>
            <span className="text-[18px] text-gray-800 red_hat font-bold tracking-tight">
              QuickHire
            </span>
          </div></a>
          

          <div className="hidden md:flex items-center gap-8 Epilogue font-medium">
            <a href="/joblistings" className="text-gray-600 text-[15px] hover:text-[#4640DE] transition-colors">
              Find Jobs
            </a>
            <a href="#" className="text-gray-600 text-[15px] hover:text-[#4640DE] transition-colors">
              Browse Companies
            </a>
            <a href="/AdminJobs" className="text-gray-600 text-[15px] hover:text-[#4640DE] transition-colors">
              Dashboard
            </a>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <a href="#" className="text-[#4640DE] text-[15px] font-bold hover:underline Epilogue">
            Login
          </a>
          <button className="bg-[#4640DE] hover:bg-blue-700 text-white text-[14px] Epilogue font-medium px-6 py-2.5 transition-colors ">
            Sign Up
          </button>
        </div>

        <button 
          className="md:hidden flex items-center p-2 text-gray-600 hover:text-gray-900 focus:outline-none bg-white rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            // "X" Close Icon
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger Icon
           <img src={ham} alt="" className="h-3 w-3" />
          )}
        </button>

      </div>

      {/* Mobile Menu Dropdown Container */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-xl py-4 px-4 flex flex-col gap-4 Epilogue z-50">
          <a 
            href="/joblistings" 
            className="text-gray-600 text-[15px] font-medium hover:text-[#4640DE] py-2 border-b border-gray-50"
            onClick={() => setIsMenuOpen(false)} 
          >
            Find Jobs
          </a>
          <a 
            href="#" 
            className="text-gray-600 text-[15px] font-medium hover:text-[#4640DE] py-2 border-b border-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Browse Companies
          </a>
          <a 
            href="/AdminJobs" 
            className="text-gray-600 text-[15px] font-medium hover:text-[#4640DE] py-2 border-b border-gray-50"
            onClick={() => setIsMenuOpen(false)}
          >
            Dashboard
          </a>
          
          <div className="flex flex-col gap-3 mt-2">
            <a href="#" className="text-[#4640DE] text-[15px] font-bold text-center py-2.5 border border-[#4640DE] rounded hover:bg-indigo-50 transition-colors">
              Login
            </a>
            <button className="bg-[#4640DE] text-white text-[15px] font-medium py-2.5 rounded hover:bg-blue-700 transition-colors w-full">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}