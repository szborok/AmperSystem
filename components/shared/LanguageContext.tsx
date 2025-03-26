// components/shared/LanguageContext.tsx

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>("en");

  useEffect(() => {
    // Get the preferred language from the browser
    const browserLanguage = navigator.language.startsWith("hu") ? "hu" : "en";
    setLanguage(browserLanguage);
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
