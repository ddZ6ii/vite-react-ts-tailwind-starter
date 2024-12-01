export default function TheBasics() {
  return (
    <div className="mx-auto mt-8 w-1/2 max-w-[480px] space-y-4 rounded-xl p-8 shadow-xl hover:shadow-accent/20">
      <h2 className="text-xl font-bold">@TomIsLoading</h2>
      <p className="leading-relaxed">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ex
        expedita ipsum est quae ab officiis, similique ullam cupiditate
        doloremque odio. Dolorem ad consectetur debitis illo iusto quod minus
        labore.
      </p>
      <div className="flex justify-between divide-x divide-accent overflow-hidden rounded-xl border border-accent">
        <button
          type="button"
          className="flex-1 bg-accent p-4 font-bold text-neutral-100 transition-colors hover:bg-accent-600"
        >
          Subscribe
        </button>
        <button
          type="button"
          className="flex-1 p-4 font-bold text-accent hover:text-secondary active:bg-indigo-50"
        >
          Notification
        </button>
      </div>
    </div>
  )
}
