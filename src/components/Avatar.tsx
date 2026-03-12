import { UserRoundIcon } from 'lucide-react'

export default function Avatar() {
  return (
    <div className="bg-foreground w-fit rounded-full p-4">
      <UserRoundIcon
        focusable={false}
        aria-hidden={true}
        className="text-background text-2xl"
      />
    </div>
  )
}
