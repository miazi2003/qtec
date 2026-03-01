import { useEffect, useState } from "react";
import axios from "../api/axios";

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);
const [formData, setFormData] = useState({
  title: "",
  company: "",
  location: "",
  category: "",   // ✅ ADD THIS
  description: "",
});

  // Fetch all jobs
  const fetchJobs = async () => {
    try {
      const res = await axios.get("/jobs");
      setJobs(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Add New Job
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/jobs", formData);
    setFormData({
  title: "",
  company: "",
  location: "",
  category: "",   // ✅ ADD THIS
  description: "",
});
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  // Delete Job
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/jobs/${id}`);
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      
      {/* ================= ADD JOB FORM ================= */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-bold mb-4">Add New Job</h2>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            required
            className="border p-2 rounded"
          />

          <input
  type="text"
  name="category"
  placeholder="Category (e.g. Development, Design)"
  value={formData.category}
  onChange={handleChange}
  required
  className="border p-2 rounded"
/>

          <textarea
            name="description"
            placeholder="Job Description"
            value={formData.description}
            onChange={handleChange}
            required
            rows="4"
            className="border p-2 rounded"
          ></textarea>

          <button
            type="submit"
            className="bg-[#4640DE] text-white py-2 rounded hover:opacity-90"
          >
            Add Job
          </button>
        </form>
      </div>

      {/* ================= JOB LIST ================= */}
      <h2 className="text-2xl font-bold mb-6">All Jobs</h2>

      <div className="grid gap-6">
        {jobs.map((job) => (
          <div
            key={job._id}
            className="bg-white shadow-md rounded-lg p-6 relative"
          >
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(job._id)}
              className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded text-sm"
            >
              Remove
            </button>

            {/* Job Info */}
            <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
            <p className="text-gray-600 mb-4">
              {job.company} • {job.location}
            </p>

            <div className="mb-4">
              <h2 className="text-xl font-semibold mb-2">
                Job Description
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {job.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminJobs;