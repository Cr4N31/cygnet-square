import { Heart, UserCircle, Mail } from 'lucide-react'

const team = [
  {
    name: 'Maryam Mohammed',
    role: 'Founder / Director',
    bio: "A passionate advocate for women's empowerment and community inclusion. With a deep commitment to breaking systemic barriers, Maryam founded Cygnet Square to ensure that every woman — regardless of background or circumstance — has access to the networks, skills, and resources she needs to thrive.",
    quote: '"Every woman deserves a safe community, a seat at the table, and the tools to build the life she envisions."',
    tags: ['Inclusive Networking', 'Community Strategy', 'Women Empowerment'],
  },
  {
    name: 'Ghaffar AbdulAziz',
    role: 'Director',
    bio: 'A dedicated community builder with a focus on creating culturally sensitive programs that celebrate diversity. Ghaffar brings expertise in organizational development, partnership building, and capacity-building initiatives that drive long-term social and economic impact.',
    quote: '"When we invest in women and welcome all voices with dignity, we build a community that lifts everyone."',
    tags: ['Capacity Building', 'Partnership Development', 'Program Design'],
  },
]

function TeamSection() {
  return (
    <section className="bg-accent-light px-12 py-16" data-aos="fade-up">

      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] tracking-widest uppercase text-gold-dark font-medium border border-gold px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-5">
          <Heart className="w-3.5 h-3.5" /> Our Leadership
        </span>

        <h2 className="text-3xl font-normal text-accent leading-snug tracking-tight mb-5">
          Meet the people <br />
          <em className="italic text-gold-dark">behind the mission.</em>
        </h2>

        <div className="w-10 h-px bg-gold-dark mx-auto mb-6" />

        <p className="text-sm text-white/60 leading-relaxed">
          Cygnet Square is led by people who believe that empowering women
          through community and opportunity is not just a program — it's a
          responsibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {team.map(({ name, role, bio, quote, tags }) => (
          <div key={name} className="bg-white/[0.06] rounded-2xl overflow-hidden border border-base-dark-10">

            <div className="bg-accent-light h-56 flex items-center justify-center">
              <UserCircle className="w-18 h-18 text-gold opacity-50" strokeWidth={1.5} />
            </div>

            <div className="p-6">
              <p className="text-lg font-semibold text-accent mb-0.5">{name}</p>
              <p className="text-sm text-gold font-medium mb-3.5">{role}</p>

              <p className="text-xs text-white/60 leading-relaxed mb-5">{bio}</p>

              <div className="bg-base border-l-[2.5px] border-gold-dark rounded-r-lg px-4 py-3 mb-5">
                <p className="text-xs italic text-gold leading-relaxed">{quote}</p>
              </div>

              <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-2">Areas of focus</p>
              <div className="flex gap-1.5 flex-wrap mb-5">
                {tags.map((tag) => (
                  <span key={tag} className="bg-accent-light text-gold text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href="mailto:cygnetsquare@gmail.com"
                className="inline-flex items-center gap-1.5 bg-base hover:bg-gold-dark transition-all duration-300 text-on-base text-xs font-medium px-4 py-2.5 rounded-lg"
              >
                <Mail className="w-3.5 h-3.5" /> Send Email
              </a>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default TeamSection