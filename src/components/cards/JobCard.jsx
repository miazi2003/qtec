import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1 p-6 rounded-xl border border-gray-200 flex flex-col justify-between">
      
      <div>
        <h2 className="text-xl font-semibold mb-1">{job.title}</h2>
        <p className="text-gray-600 font-medium">{job.company}</p>
        <p className="text-sm text-gray-500 mb-2">
          {job.location} • {job.category}
        </p>
        <p className="text-gray-700 mb-4 line-clamp-3">{job.description}</p>
      </div>

      <Link
        to={`/jobs/${job.job_id}`}
        className="mt-auto inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;