import React, { useState } from "react";
import JobLightbox from "./JobLightbox";

const ExperienceList = ({ experiences }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  if (!Array.isArray(experiences) || experiences.length === 0) {
    console.warn(
      "⚠️ Nessuna esperienza trovata o dati non validi:",
      experiences
    );
    return <p className="text-white p-4">⚠️ Nessuna esperienza trovata</p>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Esperienze Lavorative
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="bg-gray-800 text-white p-4 rounded-lg cursor-pointer hover:bg-gray-700 transition"
            onClick={() => {
              console.log("📌 Click su esperienza:", exp);
              setSelectedExperience(exp);
            }}
          >
            <h3 className="text-lg font-semibold">{exp.title}</h3>
            <p className="text-sm text-gray-400">{exp.company}</p>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedExperience && (
        <JobLightbox
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  );
};

export default ExperienceList;
