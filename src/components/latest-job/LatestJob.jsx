import React from 'react';

import social from "../../assets/social.png"
import Brand from "../../assets/brand_d.jpg"
import intarective from "../../assets/interective.png"
import hr from "../../assets/hr.png"
import nomad from "../../assets/Nomad.png"
import box_step from "../../assets/box_step.png"
import transform from "../../assets/Terraform Enterprise.png"
import packer from "../../assets/Packer.png"


const latestJobsData = [
  {
    id: 1,
    title: 'Social Media Assistant',
    company: 'Nomad',
    location: 'Paris, France',
    logo: nomad,
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
    logo: social,
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
    logo: box_step ,
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
    logo: Brand,
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
    logo: transform,
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
    logo: packer,
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

    <section className="w-full max-w-[1440px] mx-auto lg:px-32 md:px-16 px-4 py-10 md:py-16 clash latest_bg">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10 gap-4">
        <h2 className="text-[32px] md:text-[48px] text-[#1a202c] leading-tight tracking-tight">
          <span className="font-bold">Latest </span> <span className="font-bold text-[#3b82f6]">jobs open</span>
        </h2>
        
    <a href="/">
        <button className="flex items-center gap-2 text-[15px] Epilogue font-medium text-[#4f46e5] hover:underline transition-all mt-2 md:mt-0">
          Show all jobs
          <svg className="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button></a>
      </div>

      {/* Jobs Grid Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        {latestJobsData.map((job) => (
          <div 
            key={job.id} 

            className="flex md:flex-row flex-col items-start gap-4 md:gap-5 p-5 md:p-6 bg-white border border-transparent hover:border-gray-100 hover:shadow-md transition-all duration-300"
          >
            {/* Logo Left */}

            <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
              <img src={job.logo} alt={`${job.company} logo`} className="w-full h-full object-contain" />
            </div>

            {/* Content Right */}
            <div className="flex flex-col flex-grow min-w-0">
              <h3 className="text-[17px] md:text-[18px] font-semibold text-[#1a202c] mb-[2px] Epilogue truncate">
                {job.title}
              </h3>
              <p className="text-[13px] md:text-[14px] text-[#64748b] font-medium mb-3 md:mb-4">
                {job.company} <span className="mx-1">•</span> {job.location}
              </p>

              {/* Tags Outline Style */}
              <div className="flex flex-wrap gap-2 Epilogue">
                {job.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={`px-3 py-[2px] rounded-full border text-[11px] font-bold tracking-wide ${tag.styles} whitespace-nowrap`}
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