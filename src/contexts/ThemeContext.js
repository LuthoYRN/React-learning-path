import React, { createContext, useContext,useState } from "react";

const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const darkTheme = {
    background: "#5c5c5c",
    text: "#fff",
  };

  const lightTheme = {
    background: "#d8ddf1",
    text: "#222",
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{ isDarkTheme, darkTheme, lightTheme, toggleTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
export const useTheme = () => useContext(ThemeContext);
