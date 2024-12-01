import { useState } from "react"
import { FiBell } from "react-icons/fi"

export default function Badge() {
  const [count, setCount] = useState(0)
  return (
    <div className="mx-auto mt-8 grid w-1/2 max-w-[480px] place-content-center rounded-xl p-8 shadow-xl hover:shadow-accent/20">
      <button
        type="button"
        className="relative grid aspect-square w-fit rounded-full px-4 py-3 text-5xl text-accent shadow-lg shadow-black/10"
        onClick={() => {
          setCount(count + 1)
        }}
      >
        <FiBell focusable={false} aria-hidden={true} className="mt-1" />
        {count !== 0 && (
          <div className="absolute right-0 top-0 grid size-8 animate-pulse place-content-center rounded-full bg-red-700 p-2 text-lg font-bold text-neutral-100">
            <span>{count}</span>
          </div>
        )}
      </button>
    </div>
  )
}
