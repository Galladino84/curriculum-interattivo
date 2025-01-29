import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Funzione per caricare i dati delle competenze
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
  const [expanded, setExpanded] = useState(null); // Stato per l'accordion

  useEffect(() => {
    fetchSkillsData().then((data) => {
      if (data && data[language]) {
        console.log("✅ Skill ricevute:", data[language]);
        setSkills(data[language]);
      }
    });
  }, [language]);

  if (!skills || skills.length === 0) {
    return <p className="text-gray-500">⚠️ Nessuna competenza disponibile.</p>;
  }

  return (
    <div className="mt-6">
      <h3 className="text-xl font-bold">Competenze</h3>
      
      {/* Lista principale delle competenze */}
      <div className="space-y-2">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow-md w-full flex justify-between items-center"
          >
            <h4 className="text-md font-semibold">{skill.name}</h4>
            <p className="text-gray-600">{skill.level}</p>
          </div>
        ))}
      </div>

      {/* Sezione delle competenze aggiuntive con Accordion */}
      
    </div>
  );
};

export default SkillsList;
