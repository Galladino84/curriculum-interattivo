import React, { useState, useEffect } from "react";

const fetchSkillsData = async () => {
  try {
    const response = await fetch("/skills.json");
    if (!response.ok) throw new Error("Errore nel caricamento delle skill");
    return await response.json();
  } catch (error) {
    console.error("❌ Errore nel caricamento delle skill:", error);
    return null;
  }
};

const SkillsList = ({ language }) => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetchSkillsData().then((data) => {
      if (data) {
        console.log("✅ Skill ricevute:", data);
        setSkills(data[language] ?? []); // Evita valori null o undefined
      }
    });
  }, [language]);

  if (!skills || skills.length === 0) {
    return <p className="text-gray-500">⚠️ Nessuna skill disponibile.</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold">Competenze</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md text-center"
          >
            <h4 className="text-lg font-semibold">{skill.name}</h4>
            <p className="text-gray-600">{skill.level}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsList;
