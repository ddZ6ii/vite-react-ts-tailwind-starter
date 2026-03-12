import { MainContent, ThemeToggle } from '@/components'
import { Header } from '@/components/ui'
import { ThemeContextProvider } from '@/store'

export default function App() {
  return (
    <ThemeContextProvider>
      <Header>
        <ThemeToggle />
      </Header>
      <MainContent />
    </ThemeContextProvider>
  )
}
