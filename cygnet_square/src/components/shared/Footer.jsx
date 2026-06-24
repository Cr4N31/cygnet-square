import { Camera, ArrowRight, Feather } from 'lucide-react'
import { FaInstagram, FaLinkedin, FaFacebookF} from 'react-icons/fa'

const navLinks = ['Home', 'About', 'Events', 'Support', 'Contact']
const programs = ['Digital Literacy', 'Networking', 'Capacity Building', 'Mentorship']
const socials = [FaInstagram, FaLinkedin, FaFacebookF]

function Footer() {
  return (
    <footer className="bg-[#085041] px-12 pt-12">

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 pb-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <div className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center">
              <Feather className="w-4 h-4 text-[#A07820]" />
            </div>
            <span className="text-base font-medium text-white tracking-tight">Cygnet Square</span>
          </div>
          <p className="text-xs text-[#E0F2F1]/60 leading-relaxed mb-6 max-w-[240px]">
            Empowered Women. Inclusive Communities. Building tools for social
            and economic growth, together.
          </p>
          <div className="flex gap-2.5">
            {socials.map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center cursor-pointer hover:bg-[#A07820] transition-colors"
              >
                <Icon className="w-4 h-4 text-[#E0F2F1]" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <p className="text-[11px] tracking-widest uppercase text-[#A07820] font-medium mb-5">Navigate</p>
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-sm text-[#E0F2F1]/75 hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <p className="text-[11px] tracking-widest uppercase text-[#A07820] font-medium mb-5">Programs</p>
          <div className="flex flex-col gap-2.5">
            {programs.map((program) => (
              <a key={program} href="#" className="text-sm text-[#E0F2F1]/75 hover:text-white transition-colors">
                {program}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-[11px] tracking-widest uppercase text-[#A07820] font-medium mb-5">Stay connected</p>
          <p className="text-xs text-[#E0F2F1]/60 leading-relaxed mb-4">
            Get updates on upcoming events and programs.
          </p>
          <form className="flex bg-white/[0.07] border border-white/15 rounded-lg p-1 pl-3.5 items-center">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-none outline-none text-white text-xs flex-1 py-2 placeholder:text-[#E0F2F1]/40"
            />
            <button
              type="submit"
              className="bg-[#A07820] text-white rounded-md px-3.5 py-2 flex items-center hover:bg-[#8a661a] transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 flex justify-between items-center flex-wrap gap-3">
        <p className="text-xs text-[#E0F2F1]/50">© 2026 Cygnet Square. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-[#E0F2F1]/50 hover:text-[#E0F2F1] transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-[#E0F2F1]/50 hover:text-[#E0F2F1] transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer