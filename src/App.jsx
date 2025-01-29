import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ExperienceTabs from "./components/ExperienceTabs";
import JobLightbox from "./components/JobLightbox";

const App = () => {
  const [language, setLanguage] = useState("it");
  const [personalData, setPersonalData] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  useEffect(() => {
    Promise.all([
      fetch("/personal_data.json").then((res) => res.json()),
      fetch("/experiences.json").then((res) => res.json()),
    ])
      .then(([personalData, experiences]) => {
        setPersonalData(personalData);
        setExperiences(experiences);
      })
      .catch((error) => console.error("Errore nel caricamento dati:", error));
  }, []);

  if (!personalData || !experiences) {
    return <p>Caricamento dati...</p>;
  }

  return (
    <div className="flex h-screen">
      <Sidebar
        language={language}
        setLanguage={setLanguage}
        personalData={personalData}
      />
      <div className="flex-1 flex flex-col items-center p-6 overflow-auto bg-gray-100">
        <ExperienceTabs
          experiences={experiences}
          personalData={personalData}
          setSelectedJob={setSelectedJob}
        />
      </div>
      {selectedJob && (
        <JobLightbox job={selectedJob} onClose={() => setSelectedJob(null)} />
      )}
    </div>
  );
};

export default App;
