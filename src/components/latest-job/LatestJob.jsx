import React from 'react';

import social from "../../assets/social.png"
import Brand from "../../assets/brand_d.jpg"
import intarective from "../../assets/interective.png"
import hr from "../../assets/hr.png"

// Data array for the map system
const latestJobsData = [
  {
    id: 1,
    title: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Paris, France',
    logo: (
      <div className="w-12 h-12 flex items-center justify-center bg-emerald-50 rounded-lg">
        {/* Placeholder for Nomad logo */}
        <svg className="w-8 h-8 text-emerald-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 8v8l-4-4-4 4V8l4 4 4-4z" />
        </svg>
      </div>
    ),
    tags: [
      { name: 'Full-Time', styles: 'text-emerald-500 border-emerald-200' },
      { name: 'Marketing', styles: 'text-orange-400 border-orange-200' },
      { name: 'Design', styles: 'text-indigo-500 border-indigo-200' },
    ],
  },
  {
    id: 2,
    title: 'Social Media Assistant',
    company: 'Netlify',
    location: 'Paris, France',
    logo:social,
    tags: [
      { name: 'Full-Time', styles: 'text-emerald-500 border-emerald-200' },
      { name: 'Marketing', styles: 'text-orange-400 border-orange-200' },
      { name: 'Design', styles: 'text-indigo-500 border-indigo-200' },
    ],
  },
  {
    id: 3,
    title: 'Brand Designer',
    company: 'Dropbox',
    location: 'San Fransisco, USA',
    logo: (
      <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-lg">
        <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L5 6.5 12 11l7-4.5L12 2zm-7 9l7 4.5 7-4.5-7-4.5-7 4.5zm7 5.5l-7-4.5v3.5l7 4.5 7-4.5v-3.5l-7 4.5z" />
        </svg>
      </div>
    ),
    tags: [
      { name: 'Full-Time', styles: 'text-emerald-500 border-emerald-200' },
      { name: 'Marketing', styles: 'text-orange-400 border-orange-200' },
      { name: 'Design', styles: 'text-indigo-500 border-indigo-200' },
    ],
  },
  {
    id: 4,
    title: 'Brand Designer',
    company: 'Maze',
    location: 'San Fransisco, USA',
    logo:Brand,
    tags: [
      { name: 'Full-Time', styles: 'text-emerald-500 border-emerald-200' },
      { name: 'Marketing', styles: 'text-orange-400 border-orange-200' },
      { name: 'Design', styles: 'text-indigo-500 border-indigo-200' },
    ],
  },
  {
    id: 5,
    title: 'Interactive Developer',
    company: 'Terraform',
    location: 'Hamburg, Germany',
    logo: (
      <div className="w-12 h-12 flex items-center justify-center">
        <svg className="w-10 h-10 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 6h4v4H5V6zm5 0h4v4h-4V6zm5 0h4v4h-4V6zM5 11h4v4H5v-4zm5 0h4v4h-4v-4z" />
        </svg>
      </div>
    ),
    tags: [
      { name: 'Full-Time', styles: 'text-emerald-500 border-emerald-200' },
      { name: 'Marketing', styles: 'text-orange-400 border-orange-200' },
      { name: 'Design', styles: 'text-indigo-500 border-indigo-200' },
    ],
  },
  {
    id: 6,
    title: 'Interactive Developer',
    company: 'Udacity',
    location: 'Hamburg, Germany',
    logo: intarective,
    tags: [
      { name: 'Full-Time', styles: 'text-emerald-500 border-emerald-200' },
      { name: 'Marketing', styles: 'text-orange-400 border-orange-200' },
      { name: 'Design', styles: 'text-indigo-500 border-indigo-200' },
    ],
  },
  {
    id: 7,
    title: 'HR Manager',
    company: 'Packer',
    location: 'Lucern, Switzerland',
    logo: (
      <div className="w-12 h-12 flex items-center justify-center">
        <svg className="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 4h8a6 6 0 010 12h-4v4H5V4zm4 4v4h4a2 2 0 000-4H9z" />
        </svg>
      </div>
    ),
    tags: [
      { name: 'Full-Time', styles: 'text-emerald-500 border-emerald-200' },
      { name: 'Marketing', styles: 'text-orange-400 border-orange-200' },
      { name: 'Design', styles: 'text-indigo-500 border-indigo-200' },
    ],
  },
  {
    id: 8,
    title: 'HR Manager',
    company: 'Webflow',
    location: 'Lucern, Switzerland',
    logo: hr,
    tags: [
      { name: 'Full-Time', styles: 'text-emerald-500 border-emerald-200' },
      { name: 'Marketing', styles: 'text-orange-400 border-orange-200' },
      { name: 'Design', styles: 'text-indigo-500 border-indigo-200' },
    ],
  },
];

export default function LatestJob() {
  return (
    <section className="w-full  mx-auto px-31 py-16 clash latest_bg">
      
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10">
        <h2 className="text-[40px] text-[#1a202c] leading-tight tracking-tight">
          <span className="font-bold">Latest </span>
          <span className="font-bold text-[#3b82f6]">jobs open</span>
        </h2>
        
        <button className="flex items-center gap-2 text-[15px] Epilogue font-medium text-[#4f46e5] hover:underline transition-all mt-4 sm:mt-0">
          Show all jobs
          <svg className="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Jobs Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {latestJobsData.map((job) => (
          <div 
            key={job.id} 
            className="flex items-start gap-5 p-6 bg-white  hover:shadow-md transition-shadow duration-300"
          >
            {/* Logo Left */}
            <div className="flex-shrink-0 h-10 w-10">
              <img src={job.logo} alt="" />
            </div>

            {/* Content Right */}
            <div className="flex flex-col flex-grow">
              <h3 className="text-[18px] font-bold text-[#1a202c] mb-[2px] Epilogue">
                {job.title}
              </h3>
              <p className="text-[14px] text-[#64748b] font-medium mb-4">
                {job.company} <span className="mx-1">•</span> {job.location}
              </p>

              {/* Tags Outline Style */}
              <div className="flex flex-wrap gap-2 Epilogue">
                {job.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-[2px] rounded-full border text-[11px] font-bold tracking-wide ${tag.styles}`}
                  >
                    {tag.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}