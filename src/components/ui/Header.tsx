import { cn } from '@/utils'

const BASE_STYLE = 'sticky top-0 p-4 text-right'

export default function Header({
  children,
  className = '',
  ...restProps
}: React.ComponentProps<'header'>) {
  return (
    <header className={cn(BASE_STYLE, className)} {...restProps}>
      {children}
    </header>
  )
}
