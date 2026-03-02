import React from 'react';
import dashboard from "../../assets/dashboard_image.png";

const CTA = () => {
    return (
       <div className='lg:px-32 md:px-16 px-4 py-10 w-full'>
    
         <div className=' CTA_bg relative px-6 md:px-16 py-12 md:py-0 min-h-[440px] flex flex-col md:flex-row items-center justify-between clash overflow-hidden '>
            
            {/* Text Content */}
            <div className='w-full md:w-1/2 lg:w-[40%] flex flex-col gap-4 md:gap-6 z-10 items-center md:items-start text-center md:text-left'>
                <h2 className='text-3xl md:text-[40px] lg:text-[48px] text-white font-bold leading-tight md:leading-[1.1]'>
                    Start posting jobs today
                </h2>
                <p className='text-white/90 text-[15px] md:text-base mb-2 md:mb-0'>
                    Start posting jobs for only $10.
                </p>
                <button className='px-8 py-3 w-max bg-white text-[#4640de] Epilogue font-bold  hover:shadow-lg hover:-translate-y-1 transition-all duration-300'>
                    Sign Up For Free
                </button>
            </div>

           
            <div className='mt-10 md:mt-0 w-full md:w-auto flex justify-center md:absolute md:bottom-0 md:-right-8 lg:right-10 z-0'>
                <img 
                    src={dashboard} 
                    alt="Dashboard Preview" 
                    className='w-full max-w-[320px] md:max-w-[450px] lg:max-w-[550px] object-cover object-top drop-shadow-2xl' 
                />
            </div>
            
        </div>
       </div>
    );
};

export default CTA;