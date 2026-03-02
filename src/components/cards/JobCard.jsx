import { Link } from "react-router-dom";

const JobCard = ({ job }) => {
  return (
    <div className="bg-white border border-gray-200 border-t-4 border-t-transparent p-6 hover:shadow-xl hover:border-t-[#4640DE] hover:-translate-y-1 transition-all duration-300 flex flex-col h-full rounded-none group">
      
      <div className="flex-grow">
        <h2 className="text-[19px] font-bold text-[#1a202c] mb-4 Epilogue tracking-tight group-hover:text-[#4640DE] transition-colors">
          {job.title}
        </h2>
        
        <div className="flex flex-col gap-2.5 mb-5">
          <div className="flex items-center text-[14px] text-[#64748b] Epilogue font-medium">
            <svg className="w-4 h-4 mr-2.5 text-[#4640DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
            <span className="text-[#1a202c] font-semibold">{job.company}</span>
          </div>
          
          <div className="flex items-center text-[14px] text-[#64748b] Epilogue font-medium">
            <svg className="w-4 h-4 mr-2.5 text-[#4640DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {job.location}
          </div>

          {job.category && (
            <div className="flex items-center text-[14px] text-[#64748b] Epilogue font-medium">
              <svg className="w-4 h-4 mr-2.5 text-[#4640DE]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {job.category}
            </div>
          )}
        </div>
        
        <p className="text-[14px] text-[#94a3b8] mt-4 mb-8 leading-relaxed line-clamp-3 Epilogue border-t border-gray-100 pt-4">
          {job.description}
        </p>
      </div>

      <Link
        to={`/jobs/${job.job_id}`}
        className="mt-auto flex items-center justify-center w-full px-4 py-[14px] bg-[#fcfdff] border border-[#4640DE] text-[#4640DE] text-[15px] font-bold hover:bg-[#4640DE] hover:text-white transition-all duration-300 Epilogue rounded-none group-hover:bg-[#4640DE] group-hover:text-white"
      >
        View Details
        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </Link>
      
    </div>
  );
};

export default JobCard;