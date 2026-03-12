import { Badge, Contact, Follow, TheBasics } from '@/components'
import { Heading } from '@/components/ui'
import { useCount } from '@/hooks'

export default function MainContent() {
  const { count, setCount } = useCount(0)
  const handleClick = () => {
    setCount((c) => c + 1)
  }
  return (
    <main>
      <Heading as="h1">React + TypeScript + TailwindCSS</Heading>
      <TheBasics />
      <Follow />
      <Badge count={count} onClick={handleClick} />
      <Contact />
    </main>
  )
}
