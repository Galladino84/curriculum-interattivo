import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import ExperienceTabs from "./components/ExperienceTabs";

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
    <div className="grid grid-cols-1 md:grid-cols-10 h-screen">
      {/* Sidebar (30% su desktop, 100% su mobile) */}
      <div className="md:col-span-3 w-full bg-gray-900">
        <Sidebar language={language} setLanguage={setLanguage} />
      </div>

      {/* Contenuto principale (70% su desktop, 100% su mobile) */}
      <main className="p-6 md:col-span-7 w-full">
        
        <ExperienceTabs experiences={experiences} language={language} />
      </main>
    </div>
  );
};

export default App;
