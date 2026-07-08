function CTA() {
  return (
    <section className="bg-base px-12 py-16 text-center" data-aos="fade-up">

      <h2 className="text-3xl font-normal heading tracking-tight mb-4">
        Want to <em className="italic text-gold-dark">join our mission?</em>
      </h2>

      <div className="w-10 h-px bg-gold-dark mx-auto mb-6" />

      <p className="text-sm text-accent-light opacity-75 leading-relaxed max-w-md mx-auto mb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad
        minim veniam.
      </p>

      <div className="flex gap-3 justify-center flex-wrap">
        <a
          href="#"
          className="bg-gold-dark text-on-base text-sm font-medium px-7 py-3 rounded-lg"
        >
          Get in Touch
        </a>
        <a
          href="#"
          className="bg-white/[0.08] border border-white/20 text-on-base text-sm font-medium px-7 py-3 rounded-lg"
        >
          Learn About Us
        </a>
      </div>

    </section>
  )
}

export default CTA