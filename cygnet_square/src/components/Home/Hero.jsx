function Hero() {
  return (
    <section className="bg-[#E0F2F1] px-12 pt-16 pb-12 min-h-[520px] flex flex-col justify-between" data-aos="fade-up">

      <div className="max-w-2xl">
        <span className="text-[11px] tracking-widest uppercase text-[#D4AF37] font-medium">
          Empowered Women. Inclusive Communities.
        </span>

        <h1 className="text-5xl font-medium leading-tight text-[#085041] mt-4 mb-6 tracking-tight">
          Where women and communities come to grow.
        </h1>

        <p className="text-base text-[#0F6E56] leading-relaxed mb-8 max-w-lg">
          Inclusive networking, capacity-building workshops, and access to
          information that drives social and economic growth — for women who
          deserve more.
        </p>

        <div className="flex gap-3 items-center flex-wrap">
          <a
            href="#"
            className="bg-[#D4AF37] text-white text-sm font-medium px-6 py-3 rounded-lg"
          >
            Join the community
          </a>
          <a
            href="#"
            className="text-[#085041] text-sm font-medium border-b border-[#0F6E56] pb-0.5"
          >
            Learn more →
          </a>
        </div>
      </div>

      <div className="flex gap-8 mt-12 pt-8 border-t border-[#0F6E56]/25 flex-wrap">
        <div>
          <p className="text-4xl font-medium text-[#085041]">500+</p>
          <p className="text-xs text-[#0F6E56] uppercase tracking-widest mt-1">Active participants</p>
        </div>
        <div className="w-px bg-[#0F6E56]/25" />
        <div>
          <p className="text-4xl font-medium text-[#085041]">BIPOC</p>
          <p className="text-xs text-[#0F6E56] uppercase tracking-widest mt-1">Women centered</p>
        </div>
        <div className="w-px bg-[#0F6E56]/25" />
        <div>
          <p className="text-4xl font-medium text-[#085041]">3 Pillars</p>
          <p className="text-xs text-[#0F6E56] uppercase tracking-widest mt-1">Network · Learn · Access</p>
        </div>
      </div>

    </section>
  )
}

export default Hero