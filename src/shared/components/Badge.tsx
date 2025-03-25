import { useState } from "react"
import { FiBell } from "react-icons/fi"
import { twMerge } from "tailwind-merge"
import { Button } from "@/shared/components/ui"
import { Section } from "@/shared/layouts"

export default function Badge() {
  const [count, setCount] = useState(0)
  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1)
  }
  return (
    <Section className="grid place-content-center">
      <NotifyButton onClick={handleClick}>
        <FiBell focusable={false} aria-hidden={true} className="mt-1" />
        {count > 0 && (
          <NotificationPill>
            <span>{count}</span>
          </NotificationPill>
        )}
      </NotifyButton>
    </Section>
  )
}

function NotifyButton({
  children,
  className = "",
  ...restProps
}: React.ComponentProps<typeof Button>) {
  const baseStyle =
    "text-accent-500 relative aspect-square grid w-fit text-5xl shadow-lg shadow-black/10 rounded-full"
  return (
    <Button className={twMerge(baseStyle, className)} {...restProps}>
      {children}
    </Button>
  )
}

function NotificationPill({
  children,
  ...restProps
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className="text-primary-500 absolute top-0 right-0 grid size-8 animate-pulse place-content-center rounded-full bg-red-700 p-2 text-lg font-bold"
      {...restProps}
    >
      {children}
    </div>
  )
}
