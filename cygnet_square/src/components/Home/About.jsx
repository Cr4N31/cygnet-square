import right_img from '/assets/imgs/img1.webp'
import { Globe, Users, TrendingUp, ArrowRight, Heart } from 'lucide-react'

const pillars = [
  {
    icon: Globe,
    title: 'Networking & Connection.',
    body: 'We create opportunities for women to build meaningful relationships through mentorship programs, peer support circles, and community meetups that foster trust, collaboration, and personal growth.',
  },
  {
    icon: Users,
    title: 'Capacity Building.',
    body: 'We deliver practical, hands-on training in digital literacy, career development, financial management, entrepreneurship, leadership, and other essential life and workplace skills.',
  },
  {
    icon: TrendingUp,
    title: 'Economic Empowerment.',
    body: 'We provide members with timely access to local opportunities, job postings, educational resources, and funding opportunities that promote long-term economic stability.',
  },
]

function About() {
  return (
    <section className="bg-mist px-12 py-16 grid md:grid-cols-2 grid-cols-1 gap-12 items-center">

      {/* Left — copy */}
      <div>
        <span className="text-[11px] tracking-widest uppercase text-[#A07820] font-medium border border-[#A07820] px-3 py-1 rounded-full">
          Who we are
        </span>

        <h2 className="text-4xl font-medium text-[#20B2AA] leading-tight tracking-tight mt-4 mb-5">
          Inclusive by design,{' '}
          <span className="text-[#D4AF37]">not by chance.</span>
        </h2>

        <p className="text-lg text-base leading-relaxed mb-3">
          Cygnet Square is an {' '}
          <strong>inclusive, resourceful, and resilient </strong> organization built to bring WOMEN together,
        </p>
        <p className="text-lg text-base leading-relaxed mb-7">
          We create opportunities for women to connect, grow, and thrive through inclusive networking programs, 
          hands-on skills development workshops, and access to essential resources. Rooted in community and driven by purpose, 
          we equip women with the tools, relationships, and knowledge they need to build independent and financially secure lives. Because when women rise together, entire communities are transformed
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-base border border-[#0F6E56]/10 rounded-xl p-4 flex gap-4 items-start"
            >
              <div className="bg-[#20B2AA] rounded-lg p-2 flex-shrink-0">
                <Icon className="w-5 h-5 text-[#085041]" />
              </div>
              <div>
                <h3 className="text-xl font-bold cormorant text-[#D4AF37] mb-1">{title}</h3>
                <p className="text-sm text-white leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="/about"
          className="inline-flex items-center gap-2 bg-accent hover:bg-base-dark transition-all duration-250 text-white text-sm font-medium px-6 py-3 rounded-lg"
        >
          Learn more about us <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Right — image + floating badges */}
      <div className="relative">
        <div className="bg-[#0F6E56] rounded-2xl  overflow-hidden">
          <img
            src={right_img}
            alt="Cygnet Square community"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top-right badge */}
        <div className="absolute top-5 -right-4 bg-base text-white rounded-xl px-4 py-2.5 hover:px-5 hover:py-3 transition-all duration-250 text-center shadow-lg">
          <p className="text-xl font-semibold leading-none">500+</p>
          <p className="text-[10px] opacity-75 tracking-wide mt-1">Lives impacted</p>
        </div>

        {/* Bottom-left badge */}
        <div className="absolute bottom-6 -left-4 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-lg">
          <div className="bg-[#E0F2F1] rounded-full p-2">
            <Heart className="w-4 h-4 text-[#0C2E3A]" />
          </div>
          <div>
            <p className="text-[10px] text-gray-900 tracking-wide">Community-driven</p>
            <p className="text-sm font-semibold text-[#0C2E3A]">Since 2020</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About