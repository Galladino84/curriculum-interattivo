import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ExperienceTabs from "./components/ExperienceTabs";
import JobLightbox from "./components/JobLightbox";

const App = () => {
  const [language, setLanguage] = useState("it");
  const [experiences, setExperiences] = useState({ it: [], en: [] });
  const [selectedJob, setSelectedJob] = useState(null);

  // Caricamento esperienze da file JSON
  useEffect(() => {
    fetch("/experiences.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("✅ Dati ricevuti:", data);

        // Verifica che i dati siano un oggetto con chiavi 'it' e 'en'
        if (data && typeof data === "object" && !Array.isArray(data)) {
          setExperiences(data);
        } else {
          console.error(
            "❌ Errore: Il formato di experiences.json non è corretto."
          );
        }
      })
      .catch((error) =>
        console.error("❌ Errore nel caricamento delle esperienze:", error)
      );
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar language={language} setLanguage={setLanguage} />

      {/* Contenuto principale */}
      <div className="flex-1 p-6">
        <h1 className="text-2xl font-bold">Portfolio di Fabrizio Gallazzi</h1>

        {/* Componenti con gestione della lingua */}
        <ExperienceTabs
          experiences={experiences}
          language={language}
          setSelectedJob={setSelectedJob}
          t={(key) => key} // Mock funzione di traduzione
        />

        {/* Lightbox per mostrare i dettagli del lavoro */}
        <JobLightbox job={selectedJob} onClose={() => setSelectedJob(null)} />
      </div>
    </div>
  );
};

export default App;
