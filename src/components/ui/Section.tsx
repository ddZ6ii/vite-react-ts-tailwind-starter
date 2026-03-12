import { twMerge } from 'tailwind-merge'

const BASE_STYLE =
  'group mx-auto mt-8 w-1/2 max-w-[480px] rounded-xl p-8 hover:shadow-accent/10 shadow-xl space-y-4 transition-shadow dark:shadow-accent/20 dark:hover:shadow-accent/30 dark:bg-foreground/2'

export default function Section({
  className = '',
  ...restProps
}: React.ComponentProps<'section'>) {
  return <section className={twMerge(BASE_STYLE, className)} {...restProps} />
}
