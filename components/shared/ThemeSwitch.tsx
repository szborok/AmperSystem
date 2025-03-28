"use client";

import { useTheme } from "next-themes";
import { Sun, Moon, Laptop } from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState, useEffect } from "react";

export function ThemeSwitch() {
  const { setTheme, theme } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState<string | undefined>(
    undefined
  ); // initially undefined
  const [systemDarkMode, setSystemDarkMode] = useState<boolean>(false);

  // Check if the system is in dark mode
  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setSystemDarkMode(true);
    } else {
      setSystemDarkMode(false);
    }
  }, []);

  // Use effect to ensure theme is only set client-side
  useEffect(() => {
    setSelectedTheme(theme || "system");
  }, [theme]);

  useEffect(() => {
    if (selectedTheme) {
      setTheme(selectedTheme);
    }
  }, [selectedTheme, setTheme]);

  if (selectedTheme === undefined) {
    return null; // Render nothing until the theme is determined
  }

  const isDarkMode = selectedTheme === "dark";
  const isAutoMode = selectedTheme === "system" && systemDarkMode;

  return (
    <ToggleGroup
      type="single"
      value={selectedTheme}
      onValueChange={(value) => value && setSelectedTheme(value)}
      className="flex gap-2"
    >
      <ToggleGroupItem
        value="light"
        aria-label="Light Mode"
        className={`flex items-center gap-2 px-8 py-2 rounded-md transition-colors 
          ${
            selectedTheme === "light"
              ? "bg-orange text-white"
              : isDarkMode || isAutoMode
              ? "bg-gray-600 text-gray-300" // Darker inactive button in dark mode or when system is in dark mode
              : "bg-gray-200 text-gray-700"
          }
        `}
      >
        <Sun className="h-5 w-5" />
        <span>Light</span>
      </ToggleGroupItem>

      <ToggleGroupItem
        value="dark"
        aria-label="Dark Mode"
        className={`flex items-center gap-2 px-8 py-2 rounded-md transition-colors 
          ${
            selectedTheme === "dark"
              ? "bg-orange text-white"
              : isDarkMode || isAutoMode
              ? "bg-gray-600 text-gray-300" // Darker inactive button in dark mode or when system is in dark mode
              : "bg-gray-200 text-gray-700"
          }
        `}
      >
        <Moon className="h-5 w-5" />
        <span>Dark</span>
      </ToggleGroupItem>

      <ToggleGroupItem
        value="system"
        aria-label="Auto (System)"
        className={`flex items-center gap-2 px-8 py-2 rounded-md transition-colors 
          ${
            selectedTheme === "system"
              ? "bg-orange text-white"
              : isDarkMode || isAutoMode
              ? "bg-gray-600 text-gray-300" // Darker inactive button in dark mode or when system is in dark mode
              : "bg-gray-200 text-gray-700"
          }
        `}
      >
        <Laptop className="h-5 w-5" />
        <span>Auto</span>
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
