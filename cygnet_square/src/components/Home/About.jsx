import right_img from '../../../public/assets/imgs/img1.jpg'
import { Globe, Users, TrendingUp, ArrowRight, Heart } from 'lucide-react'

const pillars = [
  {
    icon: Globe,
    title: 'Networking & Connection.',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam quis nostrud exercitation ullamco.',
  },
  {
    icon: Users,
    title: 'Capacity Building.',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur sint.',
  },
  {
    icon: TrendingUp,
    title: 'Economic Empowerment.',
    body: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
]

function About() {
  return (
    <section className="bg-white px-12 py-16 grid md:grid-cols-2 grid-cols-1 gap-12 items-center">

      {/* Left — copy */}
      <div>
        <span className="text-[11px] tracking-widest uppercase text-[#A07820] font-medium border border-[#A07820] px-3 py-1 rounded-full">
          Who we are
        </span>

        <h2 className="text-4xl font-medium text-[#085041] leading-tight tracking-tight mt-4 mb-5">
          Inclusive by design,{' '}
          <span className="text-[#A07820]">not by chance.</span>
        </h2>

        <p className="text-sm text-gray-700 leading-relaxed mb-3">
          Lorem ipsum dolor sit amet,{' '}
          <strong>consectetur adipiscing elit, sed do eiusmod</strong> tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
        <p className="text-sm text-gray-500 leading-relaxed mb-7">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <div className="flex flex-col gap-3 mb-8">
          {pillars.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-gray-50 border border-[#0F6E56]/10 rounded-xl p-4 flex gap-4 items-start"
            >
              <div className="bg-[#E0F2F1] rounded-lg p-2 flex-shrink-0">
                <Icon className="w-5 h-5 text-[#085041]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#085041] mb-1">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="inline-flex items-center gap-2 bg-[#085041] hover:bg-[#085041]/20 transition-all duration-250 text-white text-sm font-medium px-6 py-3 rounded-lg"
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
        <div className="absolute top-5 -right-4 bg-[#085041] text-white rounded-xl px-4 py-2.5 hover:px-5 hover:py-3 transition-all duration-250 text-center shadow-lg">
          <p className="text-xl font-semibold leading-none">500+</p>
          <p className="text-[10px] opacity-75 tracking-wide mt-1">Lives impacted</p>
        </div>

        {/* Bottom-left badge */}
        <div className="absolute bottom-6 -left-4 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-lg">
          <div className="bg-[#E0F2F1] rounded-full p-2">
            <Heart className="w-4 h-4 text-[#085041]" />
          </div>
          <div>
            <p className="text-[10px] text-gray-900 tracking-wide">Community-driven</p>
            <p className="text-sm font-semibold text-[#085041]">Since 2020</p>
          </div>
        </div>
      </div>

    </section>
  )
}

export default About