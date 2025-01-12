
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

function Footer() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <motion.footer
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="bg-white text-gray-800 border-t border-gray-200 sm:px-28"
    >
      <div className="container mx-auto px-4 sm:pr-14 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {/* Column 1 */}
        <div className="hidden sm:flex sm:flex-col cursor-pointer sm:ml-[-19px]">
          <h5 className="text-lg font-semibold mb-4 text-[#908134]">PLATFORM</h5>
          <ul>
            <li className="mb-2 hover:text-sky-600">Text 1</li>
            <li className="mb-2 hover:text-sky-600">Text 2</li>
            <li className="mb-2 hover:text-sky-600">Text 3</li>
            <li className="mb-2 hover:text-sky-600">Text 5</li>
            <li>Text 6</li>
          </ul>
          <h5 className="text-lg font-semibold mt-6 mb-4 text-[#908134] transform -translate-x-[1px]">
            YET TO BE DECIDED
          </h5>
          <ul className="transform -translate-x-[1px]">
            <li className="mb-2 hover:text-sky-600">Text 1</li>
            <li className="hover:text-sky-600">Text 2</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div className="cursor-pointer hidden sm:flex sm:flex-col">
          <h5 className="text-lg font-semibold mb-4 text-[#908134]">DESIGN SERVICES</h5>
          <ul>
            <li className="mb-2 hover:text-sky-600">Content Writing</li>
            <li className="mb-2 hover:text-sky-600">Graphic Design</li>
            <li className="mb-2 hover:text-sky-600">Video Production</li>
            <li className="mb-2 hover:text-sky-600">Commercial Ads</li>
            <li className="mb-2 hover:text-sky-600">Product Design</li>
            <li className="mb-2 hover:text-sky-600">Packaging Design</li>
            <li className="mb-2 hover:text-sky-600">UI-UX Design</li>
            <li className="hover:text-sky-600">Launch a Brand</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="cursor-pointer hidden sm:flex sm:flex-col sm:ml-4">
          <h5 className="text-lg font-semibold mb-4 text-[#908134]">MARTECH SERVICES</h5>
          <ul>
            <li className="mb-2 hover:text-sky-600">Custom Web Development</li>
            <li className="mb-2 hover:text-sky-600 ">Performance Marketing</li>
            <li className="mb-2 hover:text-sky-600">Lead-Gen Funnel</li>
            <li className="mb-2 hover:text-sky-600">Technical SEO</li>
            <li className="mb-2 hover:text-sky-600">Market Research & Survey</li>
            <li className="mb-2 hover:text-sky-600">Social Media Marketing</li>
            <li className="mb-2 hover:text-sky-600">Campaign Planning</li>
            <li className="hover:text-sky-600">WhatsApp/Email Marketing</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div className="cursor-pointer hidden sm:flex sm:flex-col sm:ml-16 sm:w-[400px]">
          <h5 className="text-lg font-semibold mb-4 text-[#908134]">MEDIA SERVICES</h5>
          <ul>
            <li className="mb-2 hover:text-sky-600">Media Planning & Buying</li>
            <li className="mb-2 hover:text-sky-600">Influencer Marketing</li>
            <li className="mb-2 hover:text-sky-600">Event Marketing</li>
            <li className="hover:text-sky-600">Customer Relations</li>
          </ul>
          <h5 className="text-lg font-semibold mt-6 mb-4 text-[#908134]">TALENT NETWORK SERVICES</h5>
          <ul>
            <li className="mb-2 hover:text-sky-600">Get Hired</li>
            <li className="mb-2 hover:text-sky-600">Get Talent</li>
            <li className="hover:text-sky-600">Evaluate Creative Talent</li>
          </ul>
        </div>

        {/* Column 5 */}
        <div className="cursor-pointer sm:transform sm:translate-x-[160px] hidden sm:flex sm:flex-col sm:mr-20">
          <h5 className="text-lg font-semibold text-[#908134] mb-4">RESOURCES</h5>
          <ul>
            <li className="mb-2 hover:text-sky-600">Blogs</li>
            <li className="mb-2 hover:text-sky-600">Case Studies</li>
            <li className="mb-2 hover:text-sky-600">Our Work</li>
            <li className="mb-2 hover:text-sky-600">E-books</li>
            <li className="mb-2 hover:text-sky-600">Events</li>
            <li className="mb-2 hover:text-sky-600">Creators Hub</li>
            <li className="mb-2 hover:text-sky-600">Global Designers</li>
            <li>Help Center</li>
          </ul>
        </div>
      </div>

      <div className="sm:container flex justify-between pt-4 ml-4 sm:mx-auto px-4 sm:py-6 border-t border-[#192138c9] sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Company */}
        
        <div className="sm:w-[30%]  sm:mr-10 sm:transform sm:-translate-x-[19px]">
          <h5 className="text-lg font-semibold mb-4 text-[#908134]">COMPANY</h5>
          <ul>
            <li className="mb-2">About Us</li>
            <p className="pb-4">Join our team</p>
            <li>
              <a href="#" className="text-white hover:underline border min-w-10 border-[#1600ea] bg-[#1600ea] rounded p-2">
                Join team
              </a>
            </li>
          </ul>
        </div>

        {/* Address */}
        <div className="sm:mr-[580px] text-center sm:text-start  ml-14 sm:ml-0 " style={{ transform: 'translateX(-0.6in)' }}>
          <h5 className="text-lg font-semibold mb-4  text-[#908134]">ADDRESS</h5>
          <p className="hover:text-sky-800 cursor-pointer">Address</p>
        </div>

        {/* Get in Touch */}
        <div className="sm:ml-44 text-center sm:transform sm:translate-x-[1px]">
          <h5 className="text-lg  font-semibold mb-4 text-start text-[#908134]">GET IN TOUCH</h5>
          <div className=" text-start">
          <p>Please connect with us at</p>
          <p>+91-XXXXXXXXXX</p>
          <p>
            or Write us at <a href="mailto:EMAIL">EMAIL</a>
          </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="sm:ml-2 sm:mr-8">
          <h5 className="text-lg font-semibold mb-4 text-[#908134] sm:transform translate-x-[200px]">SOCIAL</h5>
          <ul className="flex space-x-4 text-center sm:transform translate-x-[200px] ">
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FaInstagram className="mr-2 text-pink-500 text-2xl" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline flex items-center">
                <FaLinkedin className="mr-2 text-2xl" />
              </a>
            </li>
          </ul>
          <ul className="sm:flex space-x-4 mt-2 sm:ml-[100px] text-center sm:transform translate-x-[100px]">
            <li>
              <a href="#" className="text-blue-600 hover:underline  items-center">
                <FaFacebookSquare className="mr-2 text-black text-2xl" />
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600 hover:underline  items-center">
                <FaXTwitter className="mr-2 text-black text-2xl" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mx-auto  py-4 sm:flex flex-col md:flex-row items-center justify-between border-t border-[#192138c9]">
        <p className="text-sm text-[#1700ea6d] ">© 2024, Name Inc. All Rights Reserved.</p>
        <ul className="flex sm:mr-20 space-x-4 text-center transform translate-x-[3.4in]">
          <li>
            <a href="#" className="text-[#1700ea6d] hover:underline">
              Terms of Service
            </a>
          </li>
          <li>
            <a href="#" className="text-[#1700ea6d] hover:underline">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="text-[#1700ea6d] hover:underline">
              Sitemap
            </a>
          </li>
        </ul>

        <p className="text-sm text-gray-600 text-center transform translate-x-[60px] pt-8 sm:mb-10 mr-10 sm:mr-20">
          A Proud <span className="text-[#1700ea6d]">🇮🇳 Design Agency</span>.
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
