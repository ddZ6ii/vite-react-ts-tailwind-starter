import { ArrowRightIcon } from 'lucide-react'

import { Section, Button } from '@/components/ui'
import { UserProfile } from '@/components'

export default function Follow() {
  return (
    <Section className="flex flex-wrap items-center justify-between gap-4">
      <UserProfile />

      <Button
        variant="accent"
        className="group/follow rounded-md transition-all active:translate-y-1"
      >
        Follow
        <ArrowRightIcon
          focusable={false}
          aria-hidden={true}
          className="mt-1 text-neutral-100 transition-transform group-hover/follow:-rotate-45 group-active/follow:rotate-0"
        />
      </Button>
    </Section>
  )
}
