const JobFilters = ({ category, setCategory, location, setLocation }) => {
  return (
    <div className="flex flex-col md:flex-row gap-5 w-full">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full md:min-w-[220px] px-4 py-3 bg-[#fcfdff] border border-gray-200 text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none Epilogue cursor-pointer appearance-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'right 1rem center', 
          backgroundSize: '1.2em 1.2em', 
          paddingRight: '2.5rem' 
        }}
      >
        <option value="">All Categories</option>
        <option value="Development">Development</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>

      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full md:min-w-[220px] px-4 py-3 bg-[#fcfdff] border border-gray-200 text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none Epilogue cursor-pointer appearance-none"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%2364748b'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, 
          backgroundRepeat: 'no-repeat', 
          backgroundPosition: 'right 1rem center', 
          backgroundSize: '1.2em 1.2em', 
          paddingRight: '2.5rem' 
        }}
      >
        <option value="">All Locations</option>
        <option value="Remote">Remote</option>
        <option value="New York">New York</option>
        <option value="London">London</option>
      </select>
    </div>
  );
};

export default JobFilters;