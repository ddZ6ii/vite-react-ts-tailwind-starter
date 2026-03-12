import { use } from 'react'

import { ThemeContext } from '@/store'

export default function useThemeContext() {
  const themeContext = use(ThemeContext)
  if (themeContext === null) {
    throw new Error('ThemeContext was used outside its provider.')
  }
  return themeContext
}
