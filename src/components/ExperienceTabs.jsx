import React, { useState } from "react";
import ExperienceList from "./ExperienceList";
import SkillsEducation from "./SkillsEducation";

const ExperienceTabs = ({
  experiences,
  personalData,
  setSelectedJob,
  language,
}) => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <div className="w-full max-w-4xl">
      <div className="flex border-b">
        <button
          className={`px-4 py-2 ${
            activeTab === "experience" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("experience")}
        >
          {language === "it" ? "Esperienze" : "Experience"}
        </button>
        <button
          className={`px-4 py-2 ${
            activeTab === "skills" ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab("skills")}
        >
          {language === "it" ? "Competenze & Istruzione" : "Skills & Education"}
        </button>
      </div>

      {activeTab === "experience" ? (
        <ExperienceList
          experiences={experiences}
          setSelectedJob={setSelectedJob}
          language={language}
        />
      ) : (
        <SkillsEducation personalData={personalData} language={language} />
      )}
    </div>
  );
};

export default ExperienceTabs;
