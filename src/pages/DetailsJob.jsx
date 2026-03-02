import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axios";

const DetailJob = () => {
  const { job_id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverNote: ""
  });

  const [formErrors, setFormErrors] = useState({});

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`/jobs/${job_id}`);
        setJob(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load job.");
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [job_id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    if (formErrors[e.target.name]) {
      setFormErrors({
        ...formErrors,
        [e.target.name]: ""
      });
    }
  };

  const validateForm = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const urlRegex = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

    if (!emailRegex.test(formData.email)) {
      errors.email = "Please enter a valid email address.";
    }

    if (!urlRegex.test(formData.resume)) {
      errors.resume = "Please enter a valid URL starting with http:// or https://";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    try {
      await axios.post("/applications", {
        job: job._id,
        name: formData.name,
        email: formData.email,
        resume_link: formData.resume,
        cover_note: formData.coverNote
      });
      alert("Application submitted successfully!");
      setFormData({ name: "", email: "", resume: "", coverNote: "" });
      setFormErrors({});
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  if (loading) return (
    <div className="min-h-screen bg-[#fcfdff] py-20 flex justify-center items-start">
      <p className="text-[18px] text-[#4640DE] font-semibold Epilogue animate-pulse">Loading job details...</p>
    </div>
  );

  if (error) return (
    <div className="min-h-screen bg-[#fcfdff] py-20 flex justify-center items-start">
      <p className="text-[16px] text-red-500 font-medium Epilogue bg-red-50 px-6 py-3 border border-red-100">{error}</p>
    </div>
  );

  if (!job) return (
    <div className="min-h-screen bg-[#fcfdff] py-20 flex justify-center items-start">
      <p className="text-[18px] text-[#1a202c] font-bold clash">Job not found</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#fcfdff] py-12 md:py-20 font-sans">
      <div className="max-w-[1440px] mx-auto lg:px-32 md:px-16 px-4 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        <div className="lg:col-span-8">
          <Link to="/joblistings" className="inline-flex items-center text-[#64748b] hover:text-[#4640DE] text-[15px] font-medium Epilogue mb-8 transition-colors">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Jobs
          </Link>

          <div className="bg-white border border-gray-100 p-8 md:p-10 mb-8">
            <h1 className="text-[32px] md:text-[40px] font-bold text-[#1a202c] leading-tight tracking-tight clash mb-4">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-[#64748b] text-[15px] Epilogue mb-10 pb-8 border-b border-gray-100">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#4640DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className="font-semibold text-[#1a202c] mr-1">Company:</span> {job.company}
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-[#4640DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span className="font-semibold text-[#1a202c] mr-1">Location:</span> {job.location}
              </span>
            </div>

            <h2 className="text-[22px] font-bold text-[#1a202c] mb-4 clash">Description</h2>
            <div className="text-[#64748b] text-[16px] leading-relaxed Epilogue whitespace-pre-wrap">
              {job.description}
            </div>
          </div>
        </div>

        <div className="lg:col-span-4">
          <div className="bg-white border border-gray-100 p-8 sticky top-8">
            <h2 className="text-[22px] font-bold text-[#1a202c] mb-6 clash">Apply Now</h2>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5 Epilogue">
              
              <div>
                <label className="block text-[14px] font-semibold text-[#1a202c] mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#fcfdff] border border-gray-200 text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none placeholder-gray-400"
                />
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#1a202c] mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#fcfdff] border ${formErrors.email ? 'border-red-500' : 'border-gray-200'} text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none placeholder-gray-400`}
                />
                {formErrors.email && <p className="text-red-500 text-[12px] mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#1a202c] mb-2">Resume URL</label>
                <input
                  type="url"
                  name="resume"
                  placeholder="https://portfolio.com/resume"
                  required
                  value={formData.resume}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-[#fcfdff] border ${formErrors.resume ? 'border-red-500' : 'border-gray-200'} text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none placeholder-gray-400`}
                />
                {formErrors.resume && <p className="text-red-500 text-[12px] mt-1">{formErrors.resume}</p>}
              </div>

              <div>
                <label className="block text-[14px] font-semibold text-[#1a202c] mb-2">Cover Note</label>
                <textarea
                  name="coverNote"
                  placeholder="Why are you a good fit?"
                  rows="4"
                  required
                  value={formData.coverNote}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#fcfdff] border border-gray-200 text-[15px] text-[#1a202c] focus:outline-none focus:border-[#4640DE] transition-colors rounded-none placeholder-gray-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#4640DE] text-white text-[15px] font-bold py-[14px] hover:bg-[#3934b3] transition-colors mt-2 rounded-none"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailJob;