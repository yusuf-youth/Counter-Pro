import React, { createContext, useContext, useEffect } from "react";
import useLocalStorageState from "../hooks/useLocalStorageState";
import { STORAGE_KEYS } from "../script/constants";

const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useLocalStorageState(
    STORAGE_KEYS.THEME,
    false
  );

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDarkTheme);
    localStorage.setItem("theme", isDarkTheme);
  }, [isDarkTheme]);

  const toggleTheme = () => setDarkTheme((prev) => !prev);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
