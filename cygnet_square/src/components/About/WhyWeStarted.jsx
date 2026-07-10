const stats = [
  { value: '2024', label: 'Founded', accent: true },
  { value: '500+', label: 'Women supported', accent: false },
  { value: '3', label: 'Core pillars', accent: false },
  { value: '∞', label: 'Connections made', accent: true },
]

function WhyWeStarted() {
  return (
    <section className="bg-mist px-12 py-16 grid md:grid-cols-[1.1fr_1fr] grid-cols-1 gap-14 items-center" data-aos="fade-up">

      {/* Left — copy */}
      <div>
        <h2 className="text-3xl text-accent font-normal heading tracking-tight mb-2">
          Why we <em className="italic text-gold">started.</em>
        </h2>
        <div className="w-10 h-px bg-gold my-5" />

        <p className="text-lg text-[#0C2E26] opacity-75 leading-loose mb-5">
          Cygnet Square was founded on the belief that{' '}
          <strong className="text-gold">
            no woman should face life's challenges alone.
          </strong>{' '}
          Across many communities, women continue to encounter barriers to opportunity, 
          limited access to essential resources, and a lack of supportive networks that enable personal and economic growth. 
          We recognized the need for a space where women could connect, learn, and uplift one another.
        </p>

        <p className="text-lg text-[#0C2E26] opacity-75 leading-loose">
          Our journey began with a simple purpose: to create an inclusive community that equips women with practical skills, 
          meaningful relationships, and access to opportunities that foster confidence, independence, and long-term success.
          Today, that purpose continues to inspire everything we do as we work toward building stronger women, stronger families, and stronger communities.
        </p>
      </div>

      {/* Right — stats grid */}
      <div className="grid grid-cols-2 gap-3.5">
        {stats.map(({ value, label, accent }) => (
          <div
            key={label}
            className="bg-white/[0.06] border border-white/10 rounded-xl p-6 text-center"
          >
            <p className={`text-3xl text-[#0C2E3A] font-medium leading-none ${accent ? 'text-gold' : 'text-[#0C2E26]'}`}>
              {value}
            </p>
            <p className="text-[11px] text-[#0C2E3A]  opacity-60 uppercase tracking-wider mt-2">
              {label}
            </p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default WhyWeStarted