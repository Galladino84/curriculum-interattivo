import React from "react";

const TechnologyTab = ({ technology, language }) => {
  if (!technology) {
    return <p className="text-gray-500">⏳ Caricamento dati...</p>;
  }

  const techData = technology[language];

  return (
    <div className="mt-6 bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{techData.title}</h3>
      <p className="text-gray-600 mt-2">{techData.description}</p>
    </div>
  );
};

export default TechnologyTab;