import React from "react";
import { motion } from "framer-motion";

const ExperienceList = ({ experiences, setSelectedJob, t }) => {
  // Se experiences è undefined o null, mostra un messaggio di caricamento
  if (!experiences || !Array.isArray(experiences)) {
    return (
      <p className="text-center text-gray-600">Caricamento esperienze...</p>
    );
  }

  return (
    <motion.section
      className="mt-8 w-full max-w-4xl bg-white rounded-xl shadow-lg p-6 text-gray-800"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <h2 className="text-3xl font-semibold mb-4">{t.experience}</h2>
      <ul className="space-y-4">
        {experiences.map((job, index) => (
          <li
            key={index}
            onClick={() => setSelectedJob(job)}
            className="cursor-pointer hover:text-blue-500 flex items-center"
          >
            <strong>{job.title}</strong> - {job.company} {job.date}
            <button className="ml-2 bg-blue-500 text-white rounded-full p-1">
              +
            </button>
          </li>
        ))}
      </ul>
    </motion.section>
  );
};

export default ExperienceList;
