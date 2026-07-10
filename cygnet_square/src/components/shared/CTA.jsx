function CTA() {
  return (
    <section className="bg-base px-12 py-16 text-center" data-aos="fade-up">

      <h2 className="text-4xl font-bold cormorant text-white mb-4">
        Want to <em className="italic text-gold-dark">join our mission?</em>
      </h2>

      <div className="w-10 h-px bg-gold-dark mx-auto mb-6" />

      <p className="text-sm text-accent-light opacity-75 leading-relaxed max-w-md mx-auto mb-8">
        Whether you want to volunteer, partner with us, or simply learn more —
        we'd love to hear from you. Every connection brings us closer to a world
        where every woman can thrive.
      </p>

      <div className="flex gap-3 justify-center flex-wrap">
        <a
          href="/contact"
          className="bg-gold-dark text-on-base hover:bg-white/10 transition-all duration-300 text-sm font-medium px-7 py-3 rounded-lg"
        >
          Get in Touch
        </a>
        <a
          href="/about"
          className="bg-white/[0.08] border border-white/20 text-on-base hover:bg-white/10 transition-all duration-300 text-sm font-medium px-7 py-3 rounded-lg"
        >
          Learn About Us
        </a>
      </div>

    </section>
  )
}

export default CTA