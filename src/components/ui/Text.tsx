import { twMerge } from 'tailwind-merge'

const BASE_STYLE = 'leading-relaxed'

export default function Text({
  className = '',
  ...restProps
}: React.ComponentProps<'p'>) {
  return <p className={twMerge(BASE_STYLE, className)} {...restProps} />
}
