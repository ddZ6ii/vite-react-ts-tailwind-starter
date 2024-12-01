import { FiUser } from "react-icons/fi"
import { FaArrowRight } from "react-icons/fa"

export default function Follow() {
  return (
    <div className="group mx-auto mt-8 flex w-1/2 max-w-[480px] flex-wrap items-center justify-between gap-4 rounded-xl p-8 shadow-xl hover:shadow-accent/20">
      <div className="flex flex-wrap items-center gap-2">
        <div className="w-fit rounded-full bg-secondary p-4">
          <FiUser
            focusable={false}
            aria-hidden={true}
            className="text-2xl text-primary"
          />
        </div>
        <p className="invisible opacity-0 transition-all group-hover:visible group-hover:opacity-100">
          @tomisloading
        </p>
      </div>
      <button
        type="button"
        className="group/follow active:tr flex items-center gap-2 rounded-xl bg-accent-500 px-4 py-3 font-bold text-neutral-100 transition-all hover:bg-accent-600 active:translate-y-1"
      >
        Follow{" "}
        <span className="text-secondary-100 mt-1 transition-transform group-hover/follow:-rotate-45 group-active/follow:rotate-0">
          <FaArrowRight focusable={false} aria-hidden={true} />
        </span>
      </button>
    </div>
  )
}
