import { ActionItem } from '@/components'
import { type Action } from '@/types'

type ActionProps = {
  actions: Action[]
}

export default function ActionList({ actions }: ActionProps) {
  return (
    <ul className="divide-accent border-accent flex flex-wrap justify-between divide-x overflow-hidden rounded-xl border">
      {actions.map((action) => (
        <ActionItem key={action.id} className="flex-1" action={action} />
      ))}
    </ul>
  )
}
