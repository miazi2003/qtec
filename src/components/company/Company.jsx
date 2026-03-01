import React from 'react';
import vodaphone from "../../assets/vodaphone.png";
import intel from "../../assets/intel-3.png";
import amdLogo from "../../assets/amd-logo-1.png";
import tesla from "../../assets/tesla-9 1.png";
import talkit from "../../assets/talkit 1.png";

const Company = () => {
  return (
    <section className="w-full bg-white  px-31">
      {/* Container: Max width ensures the logos don't stretch too far on huge screens.
        py-12 gives that spacious, airy feel around the logos.
      */}
      <div className=" mx-auto py-12 md:py-12">
        
        {/* Heading */}
        <h3 className="text-[#a1a1aa] text-[13px] md:text-[14px] font-medium tracking-wide mb-8 Epilogue">
          Companies we helped grow
        </h3>

        {/* Logo Track: 
          Uses flexbox to distribute space evenly. 
          Grayscale and opacity create that muted, professional "client bar" look.
          Added a subtle hover effect (hover:opacity-100) for a modern touch.
        */}
        <div className="flex flex-wrap justify-between items-center gap-8 md:gap-12 opacity-60">
          
          {/* Vodafone Logo Placeholder */}
          <div className="flex items-center justify-center transition-opacity duration-300 hover:opacity-100">
            <img 
              src={vodaphone}
              alt="Vodafone" 
              className="h-7 md:h-8 object-contain grayscale"
            />
          </div>

          {/* Intel Logo */}
          <div className="flex items-center justify-center transition-opacity duration-300 hover:opacity-100">
            <img 
              src={intel} 
              alt="Intel" 
              className="h-6 md:h-7 object-contain grayscale"
            />
          </div>

          {/* Tesla Logo */}
          <div className="flex items-center justify-center transition-opacity duration-300 hover:opacity-100">
            <img 
              src={tesla} 
              alt="Tesla" 
              className="h-4 md:h-5 object-contain grayscale"
            />
          </div>

          {/* AMD Logo */}
          <div className="flex items-center justify-center transition-opacity duration-300 hover:opacity-100">
            <img 
              src={amdLogo} 
              alt="AMD" 
              className="h-5 md:h-6 object-contain grayscale"
            />
          </div>

          {/* Talkit Logo */}
          <div className="flex items-center justify-center transition-opacity duration-300 hover:opacity-100">
            <img 
              src={talkit} 
              alt="Talkit" 
              className="h-6 md:h-7 object-contain grayscale"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Company;