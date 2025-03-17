import Image from "next/image";
import { useLanguage } from "./LanguageContext";

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hu" : "en");
  };

  return (
    <button
      onClick={toggleLanguage}
      className="w-8 h-8 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange"
      aria-label={`Switch to ${language === "en" ? "Hungarian" : "English"}`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <Image
          src={
            language === "en"
              ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hungarian_flag-lmmnamp0zAC84QzgbGwImDv6SUjoxp.png"
              : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/english_flag-djCOz0On3Hhbh5gPvwPNW3IYDl0BDL.png"
          }
          alt={language === "en" ? "Switch to Hungarian" : "Switch to English"}
          width={32}
          height={32}
          className="rounded-full"
        />
      </div>
    </button>
  );
}
