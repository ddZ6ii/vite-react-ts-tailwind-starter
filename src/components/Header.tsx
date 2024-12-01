import { GoSun } from "react-icons/go"
import { IoMoon } from "react-icons/io5"
import { useThemeContext } from "contexts/Theme"

export default function Header() {
  const { theme, changeTheme } = useThemeContext()
  const isDarkTheme = theme === "dark"
  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    changeTheme(isDarkTheme ? "light" : "dark")
  }
  return (
    <header className="sticky top-0 p-4 text-right">
      <button
        type="button"
        title={`Toggle ${isDarkTheme ? "light" : "dark"} mode`}
        className="rounded-full p-2 text-xl text-secondary outline outline-2 outline-secondary transition-colors hover:bg-secondary hover:text-primary focus-visible:bg-secondary focus-visible:text-primary"
        onClick={handleClick}
      >
        {isDarkTheme ? (
          <GoSun aria-label="Toggle light mode" />
        ) : (
          <IoMoon aria-label="Toggle dark mode" />
        )}
      </button>
    </header>
  )
}
