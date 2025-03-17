"use server";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  hu: () => import("../dictionaries/hu.json").then((module) => module.default),
};

export const getDictionary = async (locale: "en" | "hu") =>
  dictionaries[locale]();

// Server-only dictionary fetching
export const getPageDictionary = async (locale: "en" | "hu") => {
  "use server";
  return getDictionary(locale);
};
