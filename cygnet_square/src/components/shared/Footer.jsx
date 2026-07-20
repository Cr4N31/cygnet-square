import { Camera, ArrowRight, Feather } from 'lucide-react'
import { FaInstagram, FaLinkedin, FaFacebookF} from 'react-icons/fa'
import logo from '/assets/logos/logolight.png'

const navLinks = [{ label: 'Home', href: '/' }, { label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }]
const programs = ['Digital Literacy', 'Networking', 'Capacity Building', 'Mentorship']
const socials = [FaInstagram, FaLinkedin, FaFacebookF]

function Footer() {
  return (
    <footer className="bg-base px-12 pt-12">

      <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between gap-12 pb-10">

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