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

  // <html> is where the theme lives, and it is the only place it lives. Every
  // `dark:` utility resolves against it (`@custom-variant dark` in index.css), the
  // scrollbar pseudo-elements need it at the document root, and index.html's
  // pre-paint script puts it there before React runs - so this effect keeps the
  // element in step with the toggle rather than establishing the theme.
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

  // No wrapper div. It existed only to carry `.dark`, which <html> now owns - and
  // keeping it would have made the prerendered markup disagree with the client on
  // hydration, since the prerender always resolves the theme to light.
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
