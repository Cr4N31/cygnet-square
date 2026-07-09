import right_img from '/assets/imgs/img3.webp'
function Features() {
  const stats = [
    { icon: 'ti-users', label: 'Participants', value: '500+' },
    { icon: 'ti-calendar-event', label: 'Programs run', value: '25+' },
    { icon: 'ti-building-community', label: 'Communities served', value: '10+' },
    { icon: 'ti-trending-up', label: 'Growth YoY', value: '↑ 40%' },
  ]

  return (
    <section className="bg-base rounded-t-xl p-10 grid md:grid-cols-2 grid-cols-1 gap-10 items-center">

      {/* Left — image + mini chart */}
      <div className="rounded-xl overflow-hidden bg-base min-h-[360px] relative flex flex-col justify-end">
        <picture>
          <source type="image/webp" srcSet="/assets/imgs/img3.webp" />
          <img
            src={right_img}
            alt="Cygnet Square community members"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
        {/* mini chart card overlay */}
        <div className="relative bg-white/50 backdrop-blur-sm shadow-md m-5 rounded-lg p-4">
          <p className="text-xs font-medium text-base-dark mb-3">Program growth</p>
          <div className="flex items-end gap-2 h-14">
            {[30, 50, 72, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  background: i === 0 ? 'var(--accent-light)' : i === 3 ? 'var(--base-dark)' : 'var(--gold)',
                }}
              />
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            {['2021','2022','2023','2024'].map(y => (
              <span key={y} className="flex-1 text-[10px] text-base-mid text-center">{y}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Right — copy + stats */}
      <div  data-aos="fade-up">
        <span className="text-[11px] tracking-widest uppercase text-gold font-medium border border-gold px-3 py-1 rounded-full">
          Community impact
        </span>

        <h2 className="text-3xl font-medium text-gold leading-snug mt-4 mb-3 tracking-tight">
          Building resilience through connection and capacity.
        </h2>

        <p className="text-sm text-white/60 leading-relaxed mb-6">
          By combining a supportive, community-driven approach with modern tools, we empower women to build independent, safe and financially secure lives
          while fostering meaningful connections that promote long-term economic stability.
        </p>

        <div className="grid grid-cols-2 gap-2.5">
          {stats.map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-white/[0.07] border border-white/10 rounded-lg p-4"
            >
              <i className={`ti ${icon} text-gold-dark text-lg mb-2 block`} aria-hidden="true" />
              <p className="text-[11px] text-accent-light uppercase tracking-wider mb-1">{label}</p>
              <p className="text-2xl font-medium text-accent">{value}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Features