import left_img from "../../../public/assets/imgs/img3.jpg"
function Features() {
  const stats = [
    { icon: 'ti-users', label: 'Participants', value: '500+' },
    { icon: 'ti-calendar-event', label: 'Programs run', value: '25+' },
    { icon: 'ti-building-community', label: 'Communities served', value: '10+' },
    { icon: 'ti-trending-up', label: 'Growth YoY', value: '↑ 40%' },
  ]

  return (
    <section className="bg-[#085041] rounded-t-xl p-10 grid md:grid-cols-2 grid-cols-1 gap-10 items-center" data-aos="fade-up">

      {/* Left — image + mini chart */}
      <div className="rounded-xl overflow-hidden bg-[#0F6E56] min-h-[360px] relative flex flex-col justify-end">
        <img
          src={left_img}
          alt="Cygnet Square community members"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* mini chart card overlay */}
        <div className="relative bg-white/50 backdrop-blur-sm shadow-md m-5 rounded-lg p-4">
          <p className="text-xs font-medium text-[#085041] mb-3">Program growth</p>
          <div className="flex items-end gap-2 h-14">
            {[30, 50, 72, 100].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t"
                style={{
                  height: `${h}%`,
                  background: i === 0 ? '#E0F2F1' : i === 3 ? '#085041' : '#D4AF37',
                }}
              />
            ))}
          </div>
          <div className="flex gap-2 mt-1">
            {['2021','2022','2023','2024'].map(y => (
              <span key={y} className="flex-1 text-[10px] text-[#0F6E56] text-center">{y}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Right — copy + stats */}
      <div>
        <span className="text-[11px] tracking-widest uppercase text-[#D4AF37] font-medium border border-[#A07820] px-3 py-1 rounded-full">
          Community impact
        </span>

        <h2 className="text-3xl font-medium text-[#D4AF37] leading-snug mt-4 mb-3 tracking-tight">
          Building resilience through connection and capacity.
        </h2>

        <p className="text-sm text-[#E0F2F1]/75 leading-relaxed mb-6">
          We bring together newcomer women, seniors, BIPOC communities, and
          low-income families — giving them the tools, networks, and knowledge
          to thrive socially and economically.
        </p>

        <div className="grid grid-cols-2 gap-2.5">
          {stats.map(({ icon, label, value }) => (
            <div
              key={label}
              className="bg-white/[0.07] border border-white/10 rounded-lg p-4"
            >
              <i className={`ti ${icon} text-[#A07820] text-lg mb-2 block`} aria-hidden="true" />
              <p className="text-[11px] text-[#E0F2F1]/60 uppercase tracking-wider mb-1">{label}</p>
              <p className="text-2xl font-medium text-[#D4AF37]">{value}</p>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Features