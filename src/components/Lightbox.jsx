import React from "react";
import { motion } from "framer-motion";

const Lightbox = ({ experience, onClose }) => {
  if (!experience) return null;

  return (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Contenitore del Lightbox */}
      <motion.div
        className="bg-white text-black p-6 rounded-lg shadow-lg w-96 relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
      >
        {/* Pulsante di chiusura X */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition"
        >
          ✖
        </button>

        {/* Contenuto dell'esperienza */}
        <h2 className="text-xl font-bold">{experience.title}</h2>
        <p className="text-gray-600">{experience.company}</p>
        <p className="mt-2">{experience.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default Lightbox;
