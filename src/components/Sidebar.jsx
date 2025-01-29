import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ language, setLanguage }) => {
  const [personalData, setPersonalData] = useState(null);

  useEffect(() => {
    fetch("/personal_data.json")
      .then((response) => {
        if (!response.ok) throw new Error("Errore nel caricamento del JSON");
        return response.json();
      })
      .then((data) => setPersonalData(data))
      .catch((error) => console.error("❌ Errore nel caricamento:", error));
  }, []);

  if (!personalData) {
    return <p className="text-red-500 text-center">⌛ Caricamento dati...</p>;
  }

  return (
    <aside className="w-64 p-6 bg-gray-900 text-white flex flex-col items-center">
      {/* Immagine Profilo */}
      {personalData.photo && (
        <img
          src={personalData.photo}
          alt="Profilo"
          className="w-24 h-24 rounded-full border-2 border-gray-300 shadow-lg mb-4"
        />
      )}

      {/* Nome e Indirizzo */}
      <h2 className="text-2xl font-bold">{personalData.name}</h2>
      <p className="text-gray-400 text-sm">{personalData.address}</p>

      {/* Email e Telefono (Solo se definiti) */}
      <div className="mt-4 text-center">
        {personalData.email && personalData.email.trim() !== "" ? (
          <p className="text-sm">
            📧{" "}
            <a
              href={`mailto:${personalData.email}`}
              className="text-blue-400 hover:underline"
            >
              {personalData.email}
            </a>
          </p>
        ) : (
          <p className="text-gray-500 text-sm">Email non disponibile</p>
        )}

        {personalData.phone && personalData.phone.trim() !== "" ? (
          <p className="text-sm">
            📞{" "}
            <a
              href={`tel:${personalData.phone}`}
              className="text-green-400 hover:underline"
            >
              {personalData.phone}
            </a>
          </p>
        ) : (
          <p className="text-gray-500 text-sm">Telefono non disponibile</p>
        )}
      </div>

      {/* Bottone Cambia Lingua */}
      <button
        onClick={() => setLanguage(language === "it" ? "en" : "it")}
        className="mt-6 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white transition-all"
      >
        🌍 Cambia Lingua ({language === "it" ? "🇬🇧 English" : "🇮🇹 Italiano"})
      </button>
    </aside>
  );
};

export default Sidebar;
