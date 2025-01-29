import React from "react";
import { motion } from "framer-motion";

const levelColors = {
  Iniziale: "bg-gray-400",
  Base: "bg-yellow-400",
  Intermedio: "bg-blue-400",
  Avanzato: "bg-green-500",
};

const levelWidths = {
  Iniziale: "w-1/4",
  Base: "w-2/4",
  Intermedio: "w-3/4",
  Avanzato: "w-full",
};

const SkillsList = ({ skills, language }) => {
  return (
    <div className="space-y-4">
      {skills.map((skill, index) => (
        <div key={index}>
          <p>{skill.name[language]}</p>
          <div className="bg-gray-200 w-full rounded-md overflow-hidden">
            <motion.div
              className={`h-4 ${levelColors[skill.level[language]]} ${
                levelWidths[skill.level[language]]
              }`}
              initial={{ width: "0%" }}
              animate={{ width: levelWidths[skill.level[language]] }}
              transition={{ duration: 1.5 }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsList;
