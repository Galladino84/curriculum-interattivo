import React from "react";

const SkillsEducation = ({ skills }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Competenze</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index} className="py-1">
            {skill.name} - <span className="text-gray-500">{skill.level}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SkillsEducation;
