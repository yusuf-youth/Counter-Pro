import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme !== null) {
      setDarkTheme(storedTheme === "true");
    }
  }, []);

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
