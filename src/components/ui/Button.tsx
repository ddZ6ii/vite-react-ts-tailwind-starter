import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

const buttonVariants = cva(
  'inline-flex cursor-pointer items-center gap-2 transition-colors p-2 font-bold',
  {
    variants: {
      variant: {
        primary: 'bg-foreground text-background hover:bg-foreground/80',
        ghost: 'hover:bg-muted dark:hover:text-background',
        accent: 'bg-accent text-accent-foreground hover:bg-accent/60',
      },
      size: {
        sm: 'text-sm',
        'icon-sm': 'p-1 rounded-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'sm',
    },
  },
)

type ButtonProps = React.ComponentProps<'button'> & ButtonVariant

export type ButtonVariant = VariantProps<typeof buttonVariants>

export default function Button({
  className,
  variant = 'primary',
  size = 'sm',
  ...restProps
}: ButtonProps) {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...restProps}
    />
  )
}
