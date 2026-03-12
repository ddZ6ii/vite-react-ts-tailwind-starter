import { BellIcon } from 'lucide-react'

import { Button, Pill, Section } from '@/components/ui'

type BadgeProps = {
  count: number
  onClick: () => void
}

export default function Badge({ count, onClick }: BadgeProps) {
  return (
    <Section className="grid place-content-center">
      <Button
        variant="accent"
        onClick={onClick}
        aria-label={
          count > 0
            ? `${count.toString()} unread notifications`
            : 'Notifications'
        }
        className="relative aspect-square rounded-full shadow-lg shadow-black/10"
      >
        <BellIcon
          focusable={false}
          aria-hidden={true}
          className="mx-auto mt-1"
        />
        {count > 0 && (
          <Pill
            variant="destructive"
            className="absolute top-0 right-0 grid translate-x-1/4 -translate-y-1/4 transform animate-pulse place-content-center rounded-full"
          >
            <span>{count > 99 ? '99+' : count}</span>
          </Pill>
        )}
      </Button>
    </Section>
  )
}
