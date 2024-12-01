import { useState } from "react"

export default function Input() {
  const [email, setEmail] = useState("")
  return (
    <div className="mx-auto mt-8 grid w-1/2 max-w-[480px] place-content-center rounded-xl p-8 shadow-xl hover:shadow-accent/20">
      <div className="relative">
        <input
          id="email"
          type="email"
          className="peer rounded-md bg-transparent p-4 outline outline-2 outline-secondary focus-visible:outline-accent"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
          }}
        />
        <label
          htmlFor="email"
          className="absolute left-0 top-0 translate-x-2 translate-y-2/3 bg-primary px-1 text-slate-400 transition-transform peer-focus:text-accent peer-focus-visible:-translate-y-1/2 peer-focus-visible:translate-x-1"
        >
          Email
        </label>
      </div>
    </div>
  )
}
