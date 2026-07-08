import heroBg from '../../../public/assets/imgs/hero.png'

function Hero() {
  return (
    <section className="bg-base px-6 sm:px-10 lg:px-12 pt-16 pb-12 min-h-[520px]" data-aos="fade-up">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-center">
        <div className="max-w-2xl">
          <span className="text-[11px] tracking-widest uppercase text-gold font-medium">
            Empowered Women. Inclusive Communities.
          </span>

          <h1 className="text-5xl heading leading-tight mt-4 mb-6 tracking-tight">
            Where women and communities come to grow.
          </h1>

          <p className="text-white/60 leading-relaxed mb-8 max-w-lg">
            Inclusive networking, capacity-building workshops, and access to
            information that drives social and economic growth — for women who
            deserve more.
          </p>

          <div className="flex gap-3 items-center flex-wrap">
            <a
              href="#"
              className="bg-gold text-on-base text-sm font-medium px-6 py-3 rounded-lg"
            >
              Join the community
            </a>
            <a
              href="#"
              className="text-base-dark text-sm font-medium border-b border-base-mid-25 pb-0.5"
            >
              Learn more →
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroBg}
            alt="Community gathering and support"
            className="w-full h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      <div className="flex gap-8 mt-12 pt-8 border-t border-base-mid-25 flex-wrap">
        <div>
          <p className="text-4xl font-medium text-accent">500+</p>
          <p className="text-xs text-gold uppercase tracking-widest mt-1">Active participants</p>
        </div>
        <div className="w-px bg-base-mid-25" />
        <div>
          <p className="text-4xl font-medium text-accent">BIPOC</p>
          <p className="text-xs text-gold uppercase tracking-widest mt-1">Women centered</p>
        </div>
        <div className="w-px bg-base-mid-25" />
        <div>
          <p className="text-4xl font-medium text-accent">3 Pillars</p>
          <p className="text-xs text-gold uppercase tracking-widest mt-1">Network · Learn · Access</p>
        </div>
      </div>
    </section>
  )
}

export default Hero