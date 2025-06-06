"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { companyInfo } from "@/data/companyInfo";
import { useLanguage } from "../shared/LanguageContext"; // Fixed the import path
import { LanguageSwitcher } from "../shared/LanguageSwitcher"; // Import LanguageSwitcher
import { useTheme } from "next-themes";
import { useLogoTheme } from "@/hooks/use-logo-theme"; // Import the custom hook

export default function Header({ translations }: { translations: any }) {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme } = useTheme(); // Get the current theme
  const { language } = useLanguage(); // Get the current language from the context
  const logoShouldBeDark = useLogoTheme(); // Use the custom hook to get the logo theme

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["header1", "header2", "header3", "header4", "header5"];
      let current = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!mounted) return null;

  const navItems = [
    { name: translations.header.header2, href: "#about" },
    { name: translations.header.header3, href: "#services" },
    { name: translations.header.header4, href: "#pricing" },
    { name: translations.header.header5, href: "#contact" },
  ];

  return (
    <header className="bg-orange/10 dark:bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center">
            <div className="relative">
              <Image
                src={companyInfo.images.headerLogo} // Use your standard logo here
                alt={companyInfo.name}
                width={60}
                height={60}
                className={logoShouldBeDark ? "invert" : ""} // Apply the invert class if the theme is dark
              />
            </div>
            <span className="ml-2 text-xl font-bold text-orange hidden md:inline">
              {companyInfo.name}
            </span>
          </a>
        </div>

        {/* Navigation items placed on the right */}
        <nav className="hidden md:flex items-center space-x-6 ml-auto">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-foreground hover:text-orange transition-colors ${
                activeSection === item.href?.slice(1)
                  ? "text-orange font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* LanguageSwitcher is placed as the last element in the row */}
        <div className="flex items-center ml-4">
          <LanguageSwitcher /> {/* Language switcher is on the right side */}
        </div>
      </div>
    </header>
  );
}
