import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import logo from "/assets/logos/logolight.png";
import canadaCoatOfArms from "/assets/logos/canadian-coat-of-arms-transparent.png";

const programs = [
  "Digital Literacy",
  "Networking",
  "Capacity Building",
  "Mentorship",
];

const socials = [
  {
    icon: FaInstagram,
    href: "https://www.instagram.com/cygnetsquare?stkn=MXBoOWp1aTZiM2Fkag%3D%3D&utm_source=qr",
    label: "Instagram",
  },
  {
    icon: FaLinkedin,
    href: "#",
    label: "LinkedIn",
  },
  {
    icon: FaFacebookF,
    href: "#",
    label: "Facebook",
  },
];

const supportItems = [
  {
    label: "Government of Canada",
    logo: canadaCoatOfArms,
  },
];

function Footer() {
  return (
    <footer className="bg-abyss px-6 sm:px-10 lg:px-12 pt-16 pb-12">
      <div className="grid grid-cols-1 gap-12 pb-10 md:grid-cols-3 md:items-start">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <img src={logo} alt="Cygnet Square Logo" className="w-24" />
          </div>
          <p className="text-xs text-accent-light opacity-60 leading-relaxed mb-6 max-w-[240px]">
            Empowered Women. Inclusive Communities. Building tools for social
            and economic growth, together.
          </p>
          <div className="flex gap-2.5">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
              >
                <Icon className="w-4 h-4 text-accent-light" />
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <p className="text-[11px] tracking-widest uppercase text-accent font-medium mb-5">
            Programs
          </p>
          <div className="flex flex-col gap-2.5">
            {programs.map((program) => (
              <a
                key={program}
                href="#"
                className="text-sm text-accent-light opacity-75 hover:text-on-base transition-colors"
              >
                {program}
              </a>
            ))}
          </div>
        </div>

        {/* Supported by */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-[11px] tracking-widest uppercase text-accent font-medium mb-4">
            Supported by
          </p>
          <div className="flex flex-wrap justify-center gap-3 md:justify-end">
            {supportItems.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2.5 px-3 py-2"
              >
                {/* Light plate behind the coat of arms so its dark linework
                    and lighter shield details stay visible against bg-abyss */}
                <div className="flex h-16 w-16 items-center justify-center  p-2 shadow-sm">
                  <img
                    src={item.logo}
                    alt={item.label}
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="text-sm text-accent-light opacity-80 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 flex justify-between items-center flex-wrap gap-3">
        <p className="text-xs text-accent-light opacity-50">
          © 2026 Cygnet Square. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a
            href="#"
            className="text-xs text-accent-light opacity-50 hover:text-accent-light transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs text-accent-light opacity-50 hover:text-accent-light transition-colors"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
