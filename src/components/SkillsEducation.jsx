import React from "react";
import SkillsList from "./SkillsList";

const SkillsEducation = ({ personalData, language }) => {
  return (
    <div className="mt-8 w-full bg-white rounded-xl shadow-lg p-6 text-gray-800">
      <h2 className="text-3xl font-semibold mb-4">
        {language === "it" ? "Competenze" : "Skills"}
      </h2>
      <SkillsList skills={personalData.skills} language={language} />

      <h2 className="text-3xl font-semibold mt-6 mb-4">
        {language === "it" ? "Istruzione" : "Education"}
      </h2>
      {personalData.education.map((edu, index) => (
        <div key={index} className="mb-4">
          <strong>{edu.school}</strong> - {edu.degree[language]} ({edu.years})
          <p>{edu.description[language]}</p>
        </div>
      ))}
    </div>
  );
};

export default SkillsEducation;
