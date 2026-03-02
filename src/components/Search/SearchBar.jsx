import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm, setLocation }) => {

  const [localSearchTerm, setLocalSearchTerm] = useState('');
  const [localLocation, setLocalLocation] = useState('');

 
  const handleSearch = (e) => {
    e.preventDefault(); 
    setSearchTerm(localSearchTerm); 
    setLocation(localLocation);     
  };

  return (

    <form 
      onSubmit={handleSearch} 
      className="w-full bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex flex-col md:flex-row items-center gap-4 md:gap-0"
    >
      
      {/* Keyword Search Section */}
      <div className="flex items-center flex-1 w-full px-4 py-2 md:py-0">
        <svg className="w-5 h-5 text-gray-700 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <div className="flex-1 border-b border-gray-200 mr-2 md:mr-6 pb-[6px] mt-[6px]">
          <input
            type="text"
            value={localSearchTerm}
            onChange={(e) => setLocalSearchTerm(e.target.value)}
            placeholder="Job title or keyword"
            className="w-full outline-none text-[15px] placeholder-gray-300 text-gray-800 bg-transparent"
          />
        </div>
      </div>

      {/* Location Search Section */}
      <div className="flex items-center flex-1 w-full px-4 py-2 md:py-0">
        <svg className="w-5 h-5 text-gray-700 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <div className="flex-1 border-b border-gray-200 mr-2 md:mr-6 pb-[6px] mt-[6px] relative flex items-center">
          <input
            type="text"
            value={localLocation}
            onChange={(e) => setLocalLocation(e.target.value)}
            placeholder="Florence, Italy"
            className="w-full outline-none text-[15px] placeholder-gray-500 text-gray-800 bg-transparent pr-8"
          />
          <svg className="w-4 h-4 text-gray-400 absolute right-0 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Action Button */}
      <button 
        type="submit" 
        className="bg-[#4f46e5] hover:bg-indigo-600 transition-colors text-white font-bold text-[15px] px-8 py-3.5 w-full md:w-auto whitespace-nowrap cursor-pointer"
      >
        Search my job
      </button>
      
    </form>
  );
};

export default SearchBar;