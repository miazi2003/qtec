import React, { useState } from 'react';
import vector from "../../assets/Vector.png";
import model from "../../assets/hero_model.png";
import SearchBar from '../Search/SearchBar';

const Hero = () => {

  // ✅ Added state for SearchBar
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  return (
    <section className="relative w-full bg-[#fcfdff] pt-8 pb-20 overflow-hidden font-sans">
      <div className="mx-auto lg:px-31 md:px-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center hero-left">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col z-10">
          <h1 className="text-[52px] sm:text-[52px] lg:text-[64px] font-extrabold text-[#1a202c] leading-[1.1] mb-6 tracking-tight clash">
            Discover <br />
            more than <br />
            <span className="relative inline-block text-[#26A4FF]">
              5000+ Jobs
              <img src={vector} alt="" className='w-4/5 mt-4' />
            </span>
          </h1>

          <p className="text-[#64748b] text-[17px] sm:text-[18px] leading-relaxed max-w-[480px] mb-10">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* ✅ SearchBar Added Properly */}
          <div className="w-full max-w-[650px] mb-6 relative z-20">
            <SearchBar 
              setSearchTerm={setSearchTerm}
              setLocation={setLocation}
            />
          </div>

          {/* Popular Tags */}
          <div className="text-[14px] text-[#64748b] md:flex flex-col items-center gap-2">
            <span className="font-semibold text-[#1a202c] w-md">Popular :</span>
            <span className="">UI Designer, UX Researcher, Android, Admin</span>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="relative flex justify-center lg:justify-end items-end h-full mt-10 lg:mt-0 md:block hidden">
          <img 
            src={model} 
            alt="Happy job seeker pointing at search bar" 
            className="relative z-10 w-auto max-h-[500px] lg:max-h-[650px] object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;