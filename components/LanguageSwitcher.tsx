import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // To get the current path

export function LanguageSwitcher() {
  const pathname = usePathname(); // Get the current URL path
  const currentLanguage = pathname?.startsWith("/en") ? "en" : "hu"; // Determine the current language

  // Determine the language switch URL
  const switchToLanguage = currentLanguage === "en" ? "/hu" : "/en";

  return (
    <div className="flex items-center space-x-2">
      {/* Only switch if the current path is different */}
      {pathname && !pathname.startsWith(switchToLanguage) && (
        <Link href={switchToLanguage}>
          <button
            className="w-8 h-8 rounded-full overflow-hidden focus:outline-none focus:ring-2 focus:ring-orange"
            aria-label={`Switch to ${
              currentLanguage === "en" ? "Hungarian" : "English"
            }`}
          >
            <div className="flex items-center justify-center w-full h-full">
              <Image
                src={
                  currentLanguage === "en"
                    ? "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hungarian_flag-lmmnamp0zAC84QzgbGwImDv6SUjoxp.png"
                    : "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/english_flag-djCOz0On3Hhbh5gPvwPNW3IYDl0BDL.png"
                }
                alt={
                  currentLanguage === "en"
                    ? "Switch to Hungarian"
                    : "Switch to English"
                }
                width={32}
                height={32}
                className="rounded-full"
              />
            </div>
          </button>
        </Link>
      )}
    </div>
  );
}
