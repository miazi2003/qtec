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
  const [location, setLocation] = useState(""); // Location state stays here

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("/jobs");
        setJobs(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load jobs." , err);
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
      
      // Makes location search case-insensitive and partial match for better UX
      const matchesLocation = location 
        ? job.location.toLowerCase().includes(location.toLowerCase()) 
        : true;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [jobs, searchTerm, category, location]);

  if (loading) return <p className="text-center mt-10">Loading jobs...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <h1 className="text-[32px] font-bold text-[#1a202c] mb-8 text-center">
          Job Listings
        </h1>

        {/* Search Bar (Now handles Keyword AND Location) */}
        <div className="mb-8 w-full">
          <SearchBar 
            searchTerm={searchTerm} 
            setSearchTerm={setSearchTerm} 
            location={location}
            setLocation={setLocation}
          />
        </div>

        {/* Filters for anything else (e.g., Category only now) */}
        <div className="mb-8">
          <JobFilters
            category={category}
            setCategory={setCategory}
            // Note: Removed location from here since it's in the SearchBar now
          />
        </div>

        {/* Job Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No jobs found matching your criteria.</p>
        )}
        
      </div>
    </div>
  );
};

export default JobListings;