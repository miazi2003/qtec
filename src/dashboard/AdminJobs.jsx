import { useEffect, useState } from "react";
import axios from "../api/axios";

const AdminJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "",
    category: "",
    description: "",
  });

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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/jobs", formData);
      setFormData({
        title: "",
        company: "",
        location: "",
        category: "",
        description: "",
      });
      setIsModalOpen(false);
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/jobs/${id}`);
      fetchJobs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfdff] py-12 md:py-20 font-sans">
      <div className="max-w-[1440px] mx-auto lg:px-32 md:px-16 px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#1a202c] leading-tight tracking-tight clash">
              Manage <span className="text-[#4640DE]">Jobs</span>
            </h1>
            <p className="text-[#64748b] text-[15px] mt-2 Epilogue">
              Dashboard to view, add, and remove job postings.
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-[#4640DE] text-white px-6 py-[14px] text-[15px] font-bold hover:bg-[#3934b3] transition-colors Epilogue rounded-none flex items-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Add New Job
          </button>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a202c]/40 backdrop-blur-sm px-4">
            <div className="bg-white w-full max-w-2xl border border-gray-100 shadow-2xl p-8 md:p-10 relative">
              
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-[#1a202c] transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <h2 className="text-[28px] font-bold text-[#1a202c] mb-8 clash">Add New Job</h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 Epilogue">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[14px] font-semibold text-[#1a202c] mb-2">Job Title</label>
                    <input
                      type="text"
                      name="title"
                      placeholder="e.g. Senior UI Designer"
                      value={formData.title}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#fcfdff] border border-gray-200 text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-semibold text-[#1a202c] mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="e.g. Dropbox"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#fcfdff] border border-gray-200 text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none placeholder-gray-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[14px] font-semibold text-[#1a202c] mb-2">Location</label>
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. San Francisco, US"
                      value={formData.location}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#fcfdff] border border-gray-200 text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none placeholder-gray-400"
                    />
                  </div>
                  <div>
                    <label className="block text-[14px] font-semibold text-[#1a202c] mb-2">Category</label>
                    <input
                      type="text"
                      name="category"
                      placeholder="e.g. Design, Development"
                      value={formData.category}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-[#fcfdff] border border-gray-200 text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none placeholder-gray-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] font-semibold text-[#1a202c] mb-2">Job Description</label>
                  <textarea
                    name="description"
                    placeholder="Describe the role, responsibilities, and requirements..."
                    value={formData.description}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-[#fcfdff] border border-gray-200 text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none placeholder-gray-400 resize-none"
                  ></textarea>
                </div>

                <div className="flex justify-end gap-4 mt-4">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-6 py-[14px] text-[15px] font-bold text-[#64748b] hover:text-[#1a202c] transition-colors rounded-none"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#4640DE] text-white px-8 py-[14px] text-[15px] font-bold hover:bg-[#3934b3] transition-colors rounded-none"
                  >
                    Publish Job
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300 flex flex-col h-full rounded-none"
            >
              <div>
                <h2 className="text-[18px] font-bold text-[#1a202c] mb-1 Epilogue tracking-tight">
                  {job.title}
                </h2>
                <p className="text-[14px] text-[#64748b] font-medium mb-4 Epilogue">
                  <span className="text-[#1a202c]">{job.company}</span>
                  <span className="mx-1.5">•</span>
                  {job.location}
                  {job.category && (
                    <>
                      <span className="mx-1.5">•</span> {job.category}
                    </>
                  )}
                </p>
                <p className="text-[14px] text-[#94a3b8] mt-2 mb-8 leading-relaxed line-clamp-3 Epilogue">
                  {job.description}
                </p>
              </div>

              <button
                onClick={() => handleDelete(job._id)}
                className="mt-auto block w-full text-center px-4 py-[12px] border border-red-500 text-red-500 text-[15px] font-bold hover:bg-red-500 hover:text-white transition-colors duration-300 Epilogue rounded-none flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                Remove Job
              </button>
            </div>
          ))}
          
          {jobs.length === 0 && (
             <div className="col-span-full py-20 text-center border border-gray-200 bg-white">
               <p className="text-[#64748b] text-[16px] Epilogue">No jobs posted yet. Click "Add New Job" to get started.</p>
             </div>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default AdminJobs;