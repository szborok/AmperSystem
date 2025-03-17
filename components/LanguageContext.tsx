// LanguageContext.tsx
"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

type Language = "en" | "hu";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("hu");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("language") as Language | null;
    if (storedLanguage) {
      setLanguage(storedLanguage);
    } else {
      const browserLanguage = navigator.language.startsWith("hu") ? "hu" : "en";
      setLanguage(browserLanguage);
      localStorage.setItem("language", browserLanguage);
    }
    setIsLoading(false);
  }, []);

  const updateLanguage = async (lang: Language) => {
    setIsLoading(true);
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setIsLoading(false);
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: updateLanguage, isLoading }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// LanguageSwitcher.tsx
import { useLanguage as useLanguageContext } from "./LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguageContext();

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "hu" : "en";
    setLanguage(newLanguage);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-8 h-8 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange"
      aria-label={`Switch to ${language === "en" ? "Hungarian" : "English"}`}
    >
      {language.toUpperCase()}
    </button>
  );
}
