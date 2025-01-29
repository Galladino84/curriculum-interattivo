import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ExperienceTabs from "./components/ExperienceTabs";
import SkillsList from "./components/SkillsList";

const fetchExperienceData = async () => {
  try {
    const response = await fetch("/experience.json");
    if (!response.ok)
      throw new Error("Errore nel caricamento delle esperienze");
    return await response.json();
  } catch (error) {
    console.error("❌ Errore nel caricamento delle esperienze:", error);
    return null;
  }
};

const App = () => {
  const [language, setLanguage] = useState("it");
  const [experiences, setExperiences] = useState(null);

  useEffect(() => {
    fetchExperienceData().then((data) => {
      if (data) {
        setExperiences(data);
        console.log("✅ Dati esperienze ricevuti:", data);
      }
    });
  }, []);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar (max 28%) */}
      <Sidebar
        language={language}
        setLanguage={setLanguage}
        className="w-full md:w-1/4 xl:w-1/5"
      />

      {/* Contenuto principale */}
      <main className="p-6 flex-1 w-full">
        <h1 className="text-2xl font-bold">Benvenuto!</h1>
        <div className="mt-4">
          <ExperienceTabs experiences={experiences} language={language} />
        </div>
        <div className="mt-8">
          <SkillsList language={language} />
        </div>
      </main>
    </div>
  );
};

export default App;
