import enTranslations from "./en.json";
import huTranslations from "./hu.json";

type Language = "en" | "hu";

const translations = {
  en: enTranslations,
  hu: huTranslations,
};

// Helper function to safely access nested properties including arrays
export function getNestedValue(obj: any, path: string): any {
  const parts = path.replace(/\[(\d+)\]/g, ".$1").split(".");
  let current = obj;

  for (const part of parts) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }

  return current;
}

export function useTranslation(language: Language) {
  const t = <T = string>(path: string): T => {
    const value = getNestedValue(translations[language], path);

    if (value === undefined) {
      console.warn(`Translation not found for path: ${path}`);
      return path as unknown as T;
    }

    return value as T;
  };

  return { t };
}
