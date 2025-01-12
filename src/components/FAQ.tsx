"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const questions = [
  { id: 1, question: 'Question', answer: 'Answer' },
  { id: 2, question: 'Question', answer: 'Answer' },
  { id: 3, question: 'Question', answer: 'Answer' },
  { id: 4, question: 'Question', answer: 'Answer' },
  { id: 5, question: 'Question', answer: 'Answer' },
  { id: 6, question: 'Closed Question Example', answer: '' },
];

export default function FAQ() {
  // Explicitly define state type as number or null
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  // Ensure 'id' parameter has a defined type
const toggleQuestion = (id: number) => {
  setOpenQuestion(openQuestion === id ? null : id);
};

  return (
<<<<<<< HEAD
    <div className="w-full mx-auto mt-16 px-4 sm:px-6 mb-16 md:px-28">
      <h1 className="text-6xl font-semibold  mb-6">
=======
    <div className="w-full mx-auto pt-16 px-4 sm:px-6 pb-16 md:px-28 bg-[#ffffff]">
      <h1 className="text-6xl  text-start mb-6">
>>>>>>> 7ebad209e05709533c356f41fe8c7c2135b938e3
        Resolve your Doubts here.
      </h1>
      <ul className="space-y-8 sm:pt-14 sm:text-5xl">
        {questions.map(({ id, question, answer }) => (
          <li key={id} className="border-b">
            <div
              className="flex items-center text-center justify-between py-2  cursor-pointer"
              onClick={() => toggleQuestion(id)}
            >
              <span className="text-lg mb-8 font-semibold  break-words sm:text-3xl">
                {id}. {question}
              </span>
<<<<<<< HEAD
              <button className="text-white text-center font-bold text-xl sm:text-3xl lg:text-3xl rounded-full mb-10 w-12 h-12 bg-[#1600ea] t">
=======
              <button className="text-white font-bold text-xl text-center sm:text-3xl lg:text-3xl rounded-full w-10 h-10 bg-[#1600ea] t">
>>>>>>> 7ebad209e05709533c356f41fe8c7c2135b938e3
                {openQuestion === id ? '×' : '+'}
              </button>
            </div>
            <AnimatePresence>
              {openQuestion === id && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <p className="py-2 mb-4 px-4 text-gray-600 text-sm sm:text-lg lg:text-lg">
                    {answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}
