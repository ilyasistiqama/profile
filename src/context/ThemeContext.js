import { createContext, useContext } from "react";

export const ThemeContext = createContext(null);

// Pakai di komponen: const { isDark, toggleTheme } = useTheme();
export function useTheme() {
  return useContext(ThemeContext);
}
