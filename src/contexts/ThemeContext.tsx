
import React, { createContext, useContext, useState } from 'react';
import { colors1, colors2, colors3, colors4 } from '@/styles/constants-styles';

export type ThemeColors = typeof colors1;

interface ThemeContextType {
  currentTheme: ThemeColors;
  setTheme: (theme: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeColors>(colors1);

  const setTheme = (themeNumber: number) => {
    switch(themeNumber) {
      case 1:
        setCurrentTheme(colors1);
        break;
      case 2:
        setCurrentTheme(colors2);
        break;
      case 3:
        setCurrentTheme(colors3);
        break;
      case 4:
        setCurrentTheme(colors4);
        break;
      default:
        setCurrentTheme(colors1);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
