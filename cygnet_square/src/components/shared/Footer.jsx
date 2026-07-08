import { Camera, ArrowRight, Feather } from 'lucide-react'
import { FaInstagram, FaLinkedin, FaFacebookF} from 'react-icons/fa'
import logo from '../../../public/assets/logos/logolight.png'

const navLinks = ['Home', 'About', 'Events', 'Support', 'Contact']
const programs = ['Digital Literacy', 'Networking', 'Capacity Building', 'Mentorship']
const socials = [FaInstagram, FaLinkedin, FaFacebookF]

function Footer() {
  return (
    <footer className="bg-base px-12 pt-12">

      <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1.2fr] gap-12 pb-10">

        {/* Brand */}
        <div>
          <div className="flex items-center gap-2.5 mb-4">
              <img src={logo} alt="Cygnet Square Logo" className="w-24" />
            <span className="text-base font-medium text-on-base tracking-tight">Cygnet Square</span>
          </div>
          <p className="text-xs text-accent-light opacity-60 leading-relaxed mb-6 max-w-[240px]">
            Empowered Women. Inclusive Communities. Building tools for social
            and economic growth, together.
          </p>
          <div className="flex gap-2.5">
            {socials.map((Icon, i) => (
              <div
                key={i}
                className="w-8 h-8 rounded-full bg-white/[0.08] flex items-center justify-center cursor-pointer hover:bg-gold-dark transition-colors"
              >
                <Icon className="w-4 h-4 text-accent-light" />
              </div>
            ))}
          </div>
        </div>

        {/* Navigate */}
        <div>
          <p className="text-[11px] tracking-widest uppercase text-gold-dark font-medium mb-5">Navigate</p>
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <a key={link} href="#" className="text-sm text-accent-light opacity-75 hover:text-on-base transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Programs */}
        <div>
          <p className="text-[11px] tracking-widest uppercase text-gold-dark font-medium mb-5">Programs</p>
          <div className="flex flex-col gap-2.5">
            {programs.map((program) => (
              <a key={program} href="#" className="text-sm text-accent-light opacity-75 hover:text-on-base transition-colors">
                {program}
              </a>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <p className="text-[11px] tracking-widest uppercase text-gold-dark font-medium mb-5">Stay connected</p>
          <p className="text-xs text-accent-light opacity-60 leading-relaxed mb-4">
            Get updates on upcoming events and programs.
          </p>
          <form className="flex bg-white/[0.07] border border-white/15 rounded-lg p-1 pl-3.5 items-center">
            <input
              type="email"
              placeholder="Your email"
              className="bg-transparent border-none outline-none text-on-base text-xs flex-1 py-2 placeholder:text-accent-light/40"
            />
            <button
              type="submit"
              className="bg-gold-dark text-on-base rounded-md px-3.5 py-2 flex items-center hover:bg-gold-dark transition-colors"
            >
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-5 flex justify-between items-center flex-wrap gap-3">
        <p className="text-xs text-accent-light opacity-50">© 2026 Cygnet Square. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="text-xs text-accent-light opacity-50 hover:text-accent-light transition-colors">Privacy Policy</a>
          <a href="#" className="text-xs text-accent-light opacity-50 hover:text-accent-light transition-colors">Terms of Service</a>
        </div>
      </div>

    </footer>
  )
}

export default Footer