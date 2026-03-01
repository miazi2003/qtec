const JobFilters = ({
  category,
  setCategory,
  location,
  setLocation
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full md:w-2/3">
      
      {/* Category Filter */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
      >
        <option value="">All Categories</option>
        <option value="Development">Development</option>
        <option value="Design">Design</option>
        <option value="Marketing">Marketing</option>
      </select>

      {/* Location Filter */}
      <select
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
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