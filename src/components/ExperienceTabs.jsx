import React, { useState, useEffect } from "react";
import Lightbox from "./Lightbox";
import SkillsList from "./SkillsList"; // Importa il componente delle competenze

const ExperienceTabs = ({ experiences, language }) => {
  const [selectedTab, setSelectedTab] = useState("esperienze");
  const [selectedExperience, setSelectedExperience] = useState(null);

  const experienceList = experiences?.[language] ?? [];

  useEffect(() => {
    console.log(`✅ Esperienze per lingua "${language}":`, experienceList);
  }, [experienceList, language]);

  return (
    <div className="mt-6">
      {/* Tabs */}
      <div className="flex gap-2 mb-4">
        <button
          className={`px-4 py-2 text-sm rounded ${
            selectedTab === "esperienze" ? "bg-gray-900 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("esperienze")}
        >
          Esperienze
        </button>
        <button
          className={`px-4 py-2 text-sm rounded ${
            selectedTab === "competenze" ? "bg-gray-900 text-white" : "bg-gray-200"
          }`}
          onClick={() => setSelectedTab("competenze")}
        >
          Competenze
        </button>
      </div>

      {/* Contenuto della Tab */}
      {selectedTab === "esperienze" && (
        <div>
          <h3 className="text-xl font-bold">Esperienze lavorative</h3>
          <div className="space-y-4">
            {experienceList.map((experience, index) => (
              <button
                key={index}
                onClick={() => setSelectedExperience(experience)}
                className="w-full bg-white p-4 rounded-lg shadow-md text-left hover:bg-gray-100 transition"
              >
                <h4 className="text-lg font-semibold">{experience.title}</h4>
                <p className="text-gray-600">{experience.company} / {experience.period}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {selectedTab === "competenze" && (
        <div>
          <h3 className="text-xl font-bold">Competenze</h3>
          <SkillsList language={language} />
        </div>
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
