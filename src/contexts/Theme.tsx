import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react"

/**
 * React Context API is used to handle the application's theme.
 *
 * On first render, theme is loaded from session storage (if any, to retrieve a previously stored value in case of page refresh, or fallbacks to user's preference (set through an operating system setting or a user agent setting) via the media query `window.matchMedia("(prefers-color-scheme: dark)")`.
 *
 * Then, and Effect is used to handle the selected theme for initial and subsequent renders to:
 *  1. apply the corresponding class to the `body` element
 *  2. set the state for the entire application (to be shared via context to any component)
 *  3. save it to session storage
 *
 * Theme switching with these approach relies on appending / removing a class directly from the `body` HTML (top hierarchy) element, and the use of CSS variables (App.css file) instantiated from Tailwind config. file to be used as custom Tailwind classnames.
 *
 * 🚀 This approach for handling theme provides several benefits:
 *  - it does not trigger the whole app to re-renders
 *  - it can be used to handle custom themes besides "light" and "dark"
 *
 * 📕 Inspired by:
 * https://www.youtube.com/watch?v=UHciHtsuFnw
 * https://dev.to/franklin030601/using-dark-mode-in-your-react-app-5364
 */

type Theme = "light" | "dark"

interface ThemeContextValue {
  theme: Theme
  changeTheme: (newTheme: Theme) => void
}

interface ThemeProviderProps {
  children: ReactNode
}

const STORAGE_KEY = "theme"

function getUserPreference(): Theme {
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches
  return isDarkMode ? "dark" : "light"
}

function initTheme(): Theme {
  const userPreference =
    (sessionStorage.getItem(STORAGE_KEY) as Theme | null) ?? getUserPreference()
  return userPreference
}

export const ThemeContext = createContext<ThemeContextValue | null>(null)

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(initTheme)
  const changeTheme = useCallback((newTheme: Theme): void => {
    setTheme(newTheme)
  }, [])

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
    sessionStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  const contextValue = { theme, changeTheme }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const themeContext = useContext(ThemeContext)
  if (themeContext === null) {
    throw new Error("ThemeContext was used outside its provider.")
  }
  return themeContext
}
