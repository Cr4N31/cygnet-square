import right_img from '/assets/imgs/img3.webp'
function AboutHero() {
  return (
    <section className="bg-accent-light px-12 py-16" data-aos="fade-up">

      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[11px] tracking-widest uppercase text-gold font-medium border border-gold px-3.5 py-1 rounded-full inline-block mb-5">
          About Cygnet Square
        </span>

        <h1 className="text-4xl font-normal text-accent leading-snug tracking-tight mb-5">
          We are building a <br />
          <em className="italic text-gold">legacy of empowerment.</em>
        </h1>

        <div className="w-10 h-px bg-gold mx-auto mb-6" />

        <p className="text-sm text-white/60 leading-relaxed">
          Cygnet Square is an inclusive and resilient organization that brings women together to connect, 
          learn, and grow. Through a supportive community built on collaboration, diversity, and shared experiences,
          we create opportunities that empower women to overcome barriers, develop practical skills, and build brighter, 
          more independent futures.
        </p>
      </div>

      <div className="bg-base-mid rounded-2xl min-h-[320px] relative overflow-hidden">
        <picture>
          <source type="image/webp" srcSet="/assets/imgs/img4.webp" />
          <img
            src={right_img}
            alt="Cygnet Square community"
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>

    </section>
  )
}

export default AboutHero