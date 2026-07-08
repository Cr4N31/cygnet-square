import { User } from 'lucide-react'
import right_img from '../../../public/assets/imgs/img2.jpg'

const pillars = [
  {
    num: '01',
    title: 'Financial & Digital Literacy',
    body: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt labore dolore.',
  },
  {
    num: '02',
    title: 'Social Participation & Diversity',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    num: '03',
    title: 'Access & Mobility Support',
    body: 'Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim laborum.',
  },
]

function Support() {
  return (
    <section className="bg-base px-12 py-16 grid md:grid-cols-2 grid-cols-1 gap-16 items-start" data-aos="fade-up">

      {/* Left — heading + numbered list */}
      <div>
        <p className="text-[11px] tracking-widest uppercase text-gold font-medium mb-5">
          What we offer
        </p>

        <h2 className="text-4xl font-normal italic text-accent leading-tight tracking-tight mb-0">
          Support that meets{' '}
          <em className="text-gold">women where they are.</em>
        </h2>

        <div className="w-10 h-px bg-gold my-5" />

        <p className="text-sm text-white/60 leading-relaxed mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim
          veniam.
        </p>

        <div className="flex flex-col">
          {pillars.map(({ num, title, body }, i) => (
            <div
              key={num}
              className={`py-5 flex gap-5 items-start border-t border-base-dark-10 ${
                i === pillars.length - 1 ? 'border-b' : ''
              }`}
            >
              <span className="text-[11px] text-gold font-medium min-w-[24px] pt-0.5">
                {num}
              </span>
              <div>
                <p className="text-sm font-medium text-gold mb-1">{title}</p>
                <p className="text-xs text-white/60 leading-relaxed">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right — photo + pull quote */}
      <div className="flex flex-col gap-4">

        <div className="bg-base-dark rounded-2xl min-h-[300px] relative overflow-hidden">
          <img
            src={right_img}
            alt="Cygnet Square support"
            className="absolute inset-0 w-full h-full object-cover"
          />
            <div className="absolute bottom-4 right-4 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gold-dark" />
            <div>
              <p className="text-sm font-medium text-base-dark leading-tight">Supporting 500+ women</p>
              <p className="text-[10px] text-base-mid tracking-wide mt-0.5">Across communities</p>
            </div>
          </div>
        </div>

        <div className="bg-white/70 rounded-2xl p-6 border-l-4 border-gold-dark">
          <p className="text-base italic text-base-dark leading-relaxed mb-4">
            "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 bg-accent-light rounded-full flex items-center justify-center flex-shrink-0">
              <User className="w-4 h-4 text-base-dark" />
            </div>
            <div>
              <p className="text-xs font-medium text-base-dark">Community member</p>
              <p className="text-[11px] text-gold-dark">Cygnet Square participant</p>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

export default Support