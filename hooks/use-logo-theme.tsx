import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export const useLogoTheme = () => {
  const { theme } = useTheme(); // Get the current theme
  const [isSystemDark, setIsSystemDark] = useState<boolean>(false);

  // Detect the system's dark mode preference
  useEffect(() => {
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setIsSystemDark(systemPrefersDark);

    // Listener to update when system preference changes (e.g., user switches theme)
    const handleChange = (e: MediaQueryListEvent) => {
      setIsSystemDark(e.matches);
    };
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", handleChange);

    // Cleanup the listener
    return () => {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .removeEventListener("change", handleChange);
    };
  }, []);

  // Determine whether the logo should be dark or not
  const logoShouldBeDark =
    theme === "dark" || (theme === "system" && isSystemDark);

  return logoShouldBeDark;
};
