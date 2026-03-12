import { Button } from '@/components/ui'
import type { Action } from '@/types'

type ActionItemProps = React.ComponentProps<'li'> & {
  action: Action
}

export default function ActionItem({ action, ...restProps }: ActionItemProps) {
  return (
    <li {...restProps}>
      <Button
        variant={action.variant}
        className="w-full"
        onClick={action.onClick}
      >
        {action.label}
      </Button>
    </li>
  )
}
