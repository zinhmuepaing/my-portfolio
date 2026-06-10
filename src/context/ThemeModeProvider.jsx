import { createContext, useContext, useState, useEffect, useCallback } from "react";

/**
 * Site "experience" mode — independent of next-themes' light/dark.
 *   'standard'  → the original light portfolio
 *   'brutalist' → the reimagined Neo-Brutalism experience
 */
const ThemeModeContext = createContext({
  mode: "standard",
  setMode: () => {},
  toggleMode: () => {},
});

const STORAGE_KEY = "site-mode";

function readInitialMode() {
  if (typeof window === "undefined") return "standard";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "brutalist" ? "brutalist" : "standard";
  } catch {
    return "standard";
  }
}

/** @type {React.FC<{ children: React.ReactNode }>} */
export function ThemeModeProvider({ children }) {
  const [mode, setModeState] = useState(readInitialMode);

  // Reflect the mode on <html data-mode> and persist it.
  useEffect(() => {
    document.documentElement.dataset.mode = mode;
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      /* ignore quota / privacy-mode errors */
    }
  }, [mode]);

  const setMode = useCallback((next) => {
    setModeState(next === "brutalist" ? "brutalist" : "standard");
  }, []);

  const toggleMode = useCallback(() => {
    setModeState((m) => (m === "brutalist" ? "standard" : "brutalist"));
  }, []);

  return (
    <ThemeModeContext.Provider value={{ mode, setMode, toggleMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
}

/** Read the current experience mode + setters. */
export function useThemeMode() {
  return useContext(ThemeModeContext);
}
