import React, {
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { ThemeContext } from './ThemeContext';

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
    // No browser APIs during the prerender build; default to light there.
    if (typeof window === 'undefined') {
      return false;
    }
    try {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        return JSON.parse(savedTheme) === true;
      }
    } catch (error) {
      console.error('Error parsing saved theme:', error);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // Mirror the theme onto <html> so root-level styles (the page scrollbar's
  // ::-webkit-scrollbar pseudo-elements) can react to dark mode — a `.dark`
  // class on the inner wrapper div alone never reaches the document scrollbar.
  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => {
      localStorage.setItem('darkMode', JSON.stringify(!prevMode));
      return !prevMode;
    });
  }, []);

  const value = useMemo(
    () => ({ darkMode, toggleDarkMode }),
    [darkMode, toggleDarkMode],
  );

  return (
    <ThemeContext.Provider value={value}>
      <div className={darkMode ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};
