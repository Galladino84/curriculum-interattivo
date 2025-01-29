import React from "react";

const ExperienceList = ({ experiences, language }) => {
  console.log("✅ Dati passati a ExperienceList:", { experiences, language });

  if (
    !experiences ||
    !experiences[language] ||
    experiences[language].length === 0
  ) {
    return (
      <p className="text-red-500">
        ⚠️ Nessuna esperienza trovata per la lingua "{language}".
      </p>
    );
  }

  return (
    <div>
      {experiences[language].map((exp, index) => (
        <div key={index} className="mb-4 p-4 border border-gray-300 rounded-lg">
          <h3 className="text-xl font-bold">{exp.title}</h3>
          <p className="text-gray-700">{exp.company}</p>
          <p className="text-gray-600">{exp.date}</p>
          <p className="text-gray-500">{exp.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ExperienceList;
