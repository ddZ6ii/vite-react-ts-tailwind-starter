import { useEffect, useMemo } from 'react'

import { useSavedPreference } from '@/hooks'
import { ThemeContext } from '@/store'
import { type Theme } from '@/types'
import { getUserPreference } from '@/utils'

export default function ThemeProvider({ children }: React.PropsWithChildren) {
  const [theme, changeTheme] = useSavedPreference<Theme>(
    getUserPreference(),
    '__theme',
  )

  useEffect(() => {
    const htmlEl = document.querySelector('html')
    if (!htmlEl) return
    const isDark = theme === 'dark'
    htmlEl.classList.toggle('dark', isDark)
  }, [theme])

  const themeContextValue = useMemo(
    () => ({ theme, changeTheme }),
    [theme, changeTheme],
  )

  return <ThemeContext value={themeContextValue}>{children}</ThemeContext>
}
