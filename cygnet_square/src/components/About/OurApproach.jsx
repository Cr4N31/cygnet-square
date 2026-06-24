import { Users, Lightbulb, TrendingUp } from 'lucide-react'

const pillars = [
  {
    num: '01',
    icon: Users,
    title: 'Networking & Connection',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'Capacity Building',
    body: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Economic Empowerment',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
]

function OurApproach() {
  return (
    <section className="bg-[#E0F2F1] px-12 py-16" data-aos="fade-up">

      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="text-3xl font-normal text-[#085041] tracking-tight mb-4">
          Our <em className="italic text-[#A07820]">integrated approach.</em>
        </h2>
        <div className="w-10 h-px bg-[#A07820] mx-auto mb-5" />
        <p className="text-sm text-[#0F6E56] leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map(({ num, icon: Icon, title, body }) => (
          <div key={num} className="bg-white rounded-2xl p-7">
            <span className="text-[11px] text-[#A07820] font-medium tracking-wider">{num}</span>
            <div className="w-9 h-9 bg-[#E0F2F1] rounded-lg flex items-center justify-center my-4">
              <Icon className="w-4.5 h-4.5 text-[#085041]" />
            </div>
            <p className="text-base font-medium text-[#085041] mb-1.5">{title}</p>
            <p className="text-xs text-[#0F6E56] leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default OurApproach