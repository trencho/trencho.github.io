import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useState,
} from 'react';

interface ThemeContextProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = (): ThemeContextProps => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState(() => {
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

  const toggleDarkMode = useCallback(() => {
    setDarkMode((prevMode) => {
      localStorage.setItem('darkMode', JSON.stringify(!prevMode));
      return !prevMode;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      <div className={darkMode ? 'dark' : ''}>{children}</div>
    </ThemeContext.Provider>
  );
};
