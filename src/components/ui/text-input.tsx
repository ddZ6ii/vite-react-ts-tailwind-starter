import { twMerge } from 'tailwind-merge'

type TextInputProps = React.ComponentPropsWithoutRef<'input'> & {
  name: string
}

export default function TextInput({
  name,
  className,
  ...restProps
}: TextInputProps) {
  return (
    <div className="relative">
      <input
        placeholder=" "
        {...restProps}
        id={name}
        className={twMerge(
          'peer outline-muted-foreground focus-visible:outline-accent rounded-md bg-transparent p-4 outline',
          className,
        )}
      />

      <label
        htmlFor={name}
        className={
          'peer-focus-visible:text-accent text-foreground peer-focus-visible:bg-background peer-[:not(:placeholder-shown)]:bg-background peer-placeholder-shown:text-muted-foreground absolute top-0 left-0 z-10 translate-x-2 translate-y-2/3 px-1 transition-transform peer-focus-visible:translate-x-1 peer-focus-visible:-translate-y-1/2 peer-[:not(:placeholder-shown)]:translate-x-1 peer-[:not(:placeholder-shown)]:-translate-y-1/2'
        }
      >
        {name}
      </label>
    </div>
  )
}
