import { MapPin, Users, Mic, Handshake } from "lucide-react"

function Events() {
  const events = [
    {
      tag: 'Workshop',
      bgColor: 'bg-accent',
      icon: Users,
      title: 'Digital Skills for Newcomer Women',
      location: 'Toronto, ON',
      description: 'A hands-on session covering essential digital tools, online safety, and navigating government services online...',
    },
    {
      tag: 'Panel',
      bgColor: 'bg-base',
      icon: Mic,
      title: 'Women Leading Change: Voices from the Community',
      location: 'Virtual Event',
      description: 'A candid conversation featuring BIPOC women leaders sharing stories of resilience, advocacy, and economic empowerment...',
    },
    {
      tag: 'Networking',
      bgColor: 'bg-gold-dark',
      icon: Handshake,
      title: 'Community Mixer & Inclusive Networking Night',
      location: 'Cygnet Square Hub',
      description: 'An evening celebrating community connection — meet mentors, peers, and allies committed to inclusive growth...',
    },
  ]

  return (
    <section className="bg-base p-10">

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center mb-10">
        <div className="flex flex-col gap-2">
          <span className="border border-gold rounded-full w-fit text-[11px] tracking-widest uppercase text-gold font-medium px-3 py-1">
            Cygnet Events
          </span>
          <h2 className="text-4xl font-medium text-accent leading-snug tracking-tight">
            Empowering women through{' '}
            <span className="text-gold">capacity-building events</span>
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            We create opportunities for women to build meaningful relationships
            through mentorship programs, peer support circles, networking events,
            and community meetups that foster trust, collaboration, and personal
            growth.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up">
        {events.map(({ tag, bgColor, icon: Icon, title, location, description }) => (
          <div key={title} className="bg-accent-30 rounded-xl overflow-hidden border border-base-mid-25">

            {/* Card header — icon + pattern instead of image */}
            <div className={`${bgColor} h-40 relative flex flex-col items-center justify-center gap-3 overflow-hidden`}>

              {/* decorative circles pattern */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
              <div className="absolute -bottom-8 -left-4 w-32 h-32 rounded-full bg-white/5" />
              <div className="absolute top-4 left-8 w-12 h-12 rounded-full bg-white/5" />

              <span className="absolute top-3 left-3 bg-white text-base-dark text-[11px] font-medium px-3 py-1 rounded-full z-10">
                {tag}
              </span>

              <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center z-10">
                <Icon className="w-6 h-6 text-white/80" strokeWidth={1.5} />
              </div>
            </div>

            <div className="p-4 group cursor-pointer transition-all duration-200 rounded-b-xl">
              <div className="flex gap-3 items-start mb-3">
                <div className="bg-white group-hover:bg-base-dark transition-all duration-200 rounded-lg px-3 py-1.5 text-center min-w-[44px]">
                  <p className="text-[9px] uppercase text-base-mid group-hover:text-accent-light tracking-wider m-0 transition-colors duration-200">Date</p>
                  <p className="text-sm font-medium text-base-dark group-hover:text-on-base m-0 transition-colors duration-200">TBA</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold cormorant text-gold leading-snug mb-1">{title}</h3>
                  <p className="text-xs text-muted flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {location}
                  </p>
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed">{description}</p>
            </div>

          </div>
        ))}
      </div>

    </section>
  )
}

export default Events