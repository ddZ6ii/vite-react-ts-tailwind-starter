import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

const headingVariants = cva('', {
  variants: {
    as: {
      h1: 'text-2xl font-bold text-center ',
      h2: 'text-xl font-bold',
      h3: '',
      h4: '',
      h5: '',
      h6: '',
    },
  },
  defaultVariants: {
    as: 'h1',
  },
})

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as: HeadingTag
  }
export default function Heading({ as, className, ...restProps }: HeadingProps) {
  const Tag = as
  return (
    <Tag className={cn(headingVariants({ as, className }))} {...restProps} />
  )
}
