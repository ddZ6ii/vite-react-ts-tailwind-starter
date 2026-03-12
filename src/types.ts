import type { ButtonVariant } from '@/components/ui'

type Action = {
  id: number
  label: string
  variant: ButtonVariant['variant']
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

type Nullable<T> = T | null

type Theme = 'light' | 'dark'

export type { Action, Nullable, Theme }
