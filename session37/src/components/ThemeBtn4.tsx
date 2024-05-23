import React, { useState, createContext, ReactNode } from 'react';

interface ThemeContextType {
  color: string;
  toggleColor: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [color, setColor] = useState<string>('blue');

  const toggleColor = () => {
    setColor((prevColor) => (prevColor === 'blue' ? 'red' : 'blue'));
  };

  return (
    <ThemeContext.Provider value={{ color, toggleColor }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
