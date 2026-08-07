const stats = [
  { value: "2024", label: "Founded", accent: true },
  { value: "500+", label: "Women supported", accent: false },
  { value: "3", label: "Core pillars", accent: false },
  { value: "∞", label: "Connections made", accent: true },
];

function WhyWeStarted() {
  return (
    <section className="px-6 sm:px-10 lg:px-12 pt-16 pb-12" data-aos="fade-up">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1.35fr_0.85fr] lg:items-start">
        <article className="rounded-[28px] border border-[#0C2E26]/10 bg-mist p-7 shadow-[0_18px_60px_-28px_rgba(8,64,89,0.35)] backdrop-blur-sm md:p-10">
          <div className="mb-5 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.28em] text-gold-dark">
            <span className="inline-block h-px w-10 bg-gold" />
            Editorial story
          </div>

          <h2 className="mb-4 max-w-3xl text-[clamp(2.4rem,5vw,4.2rem)] font-semibold leading-none tracking-[-0.04em] text-gold">
            Why we <span className="text-gold">started.</span>
          </h2>

          <div className="mb-6 h-px w-16 bg-gold" />

          <div className="max-w-3xl space-y-5 text-[1.02rem] leading-[2] text-[#0C2E26]/80 md:text-[1.08rem]">
            <p>
              <span className="float-left mr-3 mt-1 text-[4.5rem] leading-none text-accent">
                C
              </span>
              ygnet Square was founded on the belief that{" "}
              <strong className="text-[#0C2E26]">
                no woman should face life’s challenges alone.
              </strong>{" "}
              Across many communities, women continue to encounter barriers to
              opportunity, limited access to essential resources, and a lack of
              supportive networks that enable personal and economic growth. We
              recognized the need for a space where women could connect, learn,
              and uplift one another.
            </p>

            <p>
              Our journey began with a simple purpose: to create an inclusive
              community that equips women with practical skills, meaningful
              relationships, and access to opportunities that foster confidence,
              independence, and long-term success. Today, that purpose continues
              to inspire everything we do as we work toward building stronger
              women, stronger families, and stronger communities.
            </p>
          </div>

          <div className="mt-8 border-l-2 border-gold pl-4 text-[0.98rem] italic leading-relaxed text-[#0C2E26]/80">
            “A place where women meet opportunity with confidence, community,
            and care.”
          </div>
        </article>

        <aside className="rounded-[28px] bg-abyss p-5 text-white shadow-[0_18px_60px_-28px_rgba(8,64,89,0.55)] md:p-6">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
            Snapshot
          </div>

          <div className="grid grid-cols-2 gap-3.5">
            {stats.map(({ value, label, accent }) => (
              <div
                key={label}
                className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-center"
              >
                <p
                  className={`text-3xl font-semibold leading-none ${accent ? "text-gold" : "text-white"}`}
                >
                  {value}
                </p>
                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-white/65">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

export default WhyWeStarted;
