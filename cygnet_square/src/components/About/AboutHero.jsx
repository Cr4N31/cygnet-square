import img from '../../../public/assets/imgs/img4.jpg'
function AboutHero() {
  return (
    <section className="bg-[#E0F2F1] px-12 py-16" data-aos="fade-up">

      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-[11px] tracking-widest uppercase text-[#A07820] font-medium border border-[#A07820] px-3.5 py-1 rounded-full inline-block mb-5">
          About Cygnet Square
        </span>

        <h1 className="text-4xl font-normal text-[#085041] leading-snug tracking-tight mb-5">
          We are building a <br />
          <em className="italic text-[#A07820]">legacy of empowerment.</em>
        </h1>

        <div className="w-10 h-px bg-[#A07820] mx-auto mb-6" />

        <p className="text-sm text-[#0F6E56] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
          ad minim veniam quis nostrud exercitation ullamco laboris.
        </p>
      </div>

      <div className="bg-[#0F6E56] rounded-2xl min-h-[320px] relative overflow-hidden">
        <img
          src={img}
          alt="Cygnet Square community"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

    </section>
  )
}

export default AboutHero