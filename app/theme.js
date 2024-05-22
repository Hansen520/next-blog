/*
 * @Date: 2024-05-22 16:51:19
 * @Description: description
 */
import { useEffect, useState } from "react";

function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setTheme(darkModeMediaQuery.matches ? "dark" : "light");
    const listener = (event) => {
      console.log(`Dark mode is ${event.matches ? '🌒 on' : '☀️ off'}.`);
      setTheme(event.matches ? "dark" : "light");
    };

    darkModeMediaQuery.addEventListener("change", listener);
    
    return () => {
      darkModeMediaQuery.removeEventListener("change", listener);
    };
  }, []);

  return {
    theme,
    isDarkMode: theme === "dark",
    isLightMode: theme === "light",
  }
}

export default useTheme;
