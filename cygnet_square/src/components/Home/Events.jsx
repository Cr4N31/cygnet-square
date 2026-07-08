import { MapPin } from "lucide-react"
function Events() {
    const events = [
    {
    tag: 'Workshop',
    bgColor: 'bg-base-mid',
        title: 'Digital Skills for Newcomer Women',
        location: 'lorem',
        description: 'A hands-on session covering essential digital tools, online safety, and navigating government services online...',
        image: null,
    },
    {
      tag: 'Panel',
      bgColor: 'bg-base-dark',
        title: 'Women Leading Change: Voices from the Community',
        location: 'lorem',
        description: 'A candid conversation featuring BIPOC women leaders sharing stories of resilience, advocacy, and economic empowerment...',
        image: null,
    },
    {
      tag: 'Networking',
      bgColor: 'bg-gold',
        title: 'Community Mixer & Inclusive Networking Night',
        location: 'Cygnet Square Hub',
        description: 'An evening celebrating community connection — meet mentors, peers, and allies committed to inclusive growth...',
        image: null,
    },
    ]
  return (
    <section className="bg-base p-10">

      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 items-center mb-10">
        <div className="flex flex-col gap-2">
          <span className="border border-gold rounded-full w-fit text-[11px] tracking-widest uppercase text-gold font-medium px-3 py-1">
            Cygnet Events
          </span>
          <h2 className="text-3xl font-medium text-accent leading-snug tracking-tight">
            Empowering women through{' '}
            <span className="text-gold">capacity-building events</span>
          </h2>
            <p className="text-sm text-white/60 leading-relaxed">
            Join our workshops, networking mixers, and panels — designed to equip
            women from underserved communities with real tools for social and
            economic growth.
            </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" data-aos="fade-up">
        {events.map(({ tag, bgColor, title, location, description, image }) => (
          <div key={title} className="bg-accent-30 rounded-xl overflow-hidden border border-base-mid-25">

            <div className={`${bgColor} h-40 relative flex items-center justify-center`}>
              <span className="absolute top-3 left-3 bg-white text-base-dark text-[11px] font-medium px-3 py-1 rounded-full">
                {tag}
              </span>
              {image
                ? <img src={image} alt={title} className="w-full h-full object-cover absolute inset-0" />
                : null
              }
            </div>

            
            <div className="p-4 group cursor-pointer transition-all duration-200 rounded-b-xl">
            <div className="flex gap-3 items-start mb-3">
                <div className="bg-white group-hover:bg-base-dark transition-all duration-200 rounded-lg px-3 py-1.5 text-center min-w-[44px] transition-colors duration-200">
                <p className="text-[9px] uppercase text-base-mid group-hover:text-accent-light tracking-wider m-0 transition-colors duration-200">Date</p>
                <p className="text-sm font-medium text-base-dark group-hover:text-on-base m-0 transition-colors duration-200">TBA</p>
                </div>
                <div>
                <p className="text-sm font-medium text-gold leading-snug mb-1">{title}</p>
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