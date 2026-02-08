"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
      <button
        onClick={() => setLanguage("en")}
        className={`relative px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
          language === "en"
            ? "text-white"
            : "text-white/50 hover:text-white/80"
        }`}
      >
        {language === "en" && (
          <motion.div
            layoutId="activeLang"
            className="absolute inset-0 bg-purple/30 rounded-md"
            transition={{ type: "spring", duration: 0.3 }}
          />
        )}
        <span className="relative z-10">EN</span>
      </button>
      <button
        onClick={() => setLanguage("bs")}
        className={`relative px-3 py-1.5 text-xs font-medium rounded-md transition-colors duration-200 ${
          language === "bs"
            ? "text-white"
            : "text-white/50 hover:text-white/80"
        }`}
      >
        {language === "bs" && (
          <motion.div
            layoutId="activeLang"
            className="absolute inset-0 bg-purple/30 rounded-md"
            transition={{ type: "spring", duration: 0.3 }}
          />
        )}
        <span className="relative z-10">BS</span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
