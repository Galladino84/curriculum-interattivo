import React from "react";
import { motion } from "framer-motion";

const JobLightbox = ({ job, onClose }) => {
  if (!job) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white p-6 rounded-lg shadow-xl max-w-lg relative"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.8 }}
        transition={{ duration: 0.3 }}
      >
        {/* Pulsante di chiusura */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 text-white p-2 rounded-full hover:bg-red-700 transition"
        >
          ✖
        </button>

        {/* Logo Aziendale */}
        {job.logo && (
          <div className="flex justify-center mb-4">
            <img
              src={job.logo}
              alt={`${job.company} logo`}
              className="w-24 h-24 object-contain"
            />
          </div>
        )}

        {/* Titolo e dettagli */}
        <h2 className="text-2xl font-bold text-gray-800">{job.title}</h2>
        <h3 className="text-lg font-semibold text-gray-600">{job.company}</h3>
        <p className="text-sm text-gray-500 mb-4">{job.date}</p>

        {/* Descrizione del ruolo */}
        <p className="text-gray-700 leading-relaxed">{job.description}</p>
      </motion.div>
    </motion.div>
  );
};

export default JobLightbox;
