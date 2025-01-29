import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Sidebar = ({ language, setLanguage, personalData }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [sidebarColor, setSidebarColor] = useState("bg-gray-800");

  const toggleColor = () => {
    const colors = [
      "bg-gray-800",
      "bg-blue-800",
      "bg-green-800",
      "bg-purple-800",
      "bg-red-800",
    ];
    setSidebarColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  return (
    <aside className={`${sidebarColor} text-white p-6 w-1/4 fixed h-full`}>
      <button
        onClick={toggleColor}
        className="mb-4 px-4 py-2 bg-white text-gray-800 rounded-lg"
      >
        {language === "it" ? "Cambia Colore" : "Change Color"}
      </button>

      <select
        className="mb-4 p-2 bg-white text-gray-800 rounded"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="it">Italiano</option>
        <option value="en">English</option>
      </select>

      <img
        src="/profile.jpg"
        alt={personalData.name}
        className="rounded-full mx-auto w-24 border-2 border-white"
      />
      <h2 className="text-center text-xl mt-4">{personalData.name}</h2>
      <p className="text-center mt-2">{personalData.address}</p>

      <div className="text-center mt-2">
        <button
          onClick={() => setShowPhone(true)}
          className="text-blue-400 hover:underline"
        >
          {showPhone ? personalData.phone.value : "Mostra Telefono"}
        </button>
      </div>
      <div className="text-center mt-2">
        <button
          onClick={() => setShowEmail(true)}
          className="text-blue-400 hover:underline"
        >
          {showEmail ? personalData.email.value : "Mostra Email"}
        </button>
      </div>

      <p className="text-center mt-4">{personalData.about[language]}</p>
      <button
        onClick={() => setShowAdditionalInfo(!showAdditionalInfo)}
        className="block w-full mt-4 px-4 py-2 bg-white text-gray-800 rounded-lg"
      >
        {language === "it" ? "Più Info" : "More Info"}
      </button>

      <AnimatePresence>
        {showAdditionalInfo && (
          <motion.div
            className="absolute top-0 left-0 w-full h-full p-6 pt-12 bg-gray-900 text-white rounded-lg shadow-lg"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
          >
            <button
              onClick={() => setShowAdditionalInfo(false)}
              className="absolute top-2 right-4 text-white text-lg bg-red-600 px-3 py-1 rounded"
            >
              ✖
            </button>
            <p>{personalData.additionalInfo[language]}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </aside>
  );
};

export default Sidebar;
