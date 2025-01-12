import { useState } from "react";
import { motion } from "framer-motion";
import {  GiHamburgerMenu } from "react-icons/gi";
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Platform", subItems: ["Overview", "Features", "Integrations"] },
    { name: "Solutions", subItems: ["Enterprise", "Small Business", "Startups"] },
    { name: "Resources", subItems: ["Blog", "Webinars", "Guides"] },
    { name: "Talent Network", subItems: ["Find Talent", "Join as Talent", "Case Studies"] },
  ];

  return (
    <motion.nav
     
      className="bg-[#0f0e24] border-b-2 border-[#262440]  text-white sm:px-20 py-4 sm:pl-60 flex justify-between items-center shadow-bottom-white relative z-50 right-0"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Left Navigation Items */}
      <ul className="hidden md:flex space-x-8">

  {/* <Accordion>
  
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </AccordionDetails>
      </Accordion> */}
        {navItems.map((item) => (
          <li key={item.name} className="group relative">
            <span className="cursor-pointer">{item.name}</span>
            {/* Dropdown Menu */}
            <div className="absolute left-0 hidden group-hover:block bg-[#1e1c3d] py-2 mt-2 rounded shadow-lg">
              {item.subItems.map((subItem) => (
                <a
                  key={subItem}
                  href="#"
                  className="block px-4 py-2 hover:bg-[#2e2c4d] transition"
                >
                  {subItem}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>

      {/* Right Navigation Buttons */}
   
      <div className="sm:flex font-light text-2xl items-center sm:justify-between space-x-4 sm:ml-32 ">
        <a
          href="#"
          className="hidden md:inline-block border border-white px-4 py-1 rounded hover:bg-white hover:text-[#0f0e24] transition"
        >
          Hire Talent ↗
        </a>
        <div className="flex items-center justify-between gap-24">
        <a
          href="#"
          className="bg-[#1600ea] px-6 py-2  rounded hover:bg-blue-500 transition "
        >
          Get Started
        </a>

        {/* Mobile Menu Button */}
        <button
      
          className="flex sm:hidden sm:ml-8 w-full h-full text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          <GiHamburgerMenu className="w-12 h-12 ml-20" />
        </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="absolute top-full left-0  w-full bg-[#0f0e24] text-white flex flex-col space-y-4 p-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <div key={item.name} className="flex justify-evenly ">
              <span className="font-bold mb-2 flex">{item.name}</span>
              {item.subItems.map((subItem) => (
                <a 
                  key={subItem}
                  href="#"
                  className=" flex-col pl-4 py-1 hover:bg-[#2e2c4d] transition"
                >
                  {subItem}
                </a>
              ))}
            </div>
          ))}
          <a href="#" className="block border border-white px-4 py-2 rounded text-center">Hire Talent ↗</a>
          <a href="#" className="block bg-blue-600 px-4 py-2 rounded text-center">Get Started</a>
        </motion.div>
      )}
    </motion.nav>
  );
}
