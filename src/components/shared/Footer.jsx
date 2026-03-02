import React from 'react';
import logo from "../../assets/Frame 3.png"

export default function Footer() {
  return (
    <footer className="w-full bg-[#202430] font-sans text-white border-t border-gray-800">
      {/* Main Container */}
      {/* Note: Changed lg:px-31 to lg:px-32 as 31 is not a default Tailwind class */}
      <div className="max-w-[1440px] mx-auto lg:px-32 md:px-16 px-4 pt-16 md:pt-20 pb-8">
        
        {/* Top Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          
          {/* Brand & Description Column */}
          {/* On tablet (md), this spans full width. On desktop (lg), it takes 4/12 columns. */}
          <div className="md:col-span-2 lg:col-span-4 pr-0 lg:pr-8">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 flex items-center justify-center rounded-full">
                <img src={logo} alt="QuickHire Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-[22px] font-bold tracking-tight">QuickHire</span>
            </div>
            
            <p className="text-[#9ca3af] text-[15px] leading-relaxed max-w-sm md:max-w-xl lg:max-w-full">
              Great platform for the job seeker that passionate about startups. Find your dream job easier.
            </p>
          </div>

          {/* About & Resources Links Container */}
          {/* Placed together in a flex container so they sit side-by-side on mobile, spanning 4/12 on desktop */}
          <div className="md:col-span-1 lg:col-span-4 flex justify-between pr-0 lg:pr-10">
            {/* About Links */}
            <div>
              <h4 className="text-[17px] font-bold mb-5 md:mb-6">About</h4>
              <ul className="space-y-3 md:space-y-4">
                {['Companies', 'Pricing', 'Terms', 'Advice', 'Privacy Policy'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#9ca3af] hover:text-white transition-colors text-[15px]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div>
              <h4 className="text-[17px] font-bold mb-5 md:mb-6">Resources</h4>
              <ul className="space-y-3 md:space-y-4">
                {['Help Docs', 'Guide', 'Updates', 'Contact Us'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[#9ca3af] hover:text-white transition-colors text-[15px]">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="md:col-span-1 lg:col-span-4">
            <h4 className="text-[17px] font-bold mb-4">Get job notifications</h4>
            <p className="text-[#9ca3af] text-[15px] mb-6 leading-relaxed">
              The latest job news, articles, sent to your inbox weekly.
            </p>
            
            {/* Form layout: Flush input and button */}
            <form className="flex w-full" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-4 py-[14px] text-sm text-gray-900 bg-white focus:outline-none placeholder-gray-400 min-w-0"
                required
              />
              <button 
                type="submit" 
                className="px-5 md:px-6 py-[14px] bg-[#4f46e5] text-white text-[15px] font-bold hover:bg-indigo-600 transition-colors whitespace-nowrap flex-shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Divider Line */}
        <div className="w-full border-t border-[#2e3240] mb-8"></div>

        {/* Bottom Section: Copyright & Socials */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
          
          <p className="text-[#7d8597] text-[14px] text-center md:text-left">
            2021 © QuickHire. All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a href="#facebook" className="w-[34px] h-[34px] flex items-center justify-center bg-[#2a2e3b] rounded-full hover:bg-[#4f46e5] transition-colors group">
              <svg className="w-[14px] h-[14px] text-[#9ca3af] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
              </svg>
            </a>
            
            {/* Instagram */}
            <a href="#instagram" className="w-[34px] h-[34px] flex items-center justify-center bg-[#2a2e3b] rounded-full hover:bg-[#4f46e5] transition-colors group">
              <svg className="w-[14px] h-[14px] text-[#9ca3af] group-hover:text-white transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                 <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                 <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"></path>
                 <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>

            {/* Dribbble */}
            <a href="#dribbble" className="w-[34px] h-[34px] flex items-center justify-center bg-[#2a2e3b] rounded-full hover:bg-[#4f46e5] transition-colors group">
               <svg className="w-[14px] h-[14px] text-[#9ca3af] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm8.46 10c-.06-.8-.21-1.57-.45-2.3l-3.3 1.3c.31.96.48 1.98.48 3.03 0 .44-.04.88-.09 1.31l3.29-1.29c.04-.34.07-.69.07-1.05zM12 20.5c-1.6 0-3.1-.45-4.38-1.21l3.32-1.31c1.23.47 2.58.72 4 .72.63 0 1.25-.06 1.84-.17l-3.3 1.3c-.45.45-1 .85-1.48 1.17v.5z" clipRule="evenodd"/>
              </svg>
            </a>

            {/* LinkedIn */}
            <a href="#linkedin" className="w-[34px] h-[34px] flex items-center justify-center bg-[#2a2e3b] rounded-full hover:bg-[#4f46e5] transition-colors group">
              <svg className="w-[14px] h-[14px] text-[#9ca3af] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="#twitter" className="w-[34px] h-[34px] flex items-center justify-center bg-[#2a2e3b] rounded-full hover:bg-[#4f46e5] transition-colors group">
              <svg className="w-[14px] h-[14px] text-[#9ca3af] group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}