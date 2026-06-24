import { NavLink } from "react-router-dom"

function Header() {
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Team', href: '/team' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="flex justify-between items-center p-8 bg-[#E0F2F1]">
      <div className="flex gap-4 items-center">
        <img alt="cygnet-logo" />
        <p className="text-[#A07820] font-medium">Cygnet Square</p>
      </div>
      <nav>
        <ul className="flex gap-6">
          {navLinks.map((n) => (
            <li key={n.name}>
              <NavLink
                to={n.href}
                end={n.href === '/'}
                className={({ isActive }) =>
                  `relative pb-1 font-medium transition-colors ${
                    isActive
                      ? 'text-[#A07820]'
                      : 'text-[#A07820] hover:text-[#085041]'
                  } after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-[#A07820] after:transition-all after:duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0'
                  }`
                }
              >
                {n.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

export default Header