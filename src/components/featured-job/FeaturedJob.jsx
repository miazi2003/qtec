import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import r from "../../assets/r.png"
import step_box from "../../assets/box_step.png"
import pitch from "../../assets/pitch.png"
import product from "../../assets/product.png"
import leaf from "../../assets/leaf.png"
import canva from "../../assets/canva.png"
import goDaddy from "../../assets/godaddy-logo-0 1.png"
import x from "../../assets/x.png"

// Centralized data array for the map system
const jobData = [
  {
    id: 1,
    company: 'Revolut',
    logo: r,
    type: 'Full Time',
    title: 'Email Marketing',
    location: 'Madrid, Spain',
    description: 'Revolut is looking for Email Marketing to help team ma...',
    tags: [
      { name: 'Marketing', styles: 'text-orange-500 bg-orange-50' },
      { name: 'Design', styles: 'text-emerald-500 bg-emerald-50' },
    ],
  },
  {
    id: 2,
    company: 'Dropbox',
    logo: step_box,
    type: 'Full Time',
    title: 'Brand Designer',
    location: 'San Fransisco, US',
    description: 'Dropbox is looking for Brand Designer to help the team t...',
    tags: [
      { name: 'Design', styles: 'text-emerald-500 bg-emerald-50' },
      { name: 'Business', styles: 'text-indigo-500 bg-indigo-50' },
    ],
  },
  {
    id: 3,
    company: 'Pitch',
    logo: pitch,
    type: 'Full Time',
    title: 'Email Marketing',
    location: 'Berlin, Germany',
    description: 'Pitch is looking for Customer Manager to join marketing t...',
    tags: [
      { name: 'Marketing', styles: 'text-orange-500 bg-orange-50' },
    ],
  },
  {
    id: 4,
    company: 'Blinkist',
    logo: leaf,
    type: 'Full Time',
    title: 'Visual Designer',
    location: 'Granada, Spain',
    description: 'Blinkist is looking for Visual Designer to help team desi...',
    tags: [
      { name: 'Design', styles: 'text-emerald-500 bg-emerald-50' },
    ],
  },
  {
    id: 5,
    company: 'ClassPass',
    logo: product,
    type: 'Full Time',
    title: 'Product Designer',
    location: 'Manchester, UK',
    description: 'ClassPass is looking for Product Designer to help us...',
    tags: [
      { name: 'Marketing', styles: 'text-[#FFB836] bg-orange-50' },
      { name: 'Design', styles: 'text-emerald-500 bg-emerald-50' },
    ],
  },
  {
    id: 6,
    company: 'Canva',
    logo: canva,
    type: 'Full Time',
    title: 'Lead Designer',
    location: 'Ontario, Canada',
    description: 'Canva is looking for Lead Engineer to help develop n...',
    tags: [
      { name: 'Design', styles: 'text-emerald-500 bg-emerald-50' },
      { name: 'Business', styles: 'text-indigo-500 bg-indigo-50' },
    ],
  },
  {
    id: 7,
    company: 'GoDaddy',
    logo: goDaddy,
    type: 'Full Time',
    title: 'Brand Strategist',
    location: 'Marseille, France',
    description: 'GoDaddy is looking for Brand Strategist to join the team...',
    tags: [
      { name: 'Marketing', styles: 'text-orange-500 bg-orange-50' },
    ],
  },
  {
    id: 8,
    company: 'Twitter',
    logo: x,
    type: 'Full Time',
    title: 'Data Analyst',
    location: 'San Diego, US',
    description: 'Twitter is looking for Data Analyst to help team desi...',
    tags: [
      { name: 'Technology', styles: 'text-rose-500 bg-rose-50' },
    ],
  },
];

// Reusable card component to prevent duplicate code in mobile and desktop views
const JobCard = ({ job }) => (
  <div className="border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow duration-300 flex flex-col h-full">
    {/* Top Row: Logo & Badge */}
    <div className="flex justify-between items-start mb-5">
      {typeof job.logo === 'string' ? (
        <img src={job.logo} alt={`${job.company} logo`} className="w-10 h-10 object-contain" />
      ) : (
        job.logo
      )}
      <span className="border border-indigo-200 text-[#4640DE] text-[11px] font-semibold px-2 py-1 uppercase tracking-wide Epilogue bg-white">
        {job.type}
      </span>
    </div>

    {/* Title & Company/Location */}
    <div>
      <h3 className="text-[17px] font-bold text-[#1a202c] mb-1 Epilogue">
        {job.title}
      </h3>
      <p className="text-[13px] text-[#64748b] font-medium Epilogue">
        {job.company} <span className="mx-1">•</span> {job.location}
      </p>
    </div>

    {/* Description */}
    <p className="text-[14px] text-[#94a3b8] mt-4 leading-relaxed line-clamp-2 Epilogue">
      {job.description}
    </p>

    {/* Tags (Bottom aligned using mt-auto) */}
    <div className="flex flex-wrap gap-2 mt-auto pt-6">
      {job.tags.map((tag, index) => (
        <span 
          key={index} 
          className={`px-3 py-1 rounded-full text-[12px] font-bold tracking-wide Epilogue ${tag.styles}`}
        >
          {tag.name}
        </span>
      ))}
    </div>
  </div>
);

export default function FeaturedJob() {
  return (
    <section className="w-full mx-auto lg:px-31 md:px-16 px-4 py-16 clash bg-white overflow-hidden">
      
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-10">
        <h2 className="text-[28px] md:text-[48px] font-bold text-[#1a202c] leading-tight tracking-tight">
          Featured <span className="text-[#0ea5e9]">jobs</span>
        </h2>
        
        {/* Desktop Button (Hidden on Mobile) */}
        <button className="hidden md:flex items-center gap-2 text-[15px] font-medium text-[#4640DE] hover:underline transition-all Epilogue">
          Show all jobs
          <svg className="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>

      {/* Desktop Grid Section (Hidden on Mobile) */}
      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {jobData.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {/* Mobile Slider Section (Hidden on Desktop) */}
      <div className="block md:hidden">
        <Swiper
          slidesPerView={1.1} // Shows 1 full card and 10% of the next card
          spaceBetween={16}   // Gap between cards
          className="w-full pb-4"
        >
          {jobData.map((job) => (
            // The h-auto class on SwiperSlide ensures all cards stretch to the same height
            <SwiperSlide key={job.id} className="h-auto">
              <JobCard job={job} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Mobile Button (Hidden on Desktop, displayed below slider) */}
      <button className="flex md:hidden items-center justify-left gap-2 text-[15px] font-medium text-[#4640DE] transition-all mt-6 Epilogue w-full">
        Show all jobs
        <svg className="w-4 h-4 mt-[2px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </button>

    </section>
  );
}