import { cva, type VariantProps } from 'class-variance-authority'
import type React from 'react'

import { cn } from '@/utils'

const pillVariants = cva('inline-flex items-center gap-2 transition-colors', {
  variants: {
    variant: {
      primary: 'bg-foreground text-background hover:bg-foreground/80',
      ghost: 'hover:bg-muted',
      accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
      destructive: 'text-destructive-foreground bg-destructive',
    },
    size: {
      sm: 'size-6 text-[10px] font-bold',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
})

type PillProps = React.ComponentProps<'div'> & VariantProps<typeof pillVariants>

export default function Pill({
  className,
  variant = 'primary',
  size = 'sm',
  ...restProps
}: PillProps) {
  return (
    <div
      className={cn(pillVariants({ variant, size, className }))}
      {...restProps}
    />
  )
}
