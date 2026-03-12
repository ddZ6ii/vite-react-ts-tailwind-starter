import { MoonIcon, SunIcon } from 'lucide-react'

import { Button } from '@/components/ui'
import { useThemeContext } from '@/hooks'

export default function ThemeToggle() {
  const { theme, changeTheme } = useThemeContext()
  const isDarkTheme = theme === 'dark'

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (_e) => {
    changeTheme(isDarkTheme ? 'light' : 'dark')
  }

  return (
    <Button
      title={`Toggle ${isDarkTheme ? 'light' : 'dark'} mode`}
      variant="primary"
      size="icon-sm"
      aria-label={`Toggle ${isDarkTheme ? 'light' : 'dark'} mode`}
      onClick={handleClick}
    >
      {isDarkTheme ? <SunIcon /> : <MoonIcon />}
    </Button>
  )
}
