
"use client"
// Contact.tsx
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <motion.section
      id="contact"
      className="bg-gray-900 text-white py-16 sm:py-20"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">Get in Touch</h2>
          <p className="text-lg sm:text-xl">We can&apos;t wait to meet you!</p>
        </motion.div>

        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <p className="text-xl sm:text-2xl font-semibold">Phone: +91-XXXXXXXXXX</p>
          <p className="text-xl sm:text-2xl font-semibold">
            Email: <a href="mailto:contact@example.com" className="text-blue-400 underline">contact@example.com</a>
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center items-center space-x-6 mb-12"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#" className="text-blue-500 hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24">
              {/* Social Media Icon 1 */}
            </svg>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24">
              {/* Social Media Icon 2 */}
            </svg>
          </a>
          <a href="#" className="text-blue-500 hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10" viewBox="0 0 24 24">
              {/* Social Media Icon 3 */}
            </svg>
          </a>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <p className="text-sm sm:text-base">
            © 2024, Name Inc. All Rights Reserved. <br />
            <a href="#" className="text-blue-400 underline">Terms of Service</a> | <a href="#" className="text-blue-400 underline">Privacy Policy</a>
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
}
