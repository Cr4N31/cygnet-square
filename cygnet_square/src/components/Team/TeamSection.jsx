import femaleimg from "../../../public/assets/userImgs/Maryam.jpeg";
import { UserRound } from "lucide-react";

const team = [
  {
    name: "Maryam Mohammed",
    role: "Founder / Director",
    img: femaleimg,
    bio: "Building networks and resources so every woman has a seat at the table.",
  },
  {
    name: "Sherifat Ogede",
    role: "Director",
    img: null,
    bio: "Designing culturally grounded programs that build lasting community capacity.",
  },
];

function TeamSection() {
  return (
    <section className="bg-mist px-6 sm:px-10 lg:px-12 pt-16 pb-16">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <h2 className="text-4xl font-semibold text-accent leading-snug tracking-tight mb-5">
          Meet the people <br />
          <span>behind the mission.</span>
        </h2>

        <div className="w-10 h-px bg-gold mx-auto mb-6" />

        <p className="text-lg text-abyss/70 leading-relaxed">
          Cygnet Square is led by people who believe that empowering women
          through community and opportunity is a responsibility, not just a
          program.
        </p>
      </div>

      {/* Team */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {team.map(({ name, role, img, bio }) => (
          <div
            key={name}
            className="flex gap-4 items-start bg-white rounded-xl border border-accent/15 p-4"
          >
            {/* Photo */}
            <div className="shrink-0 w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden bg-accent/10 flex items-center justify-center">
              {img ? (
                <img
                  src={img}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white/15 text-abyss">
                  <UserRound className="w-11 h-11 stroke-[1.5]" />
                </div>
              )}
            </div>

            {/* Content */}
            <div className="min-w-0">
              <p className="text-sm font-semibold text-abyss">{name}</p>
              <p className="text-xs text-accent font-medium mb-2">{role}</p>
              <p className="text-xs text-abyss/60 leading-relaxed mb-3">
                {bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamSection;
