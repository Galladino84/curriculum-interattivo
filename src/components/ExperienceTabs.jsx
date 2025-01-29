import React, { useState } from "react";
import Lightbox from "./Lightbox";
import SkillsList from "./SkillsList";

const ExperienceTabs = ({ experiences, language }) => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [activeTab, setActiveTab] = useState("experience"); // "experience" | "skills"

  // Se experiences è null o non ha dati per la lingua selezionata, inizializza un array vuoto
  const experienceList = experiences?.[language] ?? [];

  return (
    <div className="mt-6 w-full">
      {/* TAB MENU */}
      <div className="flex space-x-4 mb-4 border-b pb-2">
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "experience"
              ? "bg-gray-200 font-semibold"
              : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Esperienze
        </button>
        <button
          className={`px-4 py-2 rounded-t-lg ${
            activeTab === "skills" ? "bg-gray-200 font-semibold" : "bg-gray-100"
          }`}
          onClick={() => setActiveTab("skills")}
        >
          Competenze
        </button>
      </div>

      {/* CONTENUTO TAB */}
      {activeTab === "experience" ? (
        <>
          <h3 className="text-xl font-bold mb-4">Esperienze lavorative</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {experienceList.map((experience, index) => (
              <button
                key={index}
                onClick={() => setSelectedExperience(experience)}
                className="w-full bg-white p-4 rounded-lg shadow-md text-left hover:bg-gray-100 transition duration-200 border border-gray-200"
              >
                <h4 className="text-lg font-semibold text-gray-800">
                  {experience.title}
                </h4>
                <p className="text-gray-600">{experience.company}</p>
              </button>
            ))}
          </div>
        </>
      ) : (
        <SkillsList language={language} />
      )}

      {/* Lightbox per visualizzare dettagli esperienza */}
      {selectedExperience && (
        <Lightbox
          experience={selectedExperience}
          onClose={() => setSelectedExperience(null)}
        />
      )}
    </div>
  );
};

export default ExperienceTabs;
