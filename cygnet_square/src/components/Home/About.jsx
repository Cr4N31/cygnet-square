import right_img from "/assets/imgs/img1.webp";
import { Globe, Users, TrendingUp, ArrowRight, Heart } from "lucide-react";

const pillars = [
  {
    icon: Globe,
    bgColor: "bg-base",
    title: "Networking & Connection.",
    body: "We create opportunities for women to build meaningful relationships through mentorship programs, peer support circles, and community meetups that foster trust, collaboration, and personal growth.",
  },
  {
    icon: Users,
    bgColor: "bg-gold",
    title: "Capacity Building.",
    body: "We deliver practical, hands-on training in digital literacy, career development, financial management, entrepreneurship, leadership, and other essential life and workplace skills.",
  },
  {
    icon: TrendingUp,
    bgColor: "bg-accent",
    title: "Economic Empowerment.",
    body: "We provide members with timely access to local opportunities, job postings, educational resources, and funding opportunities that promote long-term economic stability.",
  },
];

function About() {
  return (
    <section className="bg-mist px-12 py-16  gap-12 items-center">
      {/* Left — copy */}
      <div>
        <span className="text-[11px] tracking-widest uppercase text-[#A07820] font-medium border border-[#A07820] px-3 py-1 rounded-full">
          Who we are
        </span>

        <h2 className="text-4xl font-medium text-gold leading-tight tracking-tight mt-4 mb-5">
          Inclusive by design,{" "}
          <span className="text-[#D4AF37]">not by chance.</span>
        </h2>

        {/* Right — image + floating badges */}
        <div className="relative">
          <div className="bg-[#0F6E56] mb-4 rounded-2xl  overflow-hidden">
            <img
              src={right_img}
              alt="Cygnet Square community"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Top-right badge */}
          <div className="absolute top-5 -right-4 bg-base text-white rounded-xl px-4 py-2.5 hover:px-5 hover:py-3 transition-all duration-250 text-center shadow-lg">
            <p className="text-xl font-semibold leading-none">500+</p>
            <p className="text-[10px] opacity-75 tracking-wide mt-1">
              Lives impacted
            </p>
          </div>

          {/* Bottom-left badge */}
          <div className="absolute bottom-6 -left-4 bg-white/50 backdrop-blur-sm rounded-xl px-4 py-2.5 flex items-center gap-3 shadow-lg">
            <div className="bg-[#E0F2F1] rounded-full p-2">
              <Heart className="w-4 h-4 text-[#0C2E3A]" />
            </div>
            <div>
              <p className="text-[10px] text-gray-900 tracking-wide">
                Community-driven
              </p>
              <p className="text-sm font-semibold text-[#0C2E3A]">Since 2020</p>
            </div>
          </div>
        </div>

        <p className="text-lg text-base leading-relaxed mb-3">
          Cygnet Square is an{" "}
          <strong>inclusive, resourceful, and resilient </strong> organization
          built to bring WOMEN together,
        </p>
        <p className="text-lg text-base leading-relaxed mb-7">
          We create opportunities for women to connect, grow, and thrive through
          inclusive networking programs, hands-on skills development workshops,
          and access to essential resources. Rooted in community and driven by
          purpose, we equip women with the tools, relationships, and knowledge
          they need to build independent and financially secure lives. Because
          when women rise together, entire communities are transformed
        </p>

        <div
          className="grid grid-cols-1 md:grid-cols-3 mb-4 gap-4"
          data-aos="fade-up"
        >
          {pillars.map(({ icon, bgColor, title, body }) => {
            const Icon = icon;

            return (
              <div key={title} className="bg-base rounded-xl overflow-hidden">
                {/* Card header — icon + pattern instead of image */}
                <div
                  className={`${bgColor} m-2 h-10 items-center justify-center relative flex flex-col w-fit rounded-full gap-3`}
                >
                  {/* decorative circles pattern */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/5" />
                  <div className="absolute -bottom-8 -left-4 w-32 h-32 rounded-full bg-white/5" />
                  <div className="absolute top-4 left-8 w-12 h-12 rounded-full bg-white/5" />

                  <div className="w-10 h-8 rounded-full bg-white/10 flex items-center justify-center z-10">
                    <Icon className="w-6 h-6 text-white/80" strokeWidth={1.5} />
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold cormorant text-gold mb-1 px-4 pt-4">
                    {title}
                  </h3>
                  <p className="text-sm text-white/60 leading-relaxed px-4 pb-4">
                    {body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="/about"
          className="inline-flex items-center gap-2 bg-accent hover:bg-base-dark transition-all duration-250 text-white text-sm font-medium m-4 px-6 py-3 rounded-lg"
        >
          Learn more about us <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}

export default About;
