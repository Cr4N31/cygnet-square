import { Heart, Mail, UserRound } from "lucide-react";

import femaleimg from "../../../public/assets/userImgs/Maryam.jpeg";

const team = [
  {
    name: "Maryam Mohammed",
    role: "Founder / Director",
    img: femaleimg,
    bio: "A passionate advocate for women's empowerment and community inclusion. With a deep commitment to breaking systemic barriers, Maryam founded Cygnet Square to ensure that every woman — regardless of background or circumstance — has access to the networks, skills, and resources she needs to thrive.",
    quote:
      '"Every woman deserves a safe community, a seat at the table, and the tools to build the life she envisions."',
    tags: ["Inclusive Networking", "Community Strategy", "Women Empowerment"],
  },
  {
    name: "Sherifat Ogede",
    role: "Director",
    img: null,
    bio: "A dedicated community builder with a focus on creating culturally sensitive programs that celebrate diversity. Ghaffar brings expertise in organizational development, partnership building, and capacity-building initiatives that drive long-term social and economic impact.",
    quote:
      '"When we invest in women and welcome all voices with dignity, we build a community that lifts everyone."',
    tags: ["Capacity Building", "Partnership Development", "Program Design"],
  },
];

function TeamSection() {
  return (
    <section
      className="bg-mist px-6 sm:px-10 lg:px-12 pt-16 pb-12"
      data-aos="fade-up"
    >
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] tracking-widest uppercase text-accent font-medium border border-accent px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-5">
          <Heart className="w-3.5 h-3.5" />
          Our Leadership
        </span>

        <h2 className="text-4xl font-semibold text-accent leading-snug tracking-tight mb-5">
          Meet the people <br />
          <span>behind the mission.</span>
        </h2>

        <div className="w-10 h-px bg-gold mx-auto mb-6" />

        <p className="text-lg text-abyss/70 leading-relaxed">
          Cygnet Square is led by people who believe that empowering women
          through community and opportunity is not just a program — it's a
          responsibility.
        </p>
      </div>

      {/* Team */}
      <div className="grid w-[100vh] grid-cols-1 md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {team.map(({ name, role, img, bio, quote, tags }) => (
          <div
            key={name}
            className="overflow-hidden rounded-xl border border-accent/20 bg-white/[0.06]"
          >
            {/* Profile Image */}
            <div className="bg-accent h-72 w-80 overflow-hidden flex items-center justify-center">
              {img ? (
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-white">
                  <UserRound className="w-11 h-11 stroke-[1.5]" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-5">
              <p className="text-base font-semibold text-accent mb-1">{name}</p>

              <p className="text-xs text-accent font-medium mb-3">{role}</p>

              <p className="text-xs text-black/70 leading-relaxed mb-5">
                {bio}
              </p>

              {/* Quote */}
              <div className="bg-mist border-l-[2.5px] border-accent rounded-r-lg px-3.5 py-2.5 mb-5">
                <p className="text-xs italic text-accent/70 leading-relaxed">
                  {quote}
                </p>
              </div>

              {/* Areas of Focus */}
              <p className="text-[9px] tracking-widest uppercase text-black/40 mb-2">
                Areas of focus
              </p>

              <div className="flex gap-1.5 flex-wrap mb-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent/10 border border-accent/30 text-accent/70 text-[11px] font-medium px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Email */}
              <a
                href="mailto:cygnetsquare@gmail.com"
                className="inline-flex items-center gap-1.5 bg-abyss hover:bg-accent transition-all duration-300 text-on-base text-xs font-medium px-3.5 py-2 rounded-lg"
              >
                <Mail className="w-3 h-3" />
                Send Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
