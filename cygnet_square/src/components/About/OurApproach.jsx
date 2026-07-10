import { Users, Lightbulb, TrendingUp } from 'lucide-react'

const pillars = [
  {
    num: '01',
    icon: Users,
    title: 'Networking & Connection',
    body: 'We create safe and inclusive spaces where women can build meaningful relationships, connect with mentors, exchange experiences, and grow through collaboration. By strengthening support networks, we foster confidence, belonging, and lasting community impact.',
  },
  {
    num: '02',
    icon: Lightbulb,
    title: 'Capacity Building',
    body: 'Through practical workshops, mentorship, and hands-on training, we equip women with the knowledge, digital skills, financial literacy, and leadership capabilities needed to unlock opportunities and thrive in an ever-changing world.',
  },
  {
    num: '03',
    icon: TrendingUp,
    title: 'Economic Empowerment',
    body: 'We connect women with resources, career pathways, entrepreneurial opportunities, and financial education that promote independence, sustainable livelihoods, and long-term economic resilience.',
  },
]

function OurApproach() {
  return (
    <section className="bg-accent-light px-12 py-16" data-aos="fade-up">

      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="text-3xl font-normal text-accent tracking-tight mb-4">
          Our <em className="italic text-gold">integrated approach.</em>
        </h2>
        <div className="w-10 h-px bg-gold mx-auto mb-5" />
        <p className="text-sm text-white/60 leading-relaxed">
          Our approach combines meaningful connections, practical skills development,
          and access to opportunities to empower women at every stage of their journey.
          Together, these pillars create lasting pathways toward confidence,
          independence, and sustainable growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {pillars.map(({ num, icon: Icon, title, body }) => (
          <div key={num} className="bg-white/[0.06] rounded-2xl p-7">
            <span className="text-[11px] text-gold font-medium tracking-wider">{num}</span>
            <div className="w-9 h-9 bg-base rounded-lg flex items-center justify-center my-4">
              <Icon className="w-4.5 h-4.5 text-gold" />
            </div>
            <h3 className="text-lg font-bold cormorant text-gold mb-1.5">{title}</h3>
            <p className="text-xs text-white/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default OurApproach