import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const JobLightbox = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose} // Chiude il Lightbox cliccando fuori
      >
        <motion.div
          className="bg-white text-black p-6 rounded-lg shadow-lg w-96 relative"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
          onClick={(e) => e.stopPropagation()} // Evita chiusura su click interno
        >
          <button
            className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full"
            onClick={onClose}
          >
            ✖
          </button>
          <h2 className="text-xl font-bold">{experience.title}</h2>
          <p className="text-gray-600">{experience.company}</p>
          <p className="mt-2">{experience.description}</p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default JobLightbox;
