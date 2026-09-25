import { Camera, ArrowRight, Feather } from "lucide-react";
import { FaInstagram, FaLinkedin, FaFacebookF } from "react-icons/fa";
import logo from "/assets/logos/logolight.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
const programs = [
  "Digital Literacy",
  "Networking",
  "Capacity Building",
  "Mentorship",
];
const socials = [FaInstagram, FaLinkedin, FaFacebookF];

function Flag({ type }) {
  if (type === "quebec") {
    return (
      <svg
        viewBox="0 0 28 18"
        className="h-5 w-7 rounded-sm overflow-hidden"
        aria-label="Quebec flag"
      >
        <rect width="28" height="18" fill="#0b3c8c" />
        <rect x="0" y="6.25" width="28" height="5.5" fill="#ffffff" />
        <rect x="11.25" y="0" width="5.5" height="18" fill="#ffffff" />
        <rect x="13.25" y="0" width="1.5" height="18" fill="#d72638" />
        <rect x="0" y="8.5" width="28" height="1.5" fill="#d72638" />
      </svg>
    );
  }

  if (type === "canada") {
    return (
      <svg
        viewBox="0 0 28 18"
        className="h-5 w-7 rounded-sm overflow-hidden"
        aria-label="Canada flag"
      >
        <rect width="28" height="18" fill="#ffffff" />
        <rect width="7" height="18" fill="#d52b1e" />
        <rect x="21" width="7" height="18" fill="#d52b1e" />
        <rect x="7" width="14" height="18" fill="#ffffff" />
        <path
          d="M14 3.2L15.1 6.3L18.4 6.3L15.8 8.3L16.9 11.4L14 9.4L11.1 11.4L12.2 8.3L9.6 6.3L12.9 6.3L14 3.2Z"
          fill="#d52b1e"
        />
      </svg>
    );
  }

  return (
    <div className="flex h-5 w-7 items-center justify-center rounded-sm bg-[#F4E9C7] text-[8px] font-bold text-[#16314D]">
      CIA
    </div>
  );
}

const supportItems = [
  { label: "Government of Quebec", type: "quebec" },
  { label: "Government of Canada", type: "canada" },
  { label: "Canadian Imperial Advantage", type: "cia" },
];

function Footer() {
  return (
    <footer className="bg-abyss px-6 sm:px-10 lg:px-12 pt-16 pb-12">
      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-12 pb-10">
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
            {socials.map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center cursor-pointer hover:bg-[#D4AF37] transition-colors"
              >
                <Icon className="w-4 h-4 text-accent-light" />
              </div>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <p className="text-[11px] tracking-widest uppercase text-gold font-medium mb-5">
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
        <div className="w-full md:max-w-[420px]">
          <p className="text-[11px] tracking-widest uppercase text-gold font-medium mb-4">
            Supported by
          </p>
          <div className="flex flex-wrap gap-3">
            {supportItems.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2"
              >
                <Flag type={item.type} />
                <span className="text-xs text-accent-light opacity-80 whitespace-nowrap">
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
