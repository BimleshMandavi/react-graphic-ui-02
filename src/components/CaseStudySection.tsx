
import { motion } from "framer-motion";

const CaseStudySection = () => {
  return (
    <section className="bg-[#070324] py-8 sm:py-16 px-4  lg:px-8 text-white mt-20">
      <div className="max-w-8xl mt-8 sm:ml-20">
        <img className="sm:ml-96  flex justify-center  w-[500px]" src="/pic-12.png" />
      {/* Logos Section */}
<div className="flex flex-wrap justify-center mt-10 items-center sm:gap-36 gap-10 mb-8 sm:mb-12 cursor-pointer sm:mr-8">
  <a href="/">
    <img
      src="/assets/park+.png"
      alt="Park+"
      className="w-24 sm:w-28 sm:pr-2 grayscale hover:grayscale-0 transition-all duration-300"
    />
  </a>
  <a href="/">
    <img
      src="/assets/piramal-new.svg"
      alt="Piramal"
      className="w-24 sm:w-28 grayscale hover:grayscale-0 transition-all duration-300"
    />
  </a>
  <a href="/">
    <img
      src="/assets/adani_logo.png"
      alt="Adani"
      className="w-24 sm:w-28 grayscale hover:grayscale-0 transition-all duration-300"
    />
  </a>
  <a href="/">
    <img
      src="/assets/Screenshot 2025-01-04 145058.png"
      alt="RVshare"
      className="w-24 sm:w-28 grayscale hover:grayscale-0 transition-all duration-300"
    />
  </a>
  <a href="/">
    <img
      src="/assets/apollo247.svg"
      alt="Apollo 247"
      className="w-24 sm:w-28 grayscale hover:grayscale-0 transition-all duration-300"
    />
  </a>
</div>


        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="space-y-8 text-center md:text-left"
          >
            
            <div className="flex gap-2 items-center">
            <img className="h-8 w-8" src="/pic-29.png" />
            <span>FEATURED CASE STUDY</span>
          </div>
            <h3 className="text-xl sm:text-3xl lg:text-5xl  space-x-10 tracking-widest leading-8 mb-8">
              "Reimagining a Legacy: Redefining Top's India Brand Identity and Strategy for the Modern Consumer"
            </h3>
            <hr />
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-12 justify-center md:justify-start">
              <div>
                <p className="text-3xl sm:text-5xl text-green-400">250%</p>
                <p className="text-xs mt-4 sm:text-lg text-[#c3ccd3] font-Inter">Increase in Click Rate</p>
              </div>
              <div>
                <p className="text-3xl sm:text-5xl text-green-400">192k+</p>
                <p className="text-xs sm:text-lg mt-4 text-[#c3ccd3] font-Inter">Leads Generated with Creatives</p>
              </div>
            </div>
            <a
              href="/case-studies/tops"
              className="inline-flex items-center text-yellow-400 font-semibold mt-4 hover:underline"
            >
              Read Case Study <span className="ml-2">&rarr;</span>
            </a>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center "
          >
            <img
              src="/pic-10.png"
              alt="Tops Case Study"
              className="rounded-lg shadow-lg w-[400px] sm:w-[490px] md:w-[530px] h-auto sm:mr-4"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;
