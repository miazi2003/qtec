import React from 'react';
import design from "../../assets/design.png";
import sales from "../../assets/sales.png";
import marketing from "../../assets/marketing.png";
import finance from "../../assets/finance.png";
import technology from "../../assets/technology.png";
import engineering from "../../assets/engineer.png";
import business from "../../assets/business.png";
import human from "../../assets/Human-Resource.png";
// Data array for the map function
const categoryData = [
  {
    id: 1,
    title: 'Design',
    count: '235',
    active: false,
    icon: design,
  },
  {
    id: 2,
    title: 'Sales',
    count: '756',
    active: false,
    icon: sales
  },
  {
    id: 3,
    title: 'Marketing',
    count: '140',
    active: true,
    icon: marketing,
  },
  {
    id: 4,
    title: 'Finance',
    count: '325',
    active: false,
    icon:finance,
  },
  {
    id: 5,
    title: 'Technology',
    count: '436',
    active: false,
    icon: technology,
  },
  {
    id: 6,
    title: 'Engineering',
    count: '542',
    active: false,
    icon:engineering,
  },
  {
    id: 7,
    title: 'Business',
    count: '211',
    active: false,
    icon: business,
  },
  {
    id: 8,
    title: 'Human Resource',
    count: '346',
    active: false,
    icon: human,
  },
];

export default function Category() {
  return (
    <section className="w-full mx-auto lg:px-31 md:px-16 px-4 py-16 clash bg-white">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
        <h2 className="md:text-[48px] text-[26px] font-bold text-[#1a202c] leading-tight tracking-tight clash">
          Explore by <span className="text-[#0ea5e9]">category</span>
        </h2>
        
        <button className="flex items-center gap-2 text-[15px] font-medium text-[#4f46e5] hover:underline transition-all mt-4 sm:mt-0 Epilogue">
          Show all jobs
          <svg className="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Grid Section using Map */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {categoryData.map((category) => (
          <div
            key={category.id}
            className={`
              group relative flex md:flex-col justify-between md:p-8 p-4 items-center md:items-start md:h-[214px] border transition-all duration-300 cursor-pointer
              ${category.active 
                ? 'bg-[#4f46e5] border-[#4f46e5] text-white shadow-lg z-10' 
                : 'bg-white border-[#e2e8f0] text-[#1a202c] hover:border-[#4f46e5] hover:shadow-md'
              }
              /* Handle overlapping borders precisely */
              -ml-[1px] -mt-[1px]
            `}
          >
            {/* Icon */}
            <div className={`${category.active ? 'text-white' : 'text-[#4f46e5]'}`}>
              {typeof category.icon === 'string' ? (
                <img className='md:w-10 md:h-10 w-8 h-8' src={category.icon} alt={category.title} />
              ) : (
                category.icon
              )}
            </div>

            {/* Content Bottom */}
            <div className="md:mt-8">
              <h3 className="md:text-[24px] text-[18px] font-bold mb-3 tracking-tight">
                {category.title}
              </h3>
              
              <div className={`flex items-center justify-between Epilogue text-[15px] ${category.active ? 'text-indigo-200' : 'text-[#64748b]'}`}>
                <span>{category.count} jobs available</span>
                <svg 
                  className={`w-5 h-5 transition-transform duration-300 ${!category.active && 'group-hover:translate-x-1 group-hover:text-[#4f46e5]'}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}