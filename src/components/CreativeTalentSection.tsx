
"use client";
import { motion } from "framer-motion";

const CreativeTalentSection = () => {
  return (
    <section className="py-12 bg-gray-50 md:pl-1 overflow-x-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center md:ml-20">
        {/* Left Section */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left px-4 sm:px-7  sm:py-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex text-xl mb-4 justify-center sm:justify-start">
            <div className="text-[#1600ea] cursor-pointer border-b-4 border-blue-600">
              <p className="px-2">For Candidates</p>
            </div>
            <div className="text-gray-400 cursor-pointer border-b-2 border-grey-500 pb-4">
              <p className="px-2">For Enterprises</p>
            </div>
          </div>
          <div className="sm:py-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl w-[90%] sm:w-[80%] mb-6 text-black leading-tight">
            Scale your Teams Faster by Hiring the{" "}
            <span className="text-[#1600ea]">Top 1%</span> Skilled Creative
            Talent.
          </h1>
          <p className="text-gray-700 mb-6 w-[90%] sm:w-[78%] pt-6">
            Join an exclusive talent pool and connect with leading brands
            searching for top creative professionals. Showcase your expertise,
            land your dream role, and redefine your career with endless
            opportunities.
          </p>
          <ul className="list-disc pl-8 text-gray-700 mb-6">
            <li>Get Placed with Top Brands Like Google and Amazon.</li>
            <li>Showcase Your Creative Talent to the World.</li>
            <li>Get Hired for Projects That Elevate Your Career.</li>
          </ul>
          <button className="px-6 py-3 bg-[#1600ea] text-white font-semibold rounded-md hover:bg-blue-700">
            Become Talent
          </button>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0 px-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative md:h-[590px] h-[400px] md:w-[565px] w-full pt-10 rounded-lg p-6 sm:mb-3 ">
            <img className="w-full mt-9 h-full object-cover sm:ml-[12px] sm:mr-8" src="/pic-09.png" alt="Arjun Mehta" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CreativeTalentSection;
