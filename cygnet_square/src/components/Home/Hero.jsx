import heroBg from '/assets/imgs/hero.png'

function Hero() {
  return (
    <section className="bg-mist px-6 sm:px-10 lg:px-12 pt-16 pb-12 min-h-[520px]" data-aos="fade-up">
      <div className="flex flex-col md:flex-row gap-10 lg:gap-14 items-center">
        <div className="max-w-2xl">
          <span className="text-[11px] dm-sans tracking-widest uppercase text-gold font-medium">
            Inclusive ·  Resourceful · Resilient
          </span>

          <h1 className="text-5xl heading text-accent font-bold leading-tight mt-4 mb-6 tracking-tight">
            Where women come to connect, grow and thrive.
          </h1>

          <p className="text-base leading-relaxed mb-8 max-w-lg">
            We create opportunities for women through networking programs, skills development and access
            to essential resources and empowering independent, financially secure lives.
          </p>

          <div className="flex gap-5 items-center flex-wrap">
            <a
              href="/contact"
              className="bg-gold text-on-base text-sm font-medium px-6 py-3 rounded-lg"
            >
              Join the community
            </a>
            <a
              href="/about"
              className="text-gold text-sm font-medium pb-0.5"
            >
              Learn more →
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroBg}
            alt="Community gathering and support"
            className="w-xl h-full object-cover"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>

      <div className="flex gap-8 mt-12 pt-8 border-t border-base-mid-25 flex-wrap">
        <div>
          <p className="text-4xl font-medium text-[#0C2E3A]">500+</p>
          <p className="text-sm text-gold uppercase tracking-widest mt-1">Active participants</p>
        </div>
        <div className="w-px bg-base-mid-25" />
        <div>
          <p className="text-4xl font-medium text-[#0C2E3A]">BIPOC</p>
          <p className="text-sm text-gold uppercase tracking-widest mt-1">Women centered</p>
        </div>
        <div className="w-px bg-base-mid-25" />
        <div>
          <p className="text-4xl font-medium text-[#0C2E3A]">3 Pillars</p>
          <p className="text-sm text-gold uppercase tracking-widest mt-1">Network · Learn · Access</p>
        </div>
      </div>
    </section>
  )
}

export default Hero