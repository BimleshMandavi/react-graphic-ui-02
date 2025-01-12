import { motion } from "framer-motion";
import { useState } from "react";

export default function TakeAdvantageSection() {
  const items = [
    {
      title: "Logo Design",
      description:
        "Craft unique and memorable logos that embody your brand’s identity, leaving a lasting impression on your audience.",
      icon: "/pic-13.png",
    },
    {
      title: "Brand Identity Design",
      description:
        "Developing complete branding elements, including color palettes, typography, and visual style guidelines.",
      icon: "/pic-13.png",
    },
    {
      title: "Social Media Graphics",
      description:
        "Creating visually engaging graphics for social media posts, ads, stories, and banners.",
      icon: "/pic-13.png",
    },
    {
      title: "Website and App Graphics",
      description:
        "Designing UI/UX visuals, icons, and elements for websites and mobile applications.",
      icon: "/pic-13.png",
    },
    {
      title: "Infographics",
      description:
        "Converting complex data and information into visually appealing and easy-to-understand infographics.",
      icon: "/pic-13.png",
    },
    {
      title: "Ad Banners",
      description:
        "Develop eye-catching ad banners optimized for digital campaigns to maximize clicks and conversions.",
      icon: "/pic-13.png",
    },
    {
      title: "Motion Graphics and GIFs",
      description: ".....",
      icon: "/pic-13.png",
    },
    {
      title: "Brochure & Flyers",
      description:
        "Design informative and visually appealing brochures and flyers that effectively convey your message and promote your business.",
      icon: "/pic-13.png",
    },
    {
      title: "Illustration Services",
      description:
        "Producing custom illustrations tailored to enhance brand communication and storytelling.",
      icon: "/pic-13.png",
    },
    {
      title: "Presentation Design",
      description:
        "Create compelling PowerPoint templates and pitch decks that captivate audiences and communicate your message effectively.",
      icon: "/pic-13.png",
    },
    {
      title: "Advertising Design",
      description:
        "Designing print and digital ads, including billboards, banners, and magazine layouts, for impactful campaigns.",
      icon: "/pic-13.png",
    },
    {
      title: "Ebook and Publication",
      description:
        "Designing layouts for ebooks, magazines, and newsletters with consistent and appealing visual aesthetics.",
      icon: "/pic-13.png",
    },
    {
      title: "Menu Design",
      description:
        "Crafting attractive and easy-to-navigate menus for restaurants, cafes, or events.",
      icon: "/pic-13.png",
    },
    {
      title: "Poster and Banner Design",
      description:
        "Creating impactful posters and banners for promotions, events, or campaigns.",
      icon: "/pic-13.png",
    },
    {
      title: "Custom Typography Design",
      description:
        "Creating unique fonts and typography tailored to brand requirements.",
      icon: "/pic-13.png",
    },
    {
      title: "Book Cover Design",
      description:
        "Crafting visually appealing and market-relevant book covers for print and digital publications.",
      icon: "/pic-13.png",
    },
    {
      title: "UI Icon Design",
      description:
        "Crafting consistent, functional, and aesthetically pleasing icons for apps and websites.",
      icon: "/pic-13.png",
    },
    {
      title: "Brand Asset Creation",
      description:
        "Developing a library of cohesive design assets to ensure consistent branding across platforms.",
      icon: "/pic-13.png",
    },
  ];

  const [visibleCount, setVisibleCount] = useState(9);

  const toggleVisibility = () => {
    setVisibleCount(visibleCount === 9 ? items.length : 9);
  };

  return (
    <motion.section
      id="take-advantage"
     
      className="bg-gray-100 sm:py-16 pt-8 mb-8 sm:px-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container mx-auto">
        <motion.h2
         
          className="text-3xl md:text-6xl ml-8 text-center text-black pb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Take Advantage
        </motion.h2>
        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 px-8">
          {items.slice(0, visibleCount).map((item, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-lg flex flex-col border-[1px] border-[#747474c9]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.0 }}
            >
              <div className="flex items-center gap-1">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 mb-4"
                />
                <h3 className="text-2xl text-black  font-bold mb-2">{item.title}</h3>
              </div>
              <p className="text-lg text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.button
          onClick={toggleVisibility}
          
          className="mt-8 mx-auto block border border-black hover:bg-blue-600 text-black hover:text-white py-2 px-6 rounded"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: items.length * 0.1 + 0.2 }}
        >
          {visibleCount === 9 ? "Show More ↓" : "Show Less ↑"}
        </motion.button>
      </div>
    </motion.section>
  );
}