import { Heart, UserCircle, Mail } from 'lucide-react'

const team = [
  {
    name: 'Lorem Ipsum',
    role: 'Founder / Director',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, ut enim ad minim veniam quis nostrud.',
    quote: '"Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt."',
    tags: ['Lorem Ipsum', 'Dolor Sit', 'Amet Consectetur'],
  },
  {
    name: 'Lorem Ipsum',
    role: 'Director',
    bio: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident.',
    quote: '"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium."',
    tags: ['Lorem Ipsum', 'Dolor Sit Amet', 'Consectetur'],
  },
]

function TeamSection() {
  return (
    <section className="bg-[#E0F2F1] px-12 py-16" data-aos="fade-up">

      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] tracking-widest uppercase text-[#A07820] font-medium border border-[#A07820] px-3.5 py-1 rounded-full inline-flex items-center gap-1.5 mb-5">
          <Heart className="w-3.5 h-3.5" /> Our Leadership
        </span>

        <h2 className="text-3xl font-normal text-[#085041] leading-snug tracking-tight mb-5">
          Meet the people <br />
          <em className="italic text-[#A07820]">behind the mission.</em>
        </h2>

        <div className="w-10 h-px bg-[#A07820] mx-auto mb-6" />

        <p className="text-sm text-[#0F6E56] leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
          ad minim veniam.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {team.map(({ name, role, bio, quote, tags }) => (
          <div key={name} className="bg-gray-50 rounded-2xl overflow-hidden border border-[#085041]/10">

            <div className="bg-[#E0F2F1] h-56 flex items-center justify-center">
              <UserCircle className="w-18 h-18 text-[#A07820]/50" strokeWidth={1.5} />
            </div>

            <div className="p-6">
              <p className="text-lg font-semibold text-[#085041] mb-0.5">{name}</p>
              <p className="text-sm text-[#A07820] font-medium mb-3.5">{role}</p>

              <p className="text-xs text-[#0F6E56] leading-relaxed mb-5">{bio}</p>

              <div className="bg-white border-l-[2.5px] border-[#A07820] rounded-r-lg px-4 py-3 mb-5">
                <p className="text-xs italic text-[#085041] leading-relaxed">{quote}</p>
              </div>

              <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-2">Areas of focus</p>
              <div className="flex gap-1.5 flex-wrap mb-5">
                {tags.map((tag) => (
                  <span key={tag} className="bg-[#E0F2F1] text-[#085041] text-xs px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="inline-flex items-center gap-1.5 bg-[#085041] text-white text-xs font-medium px-4 py-2.5 rounded-lg"
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