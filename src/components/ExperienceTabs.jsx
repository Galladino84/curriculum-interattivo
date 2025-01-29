import React, { useState } from "react";
import ExperienceList from "./ExperienceList";

const ExperienceTabs = ({ experiences, language, setSelectedJob, t }) => {
  console.log("✅ Dati passati a ExperienceList:", { experiences, language });

  // Controllo se experiences è un oggetto. Se è un array, lo correggiamo.
  const safeExperiences =
    !experiences || Array.isArray(experiences)
      ? { it: [], en: [] }
      : experiences;

  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="experience-tabs">
      <div className="tab-buttons flex">
        <button
          className={`px-4 py-2 ${
            activeTab === "experience"
              ? "bg-gray-800 text-white"
              : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("experience")}
        >
          {t("Esperienza")}
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "skills" ? "bg-gray-800 text-white" : "bg-gray-300"
          }`}
          onClick={() => setActiveTab("skills")}
        >
          {t("Competenze")}
        </button>
      </div>

      <div className="tab-content p-4">
        {activeTab === "experience" ? (
          <ExperienceList
            experiences={safeExperiences}
            language={language}
            setSelectedJob={setSelectedJob}
            t={t}
          />
        ) : (
          <p className="text-gray-500">Sezione competenze in arrivo...</p>
        )}
      </div>
    </div>
  );
};

export default ExperienceTabs;
