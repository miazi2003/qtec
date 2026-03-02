import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300 flex flex-col h-full rounded-none">
      

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
        
        {/* Description */}
        <p className="text-[14px] text-[#94a3b8] mt-2 mb-8 leading-relaxed line-clamp-3 Epilogue">
          {job.description}
        </p>
      </div>


      <Link
        to={`/jobs/${job.job_id}`}
        className="mt-auto block w-full text-center px-4 py-[14px] bg-[#4640DE] text-white text-[15px] font-bold hover:bg-[#3934b3] transition-colors duration-300 Epilogue rounded-none"
      >
        View Details
      </Link>
      
    </div>
  );
};

export default JobCard;