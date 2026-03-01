import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "../api/axios";

const DetailJob = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: "",
    coverNote: ""
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await axios.get(`/jobs/${id}`);
        setJob(res.data);
      } catch (err) {
        setError("Failed to load job." , err);
      } finally {
        setLoading(false);
      }
    };

    fetchJob();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    } catch (err) {
      console.error(err);
      alert("Something went wrong!");
    }
  };

  if (loading) return <p className="text-center mt-10">Loading job details...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;
  if (!job) return <p className="text-center mt-10">Job not found</p>;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8">
        {/* Job Info */}
        <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
        <p className="text-gray-600 mb-4">
          {job.company} • {job.location}
        </p>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">Job Description</h2>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        {/* Apply Form */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Apply Now</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <input
              type="url"
              name="resume"
              placeholder="Resume Link (URL)"
              required
              value={formData.resume}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <textarea
              name="coverNote"
              placeholder="Cover Note"
              rows="4"
              required
              value={formData.coverNote}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailJob;