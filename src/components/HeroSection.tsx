import { motion } from 'framer-motion';
import { SiAdobe } from "react-icons/si";

 function HeroSection() {
  return (

    <>
    {/* <motion.section
      id="hero"
      
      className="bg-[#070324] text-white "
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      
      <div className="container   sm:px-10 flex flex-col md:flex-row sm:justify-center items-center text-center">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-4xl font-sans md:text-7xl  mb-6 space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           <p>Driving Sales</p> <p> and Capturing</p> Attention Through <div className="text-yellow-400">Graphic Designs</div>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6 sm:ml-8 text-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

           <li> On-board the Top 1% Design Talent.</li> <li> Communicate your brand’s story.</li> <li>Impactful Marketing Collateral.</li>
          </motion.p>
          <motion.button
            className="bg-[#1600ea] hover:bg-blue-500 text-white font-bold py-2 px-6 rounded"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Book a Demo
          </motion.button>
        </div>
        <motion.div
          className=" mt-8 sm:w-1/2 md:mt-0 flex justify-center "
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className=''>
          <img className=' sm:mr-0' src="/pic-19.jpeg" alt="Hero Image" />
          
           <div className='flex items-center gap-2  text-lg sm:ml-[600px] '>
            <SiAdobe /><span className='font-sans'>Adobe</span>
           </div>
           </div>
        </motion.div>

      </div>
    </motion.section> */}


    <motion.section className="bg-[#070324] py-10 px-5 sm:py-16 sm:px-24 pt-5 ">

      <div className="sm:flex  sm:justify-around sm:items-center text-white">

        <div>

            <motion.h1
            className="text-4xl font-raleway sm:text-5xl lg:text-7xl h-full  mb-6 space-y-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
           <p className='mb-3'>Driving Sales</p> <p className='mb-3'> and Capturing</p><p className='mb-3'> Attention Through </p><div className="text-yellow-400">Graphic Designs</div>
          </motion.h1>
           <motion.p
            className="text-lg md:text-xl mb-6 sm:ml-4 sm:text-start py-3 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >

           <li className='mb-4'> On-board the Top 1% Design Talent.</li> 
           <li className='mb-4'> Communicate your brand’s story.</li>
            <li>Impactful Marketing Collateral.</li>
          </motion.p>
           <motion.button
            className="bg-[#1600ea] hover:bg-blue-500 text-white font-bold py-3 px-6 rounded"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Book a Demo
          </motion.button>
        </div>
        <motion.section initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}>
          <img src="/pic-19.jpeg" alt="Hero Image" className='w-[640px] h-[600px]' />
        </motion.section>

      </div>
     <div className="text-white flex justify-end items-center space-x-4 text-4xl mt-20  ml-20">
  <SiAdobe className="w-10 h-10" />
  <span className="text-4xl font-ubuntu ">Adobe</span>
</div>
  
    </motion.section>

</>


  );
}

export default HeroSection