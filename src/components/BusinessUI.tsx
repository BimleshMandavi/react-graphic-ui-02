
"use client";
import { motion } from "framer-motion";

function BusinessUI() {
  return (
    <div className="bg-[#120d23] text-white font-sans sm:px-16">
      <section className="text-center pt-20 py-12">
        <h1 className="text-4xl sm:text-6xl mb-4 mt-8">
          How we are best for your business.
        </h1>
        <div className="sm:flex justify-center gap-8 text-xl pt-12 pb-8">
          <div className="text-center">
            <h2 className="text-4xl sm:text-6xl mt-8 ">$10M+ </h2>
            <p>Revenue for Clients</p>
          </div>
          <span className="text-5xl sm:text-9xl font-[4] my-4 sm:my-0">|</span>
          <div className="text-center">
            <h2 className="text-4xl sm:text-6xl mt-8">1500+ </h2>
            <p>Projects Delivered</p>
          </div>
          <a className="text-5xl sm:text-9xl font-[4] my-4 sm:my-0">|</a>
          <div className="text-center">
            <h2 className="text-4xl sm:text-6xl mt-8">10k+</h2>
            <p>Expert Designers</p>
          </div>
        </div>
      </section>

      <hr className="w-[895px] mx-auto sm:mx-60 mb-8" />

      <section className="text-center py-12">
        <h2 className="text-4xl sm:text-6xl mb-24">
          Explore Perfect needs with us.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 sm:px-12">
          {[
            {
              title: "Campaign Planning",
              img: "/pic-05.png", // Replace with the actual path
            },
            {
              title: "UX/UI Design",
              img: "/pic-06.png", // Replace with the actual path
            },
            {
              title: "Advertising",
              img: "/pic-07.png", // Replace with the actual path
            },
            {
              title: "Rebranding",
              img: "/pic-08.png", // Replace with the actual path
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-30 object-cover mb-4 rounded-md"
              />
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default BusinessUI;
