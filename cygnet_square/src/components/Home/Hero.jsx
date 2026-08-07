import heroBg from "/assets/imgs/hero.webp";

function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-mist"
      data-aos="fade-up"
      data-aos-delay="100"
    >
      {/* Ambient motion styles */}
      <style>{`
        @keyframes drift-left {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-12px, -18px) rotate(4deg); }
        }
        @keyframes drift-right {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(14px, 16px) rotate(-4deg); }
        }
        .drift-left { animation: drift-left 14s ease-in-out infinite; }
        .drift-right { animation: drift-right 16s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .drift-left, .drift-right { animation: none; }
        }
      `}</style>

      {/* Left ring cluster — inset, not bled past the section edge */}
      <svg
        className="drift-left pointer-events-none absolute left-0 top-1 -translate-y-1/2 z-0 md:block hidden"
        width="360"
        height="360"
        viewBox="0 0 360 360"
        fill="none"
        aria-hidden="true"
        style={{ transform: "translate(-40%, -50%)" }}
      >
        <circle
          cx="180"
          cy="180"
          r="179"
          stroke="#D4AF37"
          strokeOpacity="0.7"
          strokeWidth="1.5"
        />
        <circle
          cx="230"
          cy="130"
          r="70"
          stroke="#20B2AA"
          strokeOpacity="0.7"
          strokeWidth="1.5"
        />
      </svg>

      {/* Right ring cluster */}
      <svg
        className="drift-right pointer-events-none absolute right-0 top-16 z-0 hidden md:block"
        width="320"
        height="320"
        viewBox="0 0 320 320"
        fill="none"
        aria-hidden="true"
        style={{ transform: "translateX(35%)" }}
      >
        <circle
          cx="160"
          cy="160"
          r="159"
          stroke="#20B2AA"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
        <circle
          cx="110"
          cy="210"
          r="58"
          stroke="#D4AF37"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />
      </svg>

      {/* Hero content */}
      <div
        className="relative z-10 flex flex-col justify-center items-center text-center px-4 pt-20 pb-16 max-w-4xl mx-auto"
        data-aos="fade-up"
      >
        <span className="text-lg dm-sans tracking-widest uppercase text-gold font-medium">
          Inclusive · Resourceful · Resilient
        </span>

        <h1 className="text-5xl md:text-6xl text-accent font-bold mt-4 mb-6 tracking-tighter leading-tight">
          Where women come to <br /> connect and thrive.
        </h1>

        <p className="text-base leading-relaxed mb-8 max-w-2xl text-abyss">
          We create opportunities for women through networking programs, skills
          development and access to essential resources and empowering
          independent, financially secure lives.
        </p>

        <div className="flex gap-4 items-center flex-wrap justify-center">
          <a
            href="/contact"
            className="transition-all duration-200 text-on-base text-sm font-medium px-6 py-3 rounded-full"
            style={{ backgroundColor: "#084059" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#20B2AA")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#084059")
            }
          >
            Join the community
          </a>
          <a
            href="/about"
            className="bg-mist text-abyss transition-all duration-200 text-sm font-medium px-6 py-3 rounded-full"
          >
            Learn more
          </a>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative z-10 w-full px-12">
        <img
          src={heroBg}
          alt="Community gathering and support"
          className="w-full h-[500px] rounded-3xl object-cover"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Stats row */}
      <div className="relative z-10 flex flex-col md:flex-row gap-6 md:gap-10 mt-12 pt-8 pb-16 border-t border-accent flex-wrap justify-center max-w-4xl mx-auto px-4">
        <div className="text-center">
          <p className="text-4xl font-medium text-[#0C2E3A]">500+</p>
          <p className="text-sm text-gold uppercase tracking-widest mt-1">
            Active participants
          </p>
        </div>
        <div className="w-px hidden md:block bg-base-mid-25" />
        <div className="text-center">
          <p className="text-4xl font-medium text-[#0C2E3A]">BIPOC</p>
          <p className="text-sm text-gold uppercase tracking-widest mt-1">
            Women centered
          </p>
        </div>
        <div className="w-px hidden md:block bg-base-mid-25" />
        <div className="text-center">
          <p className="text-4xl font-medium text-[#0C2E3A]">3 Pillars</p>
          <p className="text-sm text-gold uppercase tracking-widest mt-1">
            Network · Learn · Access
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
