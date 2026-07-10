import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import logo from '/assets/logos/logolight.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  const linkClass = ({ isActive }) =>
    `relative pb-1  font-medium transition-colors text-sm ${
      isActive ? 'text-accent' : 'text-gold hover:text-gold-80'
    } after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 ${
      isActive ? 'after:w-full' : 'after:w-0'
    }`

  return (
    <header className="bg-base">

      {/* Main bar */}
      <div className="flex justify-between items-center px-6 md:px-10 py-5">
        <div className="flex gap-3 items-center">
          <img src={logo} alt="cygnet-logo" className="w-full h-7" />
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-7">
            {navLinks.map((n) => (
              <li key={n.name}>
                <NavLink to={n.href} end={n.href === '/'} className={linkClass}>
                  {n.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-accent p-1"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <nav className="md:hidden border-t border-base-dark-10">
          <ul className="flex flex-col">
            {navLinks.map((n) => (
              <li key={n.name} className="border-b border-base-dark-10 last:border-b-0">
                <NavLink
                  to={n.href}
                  end={n.href === '/'}
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-6 py-4 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-base-dark bg-white/40'
                        : 'text-gold-dark hover:text-base-dark hover:bg-white/20'
                    }`
                  }
                >
                  <h3 className="dm-sans">{n.name}</h3>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      )}

    </header>
  )
}

export default Header