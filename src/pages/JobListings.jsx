import { useState, useMemo, useEffect } from "react";
import axios from "../api/axios";
import JobCard from "../components/cards/JobCard";
import SearchBar from "../components/Search/SearchBar";
import JobFilters from "../components/Search/JobFilters";

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load jobs.", err);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const search = searchTerm.toLowerCase();

      const matchesSearch = search
        ? Object.values(job).join(" ").toLowerCase().includes(search)
        : true;

      const matchesCategory = category ? job.category === category : true;
      

      const matchesLocation = location 
        ? job.location.toLowerCase().includes(location.toLowerCase()) 
        : true;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [jobs, searchTerm, category, location]);

  return (

    <div className="min-h-screen bg-[#fcfdff] py-12 md:py-20 font-sans">
      

      <div className="max-w-[1440px] mx-auto lg:px-32 md:px-16 px-4">
        
       
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-[32px] md:text-[48px] font-bold text-[#1a202c] leading-tight tracking-tight clash">
            Explore <span className="text-[#4640DE]">job listings</span>
          </h1>
          <p className="text-[#64748b] text-[15px] md:text-[18px] mt-3 Epilogue max-w-2xl">
            Find your dream job from our extensive list of opportunities. Search by keyword, location, or filter by category.
          </p>
        </div>

        {/* Search Bar & Filters Wrapper */}
        <div className="bg-white p-6 md:p-8 border border-gray-100 shadow-sm mb-12">
          {/* Search Bar */}
          <div className="mb-6 w-full">
            <SearchBar 
              searchTerm={searchTerm} 
              setSearchTerm={setSearchTerm} 
              location={location}
              setLocation={setLocation}
            />
          </div>

          {/* Filters */}
          <div className="w-full border-t border-gray-100 pt-6">
            <JobFilters
              category={category}
              setCategory={setCategory}
            />
          </div>
        </div>

        {/* Loading / Error States */}
        {loading && (
          <div className="flex justify-center items-center py-20">
            <p className="text-[18px] text-[#4640DE] font-semibold Epilogue animate-pulse">
              Loading jobs...
            </p>
          </div>
        )}
        
        {error && (
          <div className="flex justify-center items-center py-20">
            <p className="text-[16px] text-red-500 font-medium Epilogue bg-red-50 px-6 py-3 border border-red-100">
              {error}
            </p>
          </div>
        )}

        {/* Job Grid */}
        {!loading && !error && (
          <>
            {filteredJobs.length > 0 ? (
   
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {filteredJobs.map((job) => (
                  <JobCard key={job._id} job={job} />
                ))}
              </div>
            ) : (

              <div className="text-center py-20 bg-white border border-gray-100 shadow-sm">
                <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-[20px] font-bold text-[#1a202c] mb-2 clash">No jobs found</h3>
                <p className="text-[#64748b] text-[15px] Epilogue">
                  Try adjusting your search criteria or clearing your filters.
                </p>
                <button 
                  onClick={() => { setSearchTerm(''); setLocation(''); setCategory(''); }}
                  className="mt-6 px-6 py-2 bg-[#4640DE] text-white text-[14px] font-bold Epilogue transition-colors hover:bg-[#3934b3]"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )}
        
      </div>
    </div>
  );
};

export default JobListings;