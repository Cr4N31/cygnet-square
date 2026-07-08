const stats = [
  { value: '2024', label: 'Founded', accent: true },
  { value: '500+', label: 'Women supported', accent: false },
  { value: '3', label: 'Core pillars', accent: false },
  { value: '∞', label: 'Connections made', accent: true },
]

function WhyWeStarted() {
  return (
    <section className="bg-base px-12 py-16 grid md:grid-cols-[1.1fr_1fr] grid-cols-1 gap-14 items-center" data-aos="fade-up">

      {/* Left — copy */}
      <div>
        <h2 className="text-3xl font-normal heading tracking-tight mb-2">
          Why we <em className="italic text-gold">started.</em>
        </h2>
        <div className="w-10 h-px bg-gold my-5" />

        <p className="text-sm text-accent-light opacity-75 leading-loose mb-5">
          Lorem ipsum dolor sit amet,{' '}
          <strong className="text-on-base">
            consectetur adipiscing elit sed do eiusmod
          </strong>{' '}
          tempor incididunt ut labore et dolore magna aliqua ut enim ad minim
          veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.
        </p>

        <p className="text-sm text-accent-light opacity-75 leading-loose">
          Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
          cupidatat non proident, sunt in culpa qui officia deserunt mollit.
        </p>
      </div>

      {/* Right — stats grid */}
      <div className="grid grid-cols-2 gap-3.5">
        {stats.map(({ value, label, accent }) => (
          <div
            key={label}
            className="bg-white/[0.06] border border-white/10 rounded-xl p-6 text-center"
          >
            <p className={`text-3xl font-medium leading-none ${accent ? 'text-gold' : 'text-on-base'}`}>
              {value}
            </p>
            <p className="text-[11px] text-accent-light opacity-60 uppercase tracking-wider mt-2">
              {label}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default WhyWeStarted