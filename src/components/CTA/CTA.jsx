import React from 'react';
import dashboard from "../../assets/dashboard_image.png"
const CTA = () => {
    return (
       <div className='px-31 '>
         <div className='CTA_bg h-110 relative px-17 flex items-center justify-between clash'>
            <div className='w-1/3 flex flex-col gap-6'>
                <h2 className='text-[48px] text-white '>
                    Start posting jobs today
                </h2>
                <p className='text-white'>
                    Start posting jobs for only $10.
                </p>
                <button className='px-6 py-3 w-max bg-white text-[#4640de] Epilogue font-bold'>
                    Sign Up For Free
                </button>
            </div>
            <div className='absolute bottom-0 right-18 '>
                <img src={dashboard} alt="" />
            </div>
        </div>
       </div>
    );
};

export default CTA;