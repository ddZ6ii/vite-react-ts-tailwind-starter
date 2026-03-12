import { ActionList } from '@/components'
import { Heading, Section, Text } from '@/components/ui'
import { type Action as TAction } from '@/types'

const ACTIONS: TAction[] = [
  {
    id: 1,
    label: 'Subscribe',
    variant: 'ghost',
    onClick: () => {
      alert('Subscribed!')
    },
  },
  {
    id: 2,
    label: 'Notification',
    variant: 'accent',
    onClick: () => {
      alert('Notification sent!')
    },
  },
]

export default function TheBasics() {
  return (
    <Section>
      <Heading as="h2">@TomIsLoading</Heading>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex
        expedita ipsum est quae ab officiis, similique ullam cupiditate
        doloremque odio. Dolorem ad consectetur debitis illo iusto quod minus
        labore.
      </Text>
      <ActionList actions={ACTIONS} />
    </Section>
  )
}
