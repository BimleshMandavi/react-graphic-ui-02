import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ZeptoSlider() {
  const testimonials = [
    {
      image: "/pic-14.png",
      name: "Sanskruti Verma",
      role: "Visual Design Manager",
      feedback:
        "Zepto has partnered with us to enhance our brand’s visual identity through expert graphic design. This collaboration drives revenue growth by creating high-quality, engaging designs that resonate with our audience. Together, we’re scaling our brand and staying ahead in a competitive market.",
    },
    {
      image: "/pic-15.png",
      name: "John Doe",
      role: "Creative Director",
      feedback:
        "This project exceeded expectations by delivering outstanding designs. It helped us engage better with customers and achieve our goals efficiently.",
    },
    {
      image: "/pic-16.png",
      name: "Jane Smith",
      role: "Marketing Head",
      feedback:
        "The team's expertise in graphic design is remarkable! The results significantly boosted our brand presence and sales.",
    },
    
  ];

  // Slider Settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (

    <div className="sm:mt-20 sm:mx-24 relative">
      <Slider {...settings}>
      {testimonials.map((testimonial, index) => (
        <div className="sm:flex  sm:items-center sm:justify-center sm:h-80   sm:mx-24  sm:ml-40">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-10   rounded-lg max-w-4xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Left Section */}
        <div className="flex flex-col items-center  md:items-start w-full ">
          <img className ="rounded-lg sm:pr-10 w-[200px]" src={testimonial.image} />

          <div className="mt-4 text-center md:text-left ">
            <p className="font-medium text-gray-700">{testimonial.name}</p>
            <p className="text-sm text-gray-500">{testimonial.role}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-gray-700 sm:text-xl text-center md:text-left sm:w-auto  bg-white p-6 shadow-lg rounded-lg max-w-4xl">
          <p>
            {testimonial.feedback}
          </p>
          <a
            href="#"
           
            className="inline-block mt-4 text-[#1600ea] hover:underline sm:flex items-center"
          >
            View Portfolio <span className="ml-2">→</span>
          </a>
        </div>
      </motion.div>
    </div>
      ))}
      </Slider>

      {/* Custom CSS for positioning the dots */}
      <style>{`
        .slick-dots {
          position: absolute;
          bottom: 0px;    /* Positioning from the bottom */
          right: 0px;     /* Positioning from the right side */
          display: flex;
          justify-content: center;
          gap: 10px;
          width: 100px;
          z-index: 10;     /* Make sure dots are visible above other content */
        }

        .slick-dots li button:before {
          font-size: 12px;
          color: rgba(0, 0, 0, 0.5); /* Default dot color */
          }
          
        .slick-dots li.slick-active button:before {
          color: #1600ea; /* Active dot color */
        }
      `}</style>
    </div>
  );
}
