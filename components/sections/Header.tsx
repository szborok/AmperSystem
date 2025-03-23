"use client";

import { useState, useEffect } from "react";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import { companyInfo } from "../../data/companyInfo";
import { useLanguage } from "../LanguageContext";
import { useTranslation } from "../../translations/index";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeSwitch } from "../ThemeSwitch";

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation(language);

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
    { name: t("header.header2"), href: "#about" },
    { name: t("header.header3"), href: "#services" },
    { name: t("header.header4"), href: "#pricing" },
    { name: t("header.header5"), href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 80; // Adjust this value based on your header height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "hu" : "en");
  };

  return (
    <header className="bg-orange/10 dark:bg-background/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="container py-2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <a
            href="#"
            onClick={(e) => handleNavClick(e, "#")}
            className="flex items-center"
          >
            <Image
              src={companyInfo.images.logo || "/placeholder.svg"}
              alt={companyInfo.name}
              width={40}
              height={40}
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-2 text-xl font-bold text-orange hidden md:inline">
              {companyInfo.name}
            </span>
          </a>
          <div className="hidden md:block">
            <ThemeSwitch />
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`text-foreground hover:text-orange transition-colors ${
                activeSection === item.href?.slice(1)
                  ? "text-orange font-semibold"
                  : ""
              }`}
            >
              {item.name}
            </a>
          ))}
          <button
            onClick={toggleLanguage}
            className="text-foreground hover:text-orange transition-colors"
          >
            {language === "en" ? "HU" : "EN"}
          </button>
        </nav>
        <div className="md:hidden flex items-center space-x-2">
          <button
            onClick={toggleLanguage}
            className="text-foreground hover:text-orange transition-colors"
          >
            {language === "en" ? "HU" : "EN"}
          </button>
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="p-2 rounded-full bg-muted text-muted-foreground hover:text-orange transition-colors"
                aria-label="Toggle mobile menu"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full sm:max-w-full">
              <div className="flex items-center justify-between mb-8 py-2">
                <div className="flex items-center">
                  <Image
                    src={companyInfo.images.logo || "/placeholder.svg"}
                    alt={companyInfo.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <span className="text-2xl font-bold text-orange">
                    {companyInfo.name}
                  </span>
                </div>
                <button className="p-2 rounded-full bg-muted text-muted-foreground hover:text-orange transition-colors">
                  <X className="h-10 w-10" />
                </button>
              </div>
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-lg font-medium text-foreground hover:text-orange transition-colors ${
                      activeSection === item.href?.slice(1)
                        ? "text-orange font-semibold"
                        : ""
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
              <div className="mt-8 flex items-center justify-between">
                <span className="text-sm font-medium">Theme</span>
                <ThemeSwitch />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
