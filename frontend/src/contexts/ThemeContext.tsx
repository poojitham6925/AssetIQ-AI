import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { ReactNode } from "react";
import { resolveTheme, ThemeContext, themeStorageKey } from "../styles/theme";
import type { ThemePreference } from "../styles/theme";

function getInitialPreference(): ThemePreference {
  const stored = window.localStorage.getItem(themeStorageKey);
  return stored === "light" || stored === "dark" || stored === "system"
    ? stored
    : "system";
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] =
    useState<ThemePreference>(getInitialPreference);
  const [resolvedTheme, setResolvedTheme] = useState(() => resolveTheme(preference));

  const setPreference = useCallback((nextPreference: ThemePreference) => {
    window.localStorage.setItem(themeStorageKey, nextPreference);
    setPreferenceState(nextPreference);
  }, []);

  useEffect(() => {
    const updateTheme = () => setResolvedTheme(resolveTheme(preference));
    updateTheme();
    document.documentElement.dataset.theme = resolveTheme(preference);

    if (preference !== "system") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    mediaQuery.addEventListener("change", updateTheme);
    return () => mediaQuery.removeEventListener("change", updateTheme);
  }, [preference]);

  const value = useMemo(
    () => ({ preference, resolvedTheme, setPreference }),
    [preference, resolvedTheme, setPreference],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}
