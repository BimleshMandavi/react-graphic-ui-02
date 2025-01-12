"use client";

import { motion } from 'framer-motion';


export default function BenefitSection() {
  return (
  
    <div className="bg-[#1600ea] text-white sm:py-12 sm:px-8 pt-9">

      {/* Benefit Section */}
      <div className="text-center mb-10">
        <h2 className="text-xl md:text-6xl ">How we will benefit you.</h2>
      </div>

      {/* Grid Section */}
      <div className=" md:grid-cols-2 p-6 lg:grid-cols-3 gap-8 md:p-20">
        {/* Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black  p-4 sm:p-0 rounded-lg shadow-lg sm:flex  sm::mx-28"
        >
         
          <div className='sm:w-[70%] sm:p-20 '>
          <h3 className="text-4xl font-bold mb-2 sm:mt-4 sm:mb-10">Hire Us or On-board Top 1% Creative Talent ✨</h3>
          <p className="text-xl mb-4">
            Collaborate with our expert team for tailored, high-quality
designs aligned with your brand’s goals, or onboard top
creative talent for fresh perspectives. Our flexible approach
ensures impactful, client-focused solutions that resonate
with your audience.
          </p>
           <a href="#" className="text-[#1600ea] font-medium">Hire Designers →</a>
           </div>
           <div className="text-center pt-10 ">
            <img className=''
                src="/pic-15.png"
                alt="Arjun Mehta"

              />

            </div>

        </motion.div>

        {/* Card 2 */}
        <div className='flex justify-evenly mt-12 sm:mt-0 w-full gap-5 md:gap-10 p-4 sm:p-0 '>
        <div className='sm:flex sm:justify-evenly  sm:mt-12 sm:w-full sm:gap-5 md:gap-10'>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black   rounded-lg shadow-lg"
        >
          
          <div className='p-6 mt-6'>
          <h3 className="text-4xl font-bold mb-2">Creatives that Drives Revenue 💰</h3>
          <p className="text-xl mb-4">
            Strategically crafted concepts that captivate engagement and boost conversions to maximize profitability.
          </p>
          <a href="#" className="text-[#1600ea] font-medium"> Know More →</a>
          </div>
          <div className="text-center ">
           
            <img className='px-8 pt-[19.8px]'
                src="/pic-03.png"
                alt="Arjun Mehta"


              />

            </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white text-black rounded-lg shadow-lg"
        >
          <div className='p-6'>
          <h3 className="text-4xl font-bold mb-2">Top-notch quality, consistently delivered with excellence 🤩</h3>
          <p className="text-xl mb-4">
            Scale your content with precisely crafted visuals that ensure consistency
and lasting impact, seamlessly aligning with your brand to create engaging,
resonant results.
          </p>
          <a href="#" className="text-[#1600ea] font-medium">Know More →</a>
          </div>
          <div className="text-center sm:pt-[78px]">
      
            <img className='sm:h-full  sm:pl-[24px] rounded-lg'
                src="/pic-17.png"
                alt="Arjun Mehta"


              />

            </div>
        </motion.div>
        </div>
      </div>
    </div>
    </div>
  );
}
