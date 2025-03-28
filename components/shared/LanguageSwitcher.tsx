import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // To get the current path

export function LanguageSwitcher() {
  const pathname = usePathname(); // Get the current URL path
  const currentLanguage = pathname?.startsWith("/en") ? "en" : "hu"; // Determine the current language

  // Determine the language switch URL
  const switchToLanguage = currentLanguage === "en" ? "/hu" : "/en";

  return (
    <div className="flex items-center h-10">
      {pathname && !pathname.startsWith(switchToLanguage) && (
        <Link href={switchToLanguage}>
          <button
            className="w-10 h-10 flex items-center justify-center rounded-full transition-opacity hover:opacity-80"
            aria-label={`Switch to ${
              currentLanguage === "en" ? "Hungarian" : "English"
            }`}
          >
            <Image
              src={
                currentLanguage === "en"
                  ? "/hungarian_flag.png"
                  : "/english_flag.png"
              }
              alt={`Switch to ${
                currentLanguage === "en" ? "Hungarian" : "English"
              }`}
              width={32}
              height={32}
              className="rounded-full"
            />
          </button>
        </Link>
      )}
    </div>
  );
}
