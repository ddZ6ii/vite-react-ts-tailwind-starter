import Badge from "components/Badge"
import Follow from "components/Follow"
import Header from "components/Header"
import TheBasics from "components/TheBasics"
import { ThemeProvider } from "contexts/Theme"
import "./App.css"
import Input from "components/Input"

function App() {
  return (
    <ThemeProvider>
      <div className="relative min-h-dvh p-4">
        <Header />
        <main>
          <h1 className="text-center text-2xl font-bold">
            React + TailwindCSS
          </h1>
          <TheBasics />
          <Follow />
          <Badge />
          <Input />
        </main>
      </div>
    </ThemeProvider>
  )
}

export default App
