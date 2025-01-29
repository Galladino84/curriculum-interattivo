import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fetchPersonalData = async () => {
  try {
    const response = await fetch("/personal_data.json");
    if (!response.ok) throw new Error("Errore nel caricamento del JSON");
    return await response.json();
  } catch (error) {
    console.error("❌ Errore nel caricamento dei dati personali:", error);
    return null;
  }
};

const Sidebar = ({ language, setLanguage }) => {
  const [personalData, setPersonalData] = useState(null);
  const [showContacts, setShowContacts] = useState(false);
  const [expanded, setExpanded] = useState(null); // Per l'accordion

  useEffect(() => {
    fetchPersonalData().then((data) => {
      if (data) {
        setPersonalData(data);
        console.log("✅ Dati Sidebar ricevuti:", data);
      }
    });
  }, []);

  if (!personalData) {
    return <p className="text-white p-4">⏳ Caricamento dati...</p>;
  }

  return (
    <motion.aside
      initial={{ width: "100%" }}
      animate={{ width: "100%" }}
      className="bg-gray-900 text-white h-auto md:h-screen w-full md:w-3/10 md:relative top-0 left-0 shadow-lg overflow-hidden"
    >
      <div className="h-full flex flex-col items-center p-6">
        {/* FOTO PROFILO */}
        <img
          src={personalData.photo}
          alt="Profile"
          className="w-24 h-24 rounded-full border-2 border-white"
        />
        <h1 className="text-xl font-bold mt-2">{personalData.name}</h1>
        <p className="text-sm text-gray-400">{personalData.address}</p>

        {/* BOTTONE CONTATTI */}
        <button
          onClick={() => setShowContacts(!showContacts)}
          className="mt-2 px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm"
        >
          {showContacts
            ? language === "it"
              ? "Nascondi Contatti"
              : "Hide Contacts"
            : language === "it"
            ? "Mostra Contatti"
            : "Show Contacts"}
        </button>

        {/* CONTATTI */}
        <AnimatePresence>
          {showContacts && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-2 p-3 bg-gray-800 rounded-lg text-sm text-gray-300 w-full text-center"
            >
              <p>📞 {personalData.phone[language]}</p>
              <p>📧 {personalData.email[language]}</p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ACCORDION "ABOUT ME" */}
        <div className="w-full mt-6">
          <h3 className="text-lg font-semibold text-center">About Me</h3>

          {/* Sezione 1 */}
          <div className="mt-2">
            <button
              className="w-full text-left px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
              onClick={() => setExpanded(expanded === "bio" ? null : "bio")}
            >
              📜 Bio
            </button>
            <AnimatePresence>
              {expanded === "bio" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 bg-gray-800 rounded-lg text-sm text-gray-300 mt-1"
                >
                  <p>{personalData.bio[language]}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sezione 2 */}
          <div className="mt-2">
            <button
              className="w-full text-left px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
              onClick={() =>
                setExpanded(expanded === "hobbies" ? null : "hobbies")
              }
            >
              🎮 Hobby
            </button>
            <AnimatePresence>
              {expanded === "hobbies" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 bg-gray-800 rounded-lg text-sm text-gray-300 mt-1"
                >
                  <p>{personalData.hobby[language]}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sezione 3 */}
          <div className="mt-2">
            <button
              className="w-full text-left px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
              onClick={() =>
                setExpanded(expanded === "goals" ? null : "goals")
              }
            >
              🎯 {language === "it" ? "Obiettivi" : "Goals"}
            </button>
            <AnimatePresence>
              {expanded === "goals" && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-3 bg-gray-800 rounded-lg text-sm text-gray-300 mt-1"
                >
                  <p>{personalData.goals[language]}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* CAMBIO LINGUA */}
        <button
          onClick={() => setLanguage(language === "it" ? "en" : "it")}
          className="mt-4 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-400 w-full"
        >
          {language === "it" ? "Cambia Lingua" : "Change Language"}
        </button>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
