// components/ThemeProvider.js
"use client";
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
}
