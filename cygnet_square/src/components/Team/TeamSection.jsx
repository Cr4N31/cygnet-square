import { Heart, UserCircle, Mail } from "lucide-react";
import maleUser from "/assets/userImgs/maleUser.jpg";
import femaleUser from "/assets/userImgs/femaleUser.jpg";

const team = [
  {
    name: "Maryam Mohammed",
    role: "Founder / Director",
    img: femaleUser,
    bio: "A passionate advocate for women's empowerment and community inclusion. With a deep commitment to breaking systemic barriers, Maryam founded Cygnet Square to ensure that every woman — regardless of background or circumstance — has access to the networks, skills, and resources she needs to thrive.",
    quote:
      '"Every woman deserves a safe community, a seat at the table, and the tools to build the life she envisions."',
    tags: ["Inclusive Networking", "Community Strategy", "Women Empowerment"],
  },
  {
    name: "Ghaffar AbdulAziz",
    role: "Director",
    img: maleUser,
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
      <div className="text-center max-w-xl mx-auto mb-12">
        <span className="text-[11px] tracking-widest uppercase text-accent font-medium border border-accent px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5 mb-5">
          <Heart className="w-3.5 h-3.5" /> Our Leadership
        </span>

        <h2 className="text-4xl font-semibold text-accent leading-snug tracking-tight mb-5">
          Meet the people <br />
          <span>behind the mission.</span>
        </h2>

        <div className="w-10 h-px bg-gold-dark mx-auto mb-6" />

        <p className="text-lg text-abyss/70 leading-relaxed">
          Cygnet Square is led by people who believe that empowering women
          through community and opportunity is not just a program — it's a
          responsibility.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {team.map(({ name, role, bio, quote, tags, img }) => (
          <div
            key={name}
            className="overflow-hidden rounded-2xl border border-abyss/20 bg-white/[0.06]"
          >
            <div className="bg-accent h-96 overflow-hidden">
              <img
                src={img}
                alt={name}
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
            </div>

            <div className="p-6">
              <p className="text-lg font-semibold text-accent mb-1">{name}</p>
              <p className="text-sm text-abyss font-medium mb-4">{role}</p>

              <p className="text-sm text-abyss/70 leading-relaxed mb-6">
                {bio}
              </p>

              <div className="bg-mist border-l-[2.5px] border-gold rounded-r-lg px-4 py-3 mb-6">
                <p className="text-sm italic text-abyss/70 leading-relaxed">
                  {quote}
                </p>
              </div>

              <p className="text-[10px] tracking-widest uppercase text-abyss/40 mb-2">
                Areas of focus
              </p>
              <div className="flex gap-1.5 flex-wrap mb-6">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-accent/10 border border-accent/30 text-abyss/70 text-xs font-medium px-3.5 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="mailto:cygnetsquare@gmail.com"
                className="inline-flex items-center gap-1.5 bg-abyss hover:bg-accent transition-all duration-300 text-on-base text-xs font-medium px-4 py-2.5 rounded-lg"
              >
                <Mail className="w-3.5 h-3.5" /> Send Email
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
