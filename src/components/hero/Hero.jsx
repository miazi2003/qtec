import React from 'react';
import vector from "../../assets/Vector.png"
const Hero = ({ searchBarComponent }) => {
  return (
    <section className="relative w-full bg-[#fcfdff] pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden font-sans">
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col z-10">
          <h1 className="text-[52px] sm:text-[52px] lg:text-[64px] font-extrabold text-[#1a202c] leading-[1.1] mb-6 tracking-tight">
            Discover <br />
            more than <br />
            <span className="relative inline-block text-[#26A4FF]">
              5000+ Jobs
              
              {/* Hand-drawn SVG Underline */}
               <img src={vector} alt="" />
            </span>
          </h1>

          <p className="text-[#64748b] text-[17px] sm:text-[18px] leading-relaxed max-w-[480px] mb-10">
            Great platform for the job seeker that searching for new career heights and passionate about startups.
          </p>

          {/* Search Bar Container 
            You can drop your <SearchBar /> component right inside this div. 
            I've added a fallback placeholder just in case it's empty during testing.
          */}
          <div className="w-full max-w-[650px] mb-6 relative z-20">
            {searchBarComponent || (
              <div className="w-full h-[76px] bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded flex items-center px-6 text-gray-400">
                {/* Remove this placeholder text when you render your actual component */}
                Your SearchBar goes here...
              </div>
            )}
          </div>

          {/* Popular Tags */}
          <div className="text-[14px] text-[#64748b] flex items-center gap-2">
            <span className="font-semibold text-[#1a202c]">Popular :</span>
            <span className="truncate">UI Designer, UX Researcher, Android, Admin</span>
          </div>
        </div>

        {/* Right Column: Hero Image */}
        <div className="relative flex justify-center lg:justify-end items-end h-full mt-10 lg:mt-0">
          {/* Replace the 'src' below with the actual path to your cut-out image of the man. 
            Using object-contain and setting max-height ensures he scales perfectly.
          */}
          <img 
            src="/assets/pointing-man.png" 
            alt="Happy job seeker pointing at search bar" 
            className="relative z-10 w-auto max-h-[500px] lg:max-h-[650px] object-contain drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;