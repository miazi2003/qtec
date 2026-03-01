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
      const matchesLocation = location ? job.location === location : true;

      return matchesSearch && matchesCategory && matchesLocation;
    });
  }, [jobs, searchTerm, category, location]);

  if (loading) return <p className="text-center mt-10">Loading jobs...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6 text-center">Job Listings</h1>

        {/* Search + Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 justify-between">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <JobFilters
            category={category}
            setCategory={setCategory}
            location={location}
            setLocation={setLocation}
          />
        </div>

        {/* Job Grid */}
        {filteredJobs.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job._id} job={job} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No jobs found.</p>
        )}
      </div>
    </div>
  );
};

export default JobListings;