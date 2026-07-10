import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/logos/logdark.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Team", href: "/team" },
    { name: "Contact", href: "/contact" },
  ];

  const desktopLink = ({ isActive }) =>
    `relative pb-1 font-medium transition-colors text-sm ${
      isActive ? "text-accent" : "text-gold hover:text-accent"
    } after:absolute after:left-0 after:bottom-0 after:h-[1.5px] after:bg-accent after:transition-all after:duration-300 ${
      isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
    }`;

  return (
    <>
      {/* ================= HEADER ================= */}

      <header className="bg-mist sticky top-0 z-50 backdrop-blur-md">

        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-10 py-5">

          <NavLink to="/">
            <img
              src={logo}
              alt="Cygnet"
              className="h-7 w-auto"
            />
          </NavLink>

          {/* Desktop */}

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <NavLink
                    end={item.href === "/"}
                    to={item.href}
                    className={desktopLink}
                  >
                    {item.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Hamburger */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden relative w-9 h-9 flex items-center justify-center"
          >
            <div className="w-6 flex flex-col gap-[5px]">

              <span
                className={`h-[1.5px] bg-accent rounded-full transition-all duration-300 ${
                  menuOpen
                    ? "rotate-45 translate-y-[6px]"
                    : ""
                }`}
              />

              <span
                className={`h-[1.5px] bg-accent rounded-full transition-all duration-300 ${
                  menuOpen
                    ? "opacity-0"
                    : ""
                }`}
              />

              <span
                className={`h-[1.5px] bg-accent rounded-full transition-all duration-300 ${
                  menuOpen
                    ? "-rotate-45 -translate-y-[6px]"
                    : ""
                }`}
              />

            </div>
          </button>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <div
        className={`fixed inset-0 z-[60] bg-mist transition-all duration-500 md:hidden ${
          menuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col h-full">

          {/* Top */}

          <div className="flex items-center justify-between px-6 py-6">

            <img
              src={logo}
              alt="logo"
              className="h-7 w-auto"
            />

            <button
              onClick={() => setMenuOpen(false)}
              className="text-accent text-xl tracking-widest uppercase hover:opacity-70 transition"
            >
              Close
            </button>

          </div>

          {/* Content */}

          <div className="flex-1 flex flex-col justify-center px-8">

            <p className="uppercase tracking-[0.4em] text-xs text-gold mb-12">
              Navigation
            </p>

            <nav>

              <ul className="space-y-8">

                {navLinks.map((item, index) => (
                  <li
                    key={item.name}
                    style={{
                      transitionDelay: `${index * 100}ms`,
                    }}
                    className={`transition-all duration-500 ${
                      menuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    <NavLink
                      to={item.href}
                      end={item.href === "/"}
                      onClick={() => setMenuOpen(false)}
                      className={({ isActive }) =>
                        `group inline-flex items-center gap-4 text-5xl font-serif tracking-wide transition-all duration-300 ${
                          isActive
                            ? "text-accent"
                            : "text-gold hover:text-accent"
                        }`
                      }
                    >
                      <span className="text-base text-gold/40">
                        0{index + 1}
                      </span>

                      {item.name}
                    </NavLink>
                  </li>
                ))}

              </ul>

            </nav>

          </div>

          {/* Footer */}

          <div className="px-8 pb-10">

            <div className="border-t border-gold-dark pt-8">

              <div className="flex justify-between uppercase tracking-[0.25em] text-[11px] text-gold">

                <a
                  href="#"
                  className="hover:text-accent transition"
                >
                  Instagram
                </a>

                <a
                  href="#"
                  className="hover:text-accent transition"
                >
                  LinkedIn
                </a>

                <a
                  href="#"
                  className="hover:text-accent transition"
                >
                  Email
                </a>

              </div>

              <p className="mt-8 text-[10px] tracking-[0.35em] text-gold/50 uppercase">
                © 2026 Cygnet Initiative
              </p>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default Header;